import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Background from "./components/background";
import Skills from "./components/skills";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen relative">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Projects />
      <Contact />
    </div>
  );
}
export default App;
