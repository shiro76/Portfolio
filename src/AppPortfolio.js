import React from "react";
// import Header from "./Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";


export default function AppPortfolio() {
  return (
    <div className="font-sans">
      {/* <Header /> */}
      <Hero />
      <About/>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
