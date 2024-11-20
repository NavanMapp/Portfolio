

export default function Navigation() {

    return (
        <div className='navbar'>
            <ul>
                Contact
                <li>
                    <img src='' alt='Email' className='emailIcon' />
                    navanmapp@gmail.com
                </li>
                <li>
                    <img src='' alt='Location' className='locationIcon' />
                    Johannesburg, South Africa
                </li>
            </ul>
            <div className='navElements'>
                <ul>
                    <a>
                        <img src='' alt='Projects' className='projectsIcon' />
                        Projects
                    </a>
                    <a>
                        <img src='' alt='Experience' className='experienceIcon' />
                        Work Experience
                    </a>
                    <a>
                        <img src='' alt='Education' className='educationIcon' />
                        Education
                    </a>
                    <a>
                        <img src='' alt='About' className='aboutIcon' />
                        About
                    </a>
                </ul>
            </div>
        </div>
    )
}