import logo from './logo.svg'
import './App.css'
import Navigation from './components/Navigation'
import Experience from './components/Experience'
import Bio from './components/Bio'
import Projects from './components/Projects'
import { useRef, useState } from 'react'
import About from './components/About'
import Education from './components/Education'

function App() {

  const [isSidebarOpen, setSidebarOpen] = useState(true)
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen)
  }
  
  const bioRef = useRef(null)
  const projectsRef = useRef(null)
  const experienceRef = useRef(null)
  const aboutRef = useRef(null)
  const educationRef = useRef(null)

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className='App'>
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Navigation isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}
          scrollToSection={scrollToSection}
          sections={{
            Bio: bioRef,
            Projects: projectsRef,
            Experience: experienceRef,
            About: aboutRef,
            Education: educationRef
          }}
         />
        <div ref={bioRef}>
          <Bio />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={experienceRef}>
          <Experience />
        </div>
        <div ref={educationRef}>
          <Education />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
      </div>
    </div>
  )
}

export default App
