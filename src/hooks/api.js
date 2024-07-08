export const runStates = ["requires_action", "cancelled", "failed", "completed", "expired"]

const API_SERVER = import.meta.env.VITE_LOCAL_SERVER

export const createNewThread = async () => {
  try {
    const res = await fetch(`${API_SERVER}/api/new`, {
      method: "POST",
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export const fetchThread = async (threadId) => {
  if (!threadId) {
    throw new Error("threadId is required")
  }
  try {
    const res = await fetch(`${API_SERVER}/api/threads/${threadId}`)
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export const fetchRun = async (threadId, runId) => {
  if (!runId, !threadId) {
    throw new Error("runId and threadId are required")
  }
  try {
    const res = await fetch(`${API_SERVER}/api/threads/${threadId}/runs/${runId}`, {
      method: "GET",
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export const postMessage = async (threadId, message) => {
  if (!threadId, !message) {
    throw new Error("threadId and message are required")
  }
  try {
    const res = await fetch(`${API_SERVER}/api/threads/${threadId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: message }),
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error)
  }
}