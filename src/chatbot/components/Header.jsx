import { useNavigate } from "react-router-dom";

export default function Header({ onNewChat }) {
  const navigate = useNavigate();
  const buttonStyle = "hover:scale-105 duration-300 max-w-[200px] sm:min-w-[150px] text-[14px] md:text-[16px] w-[120px] hover:bg-button border border-tertiary bg-tertiary py-2 px-4 font-bold shadow-lg shadow-primary rounded-xl text-white"
  return (
    <div className="p-2 flex flex-row m-2 text-slate-50 gap-3">
      <button
        className={buttonStyle}
        onClick={() => navigate("/")}
      >
        &larr; Go back
        </button>
      <div className="w-full bg-tertiary text-center py-2 px-4 flex justify-center items-center rounded-lg outlined-none border-none shadow-lg shadow-primary">
          <h1 className={`md:font-extrabold font-bold md:text-[30px] xs:text-[25px] text-[20px] text-slate-50`}>Bilal AI</h1>
      </div>
      <button
        className={buttonStyle}
        onClick={onNewChat}
      >
        New chat
        </button>
    </div>
  )
}