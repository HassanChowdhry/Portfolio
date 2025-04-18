import { useNavigate } from "react-router-dom";
import { styles } from '../style';
import { useEffect } from "react";

const Meeting = () => {
  const navigate = useNavigate();
  const buttonStyle = "hover:scale-105 duration-300 max-w-[200px] min-w-[150px] hover:bg-button border border-tertiary bg-tertiary py-2 px-4 font-bold shadow-lg shadow-primary rounded-xl text-white"
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src',  'https://static.zcal.co/embed/v1/embed.js');
    head.appendChild(script);
  }, [])
  return (
    <div className='bg-hero-pattern animate__animated animate__fadeIn min-h-screen'>
      <div className="p-2 flex flex-row m-2 text-slate-50 gap-3">
        <button
          className={buttonStyle}
          onClick={() => navigate("/")}
        >
          &larr; Go back
          </button>
        <div className="w-full bg-tertiary text-center py-2 px-4 rounded-lg outlined-none border-none shadow-lg shadow-primary">
            <h1 className={`${styles.heroSubText} text-slate-200 font-bold`}>Schedule a Meeting</h1>
        </div>
      </div>

      <div className="flex">

      <div className="zcal-inline-widget mx-auto w-[900px] bg-red">
        <a 
          href="https://zcal.co/i/1ZUZulLx">
            Meeting with Bilal - Schedule a meeting
        </a>
      </div>
      </div>
    </div>
  )
}

export default Meeting