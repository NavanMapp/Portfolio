

export default function Navigation() {

    return (
        <div className="left-nav"> 
            <nav>
                <ul className="contact-info">
                <h1 className="contact">Contact</h1>
                    <li>
                        <img src="" alt="Email Icon" className="icon email-icon" />
                        <span>navanmapp@gmail.com</span>
                    </li>
                    <li>
                        <img src="" alt="Location Icon" className="icon location-icon" />
                        <span>Johannesburg, South Africa</span>
                    </li>
                </ul>
                <div className="navigation-links">
                    <ul>
                        <li>
                            <a href="#projects">
                                <img src="" alt="Projects Icon" className="icon projects-icon" />
                                <span>Projects</span>
                            </a>
                        </li>
                        <li>
                            <a href="#experience">
                                <img src="" alt="Experience Icon" className="icon experience-icon" />
                                <span>Work Experience</span>
                            </a>
                        </li>
                        <li>
                            <a href="#education">
                                <img src="" alt="Education Icon" className="icon education-icon" />
                                <span>Education</span>
                            </a>
                        </li>
                        <li>
                            <a href="#about">
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