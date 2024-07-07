import Markdown from 'react-markdown'
// import { SiOpenai } from "react-icons/si";
import { FaRegUser } from "react-icons/fa6";
import remarkGfm from "remark-gfm";
import "./ChatMessage.css";

export default function ChatMessage({ message, role }) {
  const isUser = role === "user";
  const icon = isUser
  ? <div className="rounded-full h-8 w-8 bg-slate-600 flex items-center justify-center font-semibold text-white shrink-0"><FaRegUser /></div>
  : <div className="rounded-full h-8 w-8 bg-tertiary flex items-center justify-center font-semibold text-slate-50 shrink-0">
      <img src="/logo.svg" alt="" />
    </div>

  const name = isUser
    ? ("You")
    : ("Hassan AI")

    return (
      <div className='flex-col mx-2 my-4 p-2'>
          <section className='flex gap-2'>
            {icon}
            <p className="font-bold my-auto text-[18px] text-secondary">{name}</p>
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