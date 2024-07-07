import { useNavigate } from "react-router-dom";

export default function Header({ onNewChat }) {
  const navigate = useNavigate();
  return (
    <div className="p-2 flex flex-row m-2 text-slate-50 gap-3">
      <button
        className="hover:scale-105 duration-300 max-w-[200px] min-w-[150px] hover:shadow-secondary hover:border-secondary border border-tertiary bg-tertiary py-3 px-5 font-bold shadow-lg shadow-primary rounded-xl text-white "
        onClick={() => navigate("/")}
      >
        &larr; Go back
        </button>
      <div className="w-full bg-tertiary text-center h-16 py-4 px-6  rounded-lg outlined-none border-none">
          <h1 className="text-3xl text-slate-200 font-semibold grow">Hassan AI</h1>
      </div>
      <button
        className="hover:scale-105 duration-300 max-w-[200px] min-w-[150px] hover:shadow-secondary hover:border-secondary border border-tertiary bg-tertiary py-3 px-5 font-bold shadow-lg shadow-primary rounded-xl text-white "
        onClick={onNewChat}
      >
        New chat
        </button>
    </div>
  )
}