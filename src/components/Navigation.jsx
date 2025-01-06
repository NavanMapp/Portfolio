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


export default function Navigation({isOpen, toggleSidebar }) {

    const scrollToSection = () => {
        // e.preventDefault()
        const experienceSection = document.querySelector(".experience-section")
        const aboutSection = document.querySelector(".about-section")
        const bioSection = document.querySelector(".bio-section")
        const projectSection = document.querySelector(".project-section")

        if (projectSection) {
            experienceSection.scrollIntoView({ behavior: "smooth" })
        } else if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" })
        } else if (bioSection) {
            bioSection.scrollIntoView({ behavior: "smooth" })
        } else if (experienceSection ) {
            projectSection.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <div className={`sidebar ${isOpen ? "open" : "closed"}`} >
            <nav>
                <a className="toggle-button" onClick={toggleSidebar} >
                    {isOpen ? <img src={leftImg} className="icon" /> : <img src={rightImg} className="icon" /> }
                </a>
                <ul className="contact-info">
                    <h1 className="contact">Contact</h1>
                    <li>
                        <img src={emailImg} alt="" className="icon email-icon" />
                        <span className="label">navanmapp@gmail.com</span> 
                    </li>
                    <li>
                        <img src={locationImg} alt="" className="icon location-icon" />
                        <span className="label">Gauteng, South Africa</span> 
                    </li>
                </ul>
                <div className="navigation-links">
                    <ul>
                        <li>
                            <a href="#projects" onClick={scrollToSection} >
                                <img src={projectImg} alt="Projects Icon" className="icon projects-icon" />
                                <span className="label">Projects</span>
                            </a>
                        </li>
                        <li>
                            <a href="#experience" onClick={scrollToSection} >
                                <img src={experienceImg} alt="Experience Icon" className="icon experience-icon" />
                                <span className="label">Work Experience</span>
                            </a>
                        </li>
                        <li>
                            <a href="#education" onClick={scrollToSection} >
                                <img src={educationImg} alt="Education Icon" className="icon education-icon" />
                                <span className="label">Education</span>
                            </a>
                        </li>
                        <li>
                            <a href="#about" onClick={scrollToSection} >
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