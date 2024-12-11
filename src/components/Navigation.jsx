import { useRef } from "react"
import Experience from "./Experience"
import ExperienceCard from "./ExperienceCard"
import projectImg from "../Images/projects.png"
import educationImg from "../Images/education.png"
import experienceImg from "../Images/experience.png"
import aboutImg from "../Images/about.png"
import emailImg from "../Images/gmail.png"
import locationImg from "../Images/location.png"


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
                <button className="toggle-button" onClick={toggleSidebar} >
                    {isOpen ? "<<<" : ">>>" }
                </button>
                <ul className="contact-info">
                    <h1 className="contact">Contact</h1>
                    <li>
                        <img src={emailImg} alt="" className="icon email-icon" />
                        <span></span> navanmapp@gmail.com
                    </li>
                    <li>
                        <img src={locationImg} alt="" className="icon location-icon" />
                        <span></span> Gauteng, South Africa
                    </li>
                </ul>
                <div className="navigation-links">
                    <ul>
                        <li>
                            <a href="#projects" onClick={scrollToSection} >
                                <img src={projectImg} alt="Projects Icon" className="icon projects-icon" />
                                <span>Projects</span>
                            </a>
                        </li>
                        <li>
                            <a href="#experience" onClick={scrollToSection} >
                                <img src={experienceImg} alt="Experience Icon" className="icon experience-icon" />
                                <span>Work Experience</span>
                            </a>
                        </li>
                        <li>
                            <a href="#education" onClick={scrollToSection} >
                                <img src={educationImg} alt="Education Icon" className="icon education-icon" />
                                <span>Education</span>
                            </a>
                        </li>
                        <li>
                            <a href="#about" onClick={scrollToSection} >
                                <img src={aboutImg} alt="About Icon" className="icon about-icon" />
                                <span>About</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}