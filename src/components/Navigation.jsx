import { useRef } from "react"
import Experience from "./Experience"
import ExperienceCard from "./ExperienceCard"
import projectImg from "../Images/projects.png"
import educationImg from "../Images/education.png"
import experienceImg from "../Images/experience.png"
import aboutImg from "../Images/about.png"
import emailImg from "../Images/gmail.png"
import locationImg from "../Images/location.png"
import leftImg from "../Images/leftarrow.png"
import rightImg from "../Images/rightarrow.png"
import githubImg from "../Images/github.png"


export default function Navigation({ isOpen, toggleSidebar, scrollToSection, sections }) {

    return (
        <div className={`sidebar ${isOpen ? "open" : "closed"}`} >
            <nav>
                <a className="toggle-button" onClick={toggleSidebar} >
                    {isOpen ? <img src={leftImg} className="icon" /> : <img src={rightImg} className="icon" />}
                </a>
                <ul className="contact-info">
                    <h1 className="contact">Contact</h1>
                    <li>
                        <a href="mailto:navanmapp@gmail.com">
                            <img src={emailImg} alt="" className="icon email-icon" />
                            <span className="label">Email Me</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/NavanMapp?tab=repositories">
                            <img src={githubImg} className="icon github-icon" />
                            <span className="label">Github</span>
                        </a>
                    </li>
                    <li>
                        <img src={locationImg} alt="" className="icon location-icon" />
                        <span className="label">Gauteng, South Africa</span>
                    </li>
                </ul>
                <div className="navigation-links">
                    <ul>
                        <li>
                            <a href="#projects" onClick={() => scrollToSection(sections.Projects)} >
                                <img src={projectImg} alt="Projects Icon" className="icon projects-icon" />
                                <span className="label">Projects</span>
                            </a>
                        </li>
                        <li>
                            <a href="#experience" onClick={() => scrollToSection(sections.Experience)} >
                                <img src={experienceImg} alt="Experience Icon" className="icon experience-icon" />
                                <span className="label">Work Experience</span>
                            </a>
                        </li>
                        <li>
                            <a href="#education" onClick={() => scrollToSection(sections.Education)} >
                                <img src={educationImg} alt="Education Icon" className="icon education-icon" />
                                <span className="label">Education</span>
                            </a>
                        </li>
                        <li>
                            <a href="#about" onClick={() => scrollToSection(sections.About)} >
                                <img src={aboutImg} alt="About Icon" className="icon about-icon" />
                                <span className="label">About</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}