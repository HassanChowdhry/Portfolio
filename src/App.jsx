import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas} from "./components";

function App() {
// TODO: projects into new buttons like seb

// TODO: Pacman loader
// TODO: downloadable resume
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
