import React, { useEffect, useState } from "react";
import { useScroll, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Classes from "./components/Classes";
import WhyChooseMe from "./components/WhyChooseMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div 
        id="custom-cursor" 
        className="custom-cursor hidden md-block" 
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      >
      </div>

      <style>{`
        @media (max-width: 768px) {
          .md-block { display: none !important; }
        }
      `}</style>
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="scroll-progress-bar" 
        style={{ scaleX: scrollYProgress }} 
      />
      
      <Navbar />
      <Hero />
      <About />
      <Classes />
      <WhyChooseMe />
      <Contact />
      <Footer />
    </>
  );
}

export default App;