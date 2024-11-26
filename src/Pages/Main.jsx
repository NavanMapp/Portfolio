import React from "react";
import Bio from "../components/Bio";
import Projects from "../components/Projects";
import Experience from "../components/Experience";

function Main() {
  return <div className="right-content">
    <Bio />
    <Projects />
    <Experience />
  </div>;
}

export default Main;
