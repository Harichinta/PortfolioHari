import React from 'react'
import './Navstyle.css'

function navbar() {
  return (
    <div className='navbarmain' style={{display:"flex",justifyContent:"center",alignItems:"center",height:"60px"}}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand"   href="#Hero" style={{marginLeft:"2.5rem", fontWeight:"700",color:"#ffffff" ,backgroundColor:"#26282a",borderRadius:"50%", padding:"8px 10px"}}>HC</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#Hero">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Expertise</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='#Contact'>Contact</a>
            </li>
            <li className="nav-item" style={{fontSize:"20px"}}>
              <soan className="nav-link" style={{color:"black"}} >Hello</soan>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default navbar