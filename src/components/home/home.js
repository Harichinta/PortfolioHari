import React from 'react'
import './home.css'
import Hero from '../Herosection/Hero'
import Contact from '../contact/contact'
import About from '../about/about'
import Skills from '../Experience/Skills'
import Projects from '../Projects/Projects'

function home() {
  return (
    <div className='maincontainer'>
      <div id='Hero'>
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </div>
  )
}

export default home