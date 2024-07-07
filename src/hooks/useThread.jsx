import { useState, useEffect } from "react"
import { createNewThread, fetchThread, runStates } from "./api"

export default function useThread(run, setRun) {
  const [threadId, setThreadId] = useState(null)
  const [thread, setThread] = useState(null)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (!threadId) {
        const storedThreadId = localStorage.getItem("thread_id");
        if (storedThreadId) {
            setThreadId(storedThreadId);
            fetchThread(storedThreadId).then(setThread);
        } else {
            createNewThread().then((data) => {
                setRun(data);
                setThreadId(data.thread_id);
                localStorage.setItem("thread_id", data.thread_id);
            });
        }
    }
  }, [threadId, setThreadId, setThread, setRun]);

  useEffect(() => {
    if (!run || !runStates.includes(run.status)) {
        return;
    }

    fetchThread(run.thread_id)
        .then((threadData) => {
            setThread(threadData);
        });
  }, [run, runStates, setThread]);

  useEffect(() => {
    if (!thread) {
        return;
    }
    let newMessages = [...thread.messages]
        .sort((a, b) => a.created_at - b.created_at)
        .filter((message) => message.hidden !== true)
    setMessages(newMessages);
  }, [thread, setMessages]);

  const clearThread = () => {
    localStorage.removeItem("thread_id")
    setThreadId(null)
    setThread(null)
    setMessages([])
  }

  return { 
    threadId, 
    messages, 
    clearThread 
  }
}