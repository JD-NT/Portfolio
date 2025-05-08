import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import Skills from './Skills.jsx'
import About from './About.jsx'
import Intro from './Intro.jsx'
import Contact from './Contact.jsx'
import NavBar from './NavBar.jsx'
import './App.css'
import SkillLevel from './SkillLevel.jsx'
import Projects from './Projects.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Home />
    <Intro />
    <Skills />
    <SkillLevel />
    <Projects />
    <About />
    <Contact />
  </React.StrictMode>,
)
