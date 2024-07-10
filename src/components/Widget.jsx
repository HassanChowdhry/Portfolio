import { useNavigate } from "react-router-dom"
import { AiFillOpenAI } from "react-icons/ai";
import { useState } from "react";

const Widget = () => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false)

  return (
    <section 
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => navigate("/ai")}
      className="fixed z-50 bottom-0 left-0 hover">
      <div className="item-hints">
        <div className="hint" data-position="4">
          <span className="hint-radius"></span>
          
          <span className="hint-dot">
            <AiFillOpenAI
              className={!hover ? "animate-bounce" : "animate-spin"}
              size={30} />
          </span>

          <div className="hint-content do--split-children">
            <p>Talk to Hassan AI</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Widget