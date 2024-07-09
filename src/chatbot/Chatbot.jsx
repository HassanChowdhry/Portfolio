import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import ChatStatus from "./components/ChatStatus.jsx";
import ChatInput from "./components/ChatInput.jsx";
import ChatMessage from "./components/ChatMessage.jsx";
import useThread from "../hooks/useThread.jsx";
import { postMessage } from "../hooks/api.js";

const Chatbot = () => {
  const [run, setRun] = useState(null)
  const [status, setStatus] = useState("Processing...")
  const [processing, setProcessing] = useState(true)
  const { threadId, messages, clearThread } = useThread(run, setRun, setProcessing, setStatus);
  console.log(import.meta.env.VITE_TEST)
  useEffect(() => {
    if (threadId) {
      setStatus(null);
      setProcessing(false);
      return;
    }
  }, [threadId, setStatus])
  const messageList = messages
    .toReversed()
    .filter((message) => message.hidden !== true)
    .map((message) => <ChatMessage key={message.id} message={message.content} role={message.role} />)
  return (
    <div className={`bg-hero-pattern animate__animated animate__fadeIn`}>
      <div className="max-w-[850px] md:mx-auto h-screen flex flex-col">
        <Header
            onNewChat={clearThread}
        />
      <div className="flex flex-col-reverse grow overflow-scroll">
          {status && (
              <ChatStatus
                  status={status}
              />
          )}
            {messageList}
      </div>
      <div className="my-4">
          <ChatInput
              onSend={(message) => {
                  setStatus("Processing...");
                  setProcessing(true);
                  postMessage(threadId, message).then((run) => {
                      setRun(run);
                      setStatus(null);
                      setProcessing(false);
                  });
              }}
              disabled={processing}
          />
      </div>
      </div>
    </div>
  )
}

export default Chatbot