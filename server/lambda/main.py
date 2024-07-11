from typing import List, Optional

import os
from dotenv import load_dotenv
load_dotenv()
from fastapi import FastAPI, HTTPException
from openai import AsyncOpenAI
from openai.types.beta.threads.run import RequiredAction, LastError
from pydantic import BaseModel
from mangum import Mangum

app = FastAPI()

client = AsyncOpenAI(api_key=os.getenv("OPENAI_API_KEY"))
assistant_id = os.getenv("OPENAI_ASSISTANT_ID")
run_states = ["completed", "failed", "cancelled", "expired", "requires_action"]

class RunStatus(BaseModel):
  run_id: str
  thread_id: str
  status: str
  last_error: Optional[LastError]
  required_action: Optional[RequiredAction]
  
class ThreadMessage(BaseModel):
  content: str
  role: str
  hidden: bool
  id: str
  created_at: int

class Thread(BaseModel):
    messages: List[ThreadMessage]

class CreateMessage(BaseModel):
  content: str

@app.get("/")
async def root():
  return {"message": "This is my API"}

@app.post("/api/new")
async def post_new_thread():
  thread = await client.beta.threads.create()
  try: 
    await client.beta.threads.messages.create(
      thread_id=thread.id,
      content="Hello, I'm Hassan AI. How can I help you?",
      role="user",
      metadata={"type": "hidden"}
    )
  except Exception as e:
    raise HTTPException(status_code=500, detail=f"Error creating thread: {e}")
  
  try:
    run = await client.beta.threads.runs.create_and_poll(
      thread_id=thread.id,
      assistant_id=assistant_id,
    )

    return RunStatus(
      run_id=run.id,
      thread_id=thread.id,
      status=run.status,
      last_error=run.last_error,
      required_action=run.required_action
    )

  except Exception as e:
    raise HTTPException(status_code=500, detail=f"Error creating run: {e}")

@app.get("/api/threads/{thread_id}")
async def get_thread(thread_id: str):
  try:
    messages = await client.beta.threads.messages.list(
      thread_id=thread_id
    )
    res = [
      ThreadMessage(
        content=message.content[0].text.value,
        role=message.role,
        hidden="type" in message.metadata and message.metadata["type"] == "hidden",
        id=message.id,
        created_at=message.created_at
      )
      for message in messages.data
    ]
    
    return Thread(messages=res)
  except Exception as e:
    raise HTTPException(status_code=500, detail=f"Error retrieving messages: {e}")

@app.post("/api/threads/{thread_id}")
async def post_thread_message(thread_id: str, message: CreateMessage):
  if not thread_id:
    raise HTTPException(status_code=400, detail=f"Add thread_id: {e}")

  try:
    await client.beta.threads.messages.create(
        thread_id=thread_id,
        content=message.content,
        role="user"
    )
  except Exception as e:
      print(f"An error occurred: {e}")
      raise HTTPException(status_code=500, detail=f"Error creating new thread or run: {e}")
  
  run = await client.beta.threads.runs.create_and_poll(
      thread_id=thread_id,
      assistant_id=assistant_id
  )
  
  return RunStatus(
    run_id=run.id,
    thread_id=thread_id,
    status=run.status,
    last_error=run.last_error,
    required_action=run.required_action
  )
  
handler = Mangum(app, lifespan="off")
