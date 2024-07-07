import { useState } from "react";
import Header from "./components/Header.jsx";
import ChatStatus from "./components/ChatStatus.jsx";
import ChatInput from "./components/ChatInput.jsx";
import ChatMessage from "./components/ChatMessage.jsx";
import useThread from "../hooks/useThread.jsx";
import useRunPolling from "../hooks/useRunPolling.jsx";
import useRunStatus from "../hooks/useRunStatus.jsx";
import { postMessage } from "../hooks/api.js";

const Chatbot = () => {
  const [run, setRun] = useState(undefined)
  const { threadId, messages, clearThread } = useThread(run, setRun);
  useRunPolling(threadId, run, setRun);
  const { status, processing } = useRunStatus(run);
  const messageList = messages
    .toReversed()
    .filter((message) => message.hidden !== true)
    .map((message) => <ChatMessage key={message.id} message={message.content} role={message.role} />)
  return (
    <div className="bg-primary">
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
                  postMessage(threadId, message).then(setRun);
              }}
              disabled={processing}
          />
      </div>
      </div>
    </div>
  )
}

export default Chatbot