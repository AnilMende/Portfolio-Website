import React from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FeaturedProject from "./components/projects/FeaturedProject";
import ProjectsSection from "./components/projects/ProjectsSection";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return(
    <div>
      <Navbar/>
      <Home/>
      <FeaturedProject/>
      <ProjectsSection/>
      <Skills/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}
export default App
