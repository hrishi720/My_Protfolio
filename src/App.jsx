import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-[#07111f] transition duration-300">

        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />

      </div>
    </div>
  );
}

export default App;