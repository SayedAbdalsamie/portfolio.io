import { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="relative min-h-screen overflow-x-hidden transition-colors duration-300">
      <div
        className={`pointer-events-none fixed inset-0 z-0 ${darkMode ? "cosmic-bg" : "light-bg"}`}
        aria-hidden
      />
      <div className="relative z-10">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="pt-16">
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </main>
        <footer className="glass-panel border-t border-secondary/20 py-10 text-center">
          <p className="text-sm text-gray-600 dark:text-textSecondary">
            © {new Date().getFullYear()} Sayed Mohammed. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App; 