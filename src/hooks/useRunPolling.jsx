import { useRef, useEffect } from "react";
import { fetchRun, runStates } from "./api";

export default function useRunPolling(threadId, run, setRun) {
  const polling = useRef(null)

  const startPolling = async () => {
    console.log(`Polling thread ${threadId} run ${run.run_id}`);
    if (run.run_id === null || run.status === null) {
      stopPolling();
      return;
    }
    const runData = await fetchRun(threadId, run.run_id);
    if (runData.run_id !== run.run_id || runData.status !== run.status) {
      setRun(runData)
    }
    polling.current = setTimeout(startPolling, 1000)
  };

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

    return stopPolling
  }, [run, threadId, setRun])
}