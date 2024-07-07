import { useState, useEffect } from "react"
import { createNewThread, fetchThread, runStates } from "./api"

export default function useThread(run, setRun) {
  const [threadId, setThreadId] = useState(undefined)
  const [thread, setThread] = useState(undefined)
  const [messages, setMessages] = useState([])
  const [actionMessages, setActionMessages] = useState([])

  const clearThread = () => {
    sessionStorage.removeItem("thread_id")
    setThreadId(undefined)
    setThread(undefined)
    setMessages([])
    setActionMessages([])
  }

  useEffect(() => {
    if (threadId === undefined) {
      const storedThreadId = sessionStorage.getItem("thread_id")
      if (storedThreadId) {
        console.log(`Resuming thread ${storedThreadId}`);
        setThreadId(storedThreadId)
        fetchThread(storedThreadId)
        .then((threadData) => {
            console.log(`Retrieved thread ${threadData}`);
            setThread(threadData);
        })
        .catch((error) => { console.error(error) });
      } else {
          console.log("Creating new thread");
          createNewThread().then((data) => {
            setRun(data)
            setThreadId(data.thread_id)
            sessionStorage.setItem("thread_id", data.thread_id)
            console.log(`Created new thread ${data.thread_id}`);
            console.log(`Created new run ${data}`);
          })
      }
    }
  }, [setRun, threadId, setThreadId, setThread])

  useEffect(() => {
    if (!run || !runStates.includes(run.status)) {
      return
    }
    console.log(`Retrieving thread ${run.thread_id}`);
    fetchThread(run.thread_id)
        .then((threadData) => {
            console.log(`Retrieved thread ${threadData}`);
            setThread(threadData);
        })
        .catch((error) => { console.error(error) });
  }, [run, setThread])
  
  useEffect(() => {
    if (!thread) {
      return
    }
    console.log(`${thread}`);
    console.log(`Updating messages for thread ${thread.thread_id}`);
    const newMessages = [...thread.messages, ...actionMessages]
      .sort((a, b) => a.created_at - b.created_at)
      .filter((message) => message.hidden !== true)

    setMessages(newMessages)
  }, [thread, actionMessages, setMessages])

  return { 
    threadId, 
    messages, 
    actionMessages,
    setActionMessages, 
    clearThread 
  }
}