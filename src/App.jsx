import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Loader } from "./components";
import 'animate.css';
import Chatbot from "./chatbot/Chatbot";

function App() {  
  const [isLoading, setLoading] = useState(true);
  const [fadeClass, setFadeClass] = useState('animate__animated animate__fadeIn');

  useEffect(() => {
    if (isLoading) {
      const toRef = setTimeout(() => {
        setFadeClass('animate__animated animate__fadeOut');
        setTimeout(() => {
          setLoading(false);
          setFadeClass('animate__animated animate__fadeIn');
        }, 650);
      }, 2000);
      return () => clearTimeout(toRef);
    }
  }, [isLoading]);

  return (
    <BrowserRouter>
      <div className="min-h-[100vh] relative z-0 bg-primary">
        <Routes>
          <Route path="/" element={
            <>
            (        
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                {isLoading ? <div className={fadeClass}><Loader /></div> : <div className={fadeClass}><Hero /></div>}
              </div>

              <About />
              <Experience />
              <Works />
              <Tech />

              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>
            )
            </>
          } />

          <Route path="/ai" element={<Chatbot />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
