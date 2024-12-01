import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
  Loader,
} from "./components";
import Chatbot from "./chatbot/Chatbot";
import Meeting from "./meeting/Meeting";
import Widget from "./components/Widget";
import "animate.css";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [fadeClass, setFadeClass] = useState(
    "animate__animated animate__fadeIn"
  );
  useEffect(() => {
    if (isLoading) {
      const toRef = setTimeout(() => {
        setFadeClass("animate__animated animate__fadeOut");
        setTimeout(() => {
          setLoading(false);
          setFadeClass("animate__animated animate__fadeIn");
        }, 650);
      }, 2000);
      return () => {
        clearTimeout(toRef);
      };
    }
  }, [isLoading]);

  return (
    <BrowserRouter>
      <div className="min-h-[100vh] relative z-0 bg-primary">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                  <Navbar />
                  {isLoading ? (
                    <div className={fadeClass}>
                      <Loader />
                    </div>
                  ) : (
                    <div className={fadeClass}>
                      <Hero />
                    </div>
                  )}
                </div>

                <About />
                <Experience />
                <Works />

                <div className="relative z-0">
                  <Contact />
                  <StarsCanvas />
                </div>
              </>
            }
          />

          <Route path="/ai" element={<Chatbot />} />
          <Route path="/meeting" element={<Meeting />} />
        </Routes>
        <Widget />
      </div>
    </BrowserRouter>
  );
}

export default App;
