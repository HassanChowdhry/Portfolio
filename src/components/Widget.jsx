import { useNavigate, useMatch } from "react-router-dom"
import { AiFillOpenAI } from "react-icons/ai";
import { useState } from "react";

const Widget = () => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false)
  const path = useMatch("/ai");
  if (path) return <div />;
  return (
    <section 
      className="fixed z-50 bottom-0 left-0 md:ml-[27.5px] md:mb-[27.5px] ml-[10px] mb-[10px]">
      <div className="item-hints">
        <div className="hint " data-position="4">
          <span className="hint-radius"></span>
          
          <span 
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => navigate("/ai")}
            className="hint-dot bg-card">
            <AiFillOpenAI
              className={`${!hover ? "animate-bounce" : "animate-spin"} `}
              size={30} />
          </span>

          <div className="hint-content do--split-children">
            <p>Talk to Bilal AI</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Widget