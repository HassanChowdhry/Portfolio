import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas} from "./components";

function App() {
  // TODO: socials linked, leet, gh, upwork
  
  // TODO: Pacman loader
  // TODO: Remove comp for animated letters
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Works />
        <Tech />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
