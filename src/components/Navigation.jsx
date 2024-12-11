import { useRef } from "react"
import Experience from "./Experience"
import ExperienceCard from "./ExperienceCard"


export default function Navigation() {

    const scrollToSection = () => {
        // e.preventDefault()
        const experienceSection = document.querySelector(".experience-section")
        const aboutSection = document.querySelector(".about-section")
        const bioSection = document.querySelector(".bio-section")
        const projectSection = document.querySelector(".project-section")

        if (experienceSection) {
            experienceSection.scrollIntoView({ behavior: "smooth" })
        } else if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" })
        } else if (bioSection) {
            bioSection.scrollIntoView({ behavior: "smooth" })
        } else if (projectSection) {
            projectSection.scrollIntoView({ behavior: "smooth" })
        }
    }
    return (
        <div className="left-nav">
            <nav>
                <ul className="contact-info">
                    <h1 className="contact">Contact</h1>
                    <li>
                        <img src="" alt="" className="icon email-icon" />
                        <span>📧</span> navanmapp@gmail.com
                    </li>
                    <li>
                        <img src="" alt="" className="icon location-icon" />
                        <span>📍</span> Johannesburg, South Africa
                    </li>
                </ul>
                <div className="navigation-links">
                    <ul>
                        <li>
                            <a href="#projects" onClick={scrollToSection} >
                                <img src="" alt="Projects Icon" className="icon projects-icon" />
                                <span>Projects</span>
                            </a>
                        </li>
                        <li>
                            <a href="#experience" onClick={scrollToSection} >
                                <img src="" alt="Experience Icon" className="icon experience-icon" />
                                <span>Work Experience</span>
                            </a>
                        </li>
                        <li>
                            <a href="#education" onClick={scrollToSection} >
                                <img src="" alt="Education Icon" className="icon education-icon" />
                                <span>Education</span>
                            </a>
                        </li>
                        <li>
                            <a href="#about" onClick={scrollToSection} >
                                <img src="" alt="About Icon" className="icon about-icon" />
                                <span>About</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}