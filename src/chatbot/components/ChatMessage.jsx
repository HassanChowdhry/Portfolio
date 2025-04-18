import Markdown from 'react-markdown'
import { FaRegUser } from "react-icons/fa6";
import remarkGfm from "remark-gfm";
import "./ChatMessage.css";

export default function ChatMessage({ message, role }) {
  const isUser = role === "user";
    return (
      <div className='flex-col mx-2 my-4 p-2 animate__bounceIn'>
          <section className='flex gap-2'>
          <div className="rounded-full h-8 w-8 bg-slate-600 flex items-center justify-center font-semibold shrink-0">
            {isUser ? (<FaRegUser />) : (<img src="/logo.svg" alt="" />)}
          </div>
            <p className="font-bold my-auto text-[20px] text-secondary">
              {isUser ? ("You") : ("Bilal AI")}
            </p>
          </section>
          <div className="ml-8 flex-col bg-card rounded-3xl py-3 px-5">
              <Markdown
                  className="text-white-100 markdown"
                  remarkPlugins={[remarkGfm]}
              >
                  {message}
              </Markdown>
          </div>
      </div>
    )
}