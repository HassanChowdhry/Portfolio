import { IoIosSend } from "react-icons/io";
import { useState } from "react"

const ChatInput = ({ disabled, onSend }) => {
  const [message, setMessage] = useState("")
  return (
    <form
      className="p-2 flex flex-row m-2 text-slate-50 gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        onSend(message);
        setMessage("");
      }}
      autoComplete="off"
    >
    <input 
      type="text"
      name="message" 
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder="What do you want to know about Bilal?"
      className="w-full bg-tertiary h-16 py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium placeholder:text-[12px] sm:placeholder:text-[16px] "
      required
    />
    <button
      disabled={disabled}
      className="hover:scale-105 duration-300 hover:bg-button border border-tertiary bg-tertiary py-3 px-5 sm:px-8 w-fit font-bold shadow-lg shadow-primary rounded-xl text-white "
      >
      <IoIosSend size={25} />
    </button>
  </form> 
  )
}

export default ChatInput