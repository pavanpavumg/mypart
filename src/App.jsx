import { useState, useEffect } from "react";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import ResumeDownload from "./components/ResumeDownload";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("role")) {
      setShowResume(true);
    }
  }, []);

  return (
    <>
      <ScrollProgress />
      <Navbar setShowResume={setShowResume} />
      <Hero setShowResume={setShowResume} />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <Achievements />
      <ResumeDownload isOpen={showResume} onClose={() => setShowResume(false)} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
