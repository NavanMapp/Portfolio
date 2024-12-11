import logo from './logo.svg'
import './App.css'
import Navigation from './components/Navigation'
import Experience from './components/Experience'
import Bio from './components/Bio'
import Projects from './components/Projects'
import { useState } from 'react'
import About from './components/About'

function App () {
  
  const [isSidebarOpen, setSidebarOpen] = useState(true)
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className='App'>
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Navigation isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Bio />
        <Projects />
        <Experience />
        <About />
      </div>
    </div>
  )
}

export default App
