import { useNavigate } from "react-router-dom";
import { styles } from '../../style';

export default function Header({ onNewChat }) {
  const navigate = useNavigate();
  const buttonStyle = "hover:scale-105 duration-300 max-w-[200px] min-w-[150px] hover:bg-button border border-tertiary bg-tertiary py-2 px-4 font-bold shadow-lg shadow-primary rounded-xl text-white"
  return (
    <div className="p-2 flex flex-row m-2 text-slate-50 gap-3">
      <button
        className={buttonStyle}
        onClick={() => navigate("/")}
      >
        &larr; Go back
        </button>
      <div className="w-full bg-tertiary text-center py-2 px-4 rounded-lg outlined-none border-none shadow-lg shadow-primary">
          <h1 className={`${styles.heroSubText} text-slate-200 font-bold`}>Hassan AI</h1>
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