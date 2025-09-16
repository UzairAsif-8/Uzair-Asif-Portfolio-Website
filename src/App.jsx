import "./App.css";
import React from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Carousel3D from "./Components/Skills";
import Projects from "./Components/Projects";
import Testimonials from "./Components/Testimonials";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <About />
      <Carousel3D />
      <Projects />
      <Education />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
