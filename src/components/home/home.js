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
      <Hero />
      <About />
      <Skills/>
      <Projects/>
      <div id="Contact">
        <Contact/>
      </div>
    </div>
  )
}

export default home