export const runStates = ["requires_action", "cancelled", "failed", "completed", "expired"]

const API_SERVER = "http://127.0.0.1:8000"

export const createNewThread = async () => {
  try {
    const res = await fetch(`${API_SERVER}/api/new`, {
      method: "POST",
    })
    return res.json()
  } catch (error) {
    console.error(error)
  }
}

export const fetchThread = async (threadId) => {
  try {
    const res = await fetch(`${API_SERVER}/api/threads/${threadId}`)
    return res.json()
  } catch (error) {
    console.error(error)
  }
}

export const fetchRun = async (threadId, runId) => {
  try {
    const res = await fetch(`${API_SERVER}/api/threads/${threadId}/runs/${runId}`, {
      method: "GET",
    })
    return res.json()
  } catch (error) {
    console.error(error)
  }
}

export const postMessage = async (threadId, message) => {
  try {
    const res = await fetch(`${API_SERVER}/api/threads/${threadId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: message }),
    })
    return res.json()
  } catch (error) {
    console.error(error)
  }
}