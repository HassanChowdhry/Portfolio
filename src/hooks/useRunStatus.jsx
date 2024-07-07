import { useState, useEffect } from "react";
import { runStates } from "./api";

export default function useRunStatus(run) {
  const [status, setStatus] = useState(undefined)
  const [processing, setProcessing] = useState(false)

  useEffect(() => {
    if (run?.status === "in_progress") {
      setStatus("Processing...")
    } else if (run?.status === "queued") {
      setStatus("Queued...")
    } else {
      setStatus(undefined)
    }
  }, [run])

  useEffect(() => {
    setProcessing(!runStates.includes(run?.status ?? "completed"))
  }, [run])

  return { status, processing }
}