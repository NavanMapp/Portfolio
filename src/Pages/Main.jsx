import React, { useEffect, useRef } from "react";
import Bio from "../components/Bio";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import About from "../components/About";

function Main() {

  const bioRef = useRef(null)
  const experienceRef = useRef(null)
  const projectRef = useRef(null)
  const educationRef = useRef(null)
  const aboutRef = useRef(null)

  // useEffect(() => {
  //     setScrollToSection((section) => {
  //     if (section === "project" && projectRef.current) {
  //       document.getElementsBy
  //       projectRef.scrollIntoView({ behavior: "smooth" })
  //     } else if (section === "experience" && experienceRef.current) {
  //       experienceRef.current.scrollIntoView({ behavior : "smooth"})
  //     } else if (section === "education" && educationRef.current){ 
  //       educationRef.current.scrollIntoView({ behavior: "smooth"})
  //     } else if (section === "about" && aboutRef.current){
  //       aboutRef.current.scrollIntoView({behavior: "smooth"})
  //     }
  //   })
  // }, [setScrollToSection])

  return <div className="right-content">
    <Bio />
    <Projects />
    <Experience />
    <About  />
  </div>;
}

export default Main;
