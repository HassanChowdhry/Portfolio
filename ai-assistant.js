/* eslint-disable no-undef */
import OpenAI from "openai";
import * as dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY});

async function create_assistant() { 
  const ad = {
    name: "Hassan AI",
    instructions: "You are my assistant. You help people understant things about me",
    model: "gpt-3.5-turbo"
  }
  const assistant = await openai.beta.assistants.create({
    name: ad.name,
    instructions: ad.instructions,
    tools: [{ type: "file_search" }],
    model: ad.model
  });

  return assistant;
}

async function createVectorStore() {
  const vectorStore = await openai.beta.vectorStores.create({
    name: "my_vector_store"
  });
  return vectorStore;
}

const assistant = create_assistant();
const vectorStore = createVectorStore();

console.log(assistant);
console.log(vectorStore);

// add files to vector store

// threads