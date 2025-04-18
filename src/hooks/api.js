export const runStates = ["requires_action", "cancelled", "failed", "completed", "expired"]

const API_SERVER = import.meta.env.VITE_LOCAL_SERVER || "https://3v5weqzd57.execute-api.ca-central-1.amazonaws.com/prod";
const API_KEY = import.meta.env.VITE_API_KEY;
export const createNewThread = async () => {
  try {
    const res = await fetch(`${API_SERVER}/api/threads`, {
      method: "POST",
      headers: {
        "x-api-key": API_KEY,
      }
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
    const res = await fetch(`${API_SERVER}/api/threads/${threadId}`, {
      method: "GET",
      headers: {
        "x-api-key": API_KEY,
      }
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export const postMessage = async (threadId, message) => {
  if (!threadId || !message) {
    throw new Error("threadId and message are required")
  }
  try {
    const res = await fetch(`${API_SERVER}/api/threads/${threadId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
      },
      body: JSON.stringify({ content: message }),
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error)
  }
}