import { useRef, useEffect, useCallback } from "react";
import { fetchRun, runStates } from "./api";

export default function useRunPolling(threadId, run, setRun) {
  const polling = useRef(null)

  const startPolling = useCallback(async () => {
    const runData = await fetchRun(threadId, run.run_id);
    if (runData.run_id !== run.run_id || runData.status !== run.status) {
      setRun(runData)
    }
    polling.current = setTimeout(startPolling, 1000)
  }, [run?.run_id, run?.status, setRun, threadId]);

  const stopPolling = () => {
    clearInterval(polling.current)
  }

  useEffect(() => {
    const needsToPoll = run && !runStates.includes(run.status)

    if (needsToPoll) {
      startPolling()
    } else {
      stopPolling()
    }

    return stopPolling;
  }, [run, threadId, setRun, startPolling])
}