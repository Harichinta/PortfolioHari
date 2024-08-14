import React from 'react'
import './Hero.css'
import profile from '../../assets/Hari-Venkatesh.png'

function Hero() {

    return (
        <div className='maincnt'>
            <div className='Herocontainer'>
                <div className='row' style={{ height: "100%" }}>
                    <div className="col-md-7 col-sm-12 mainhead">
                        <div>
                            <h1 style={{color:"rgba(0, 255, 255, 1)"}}>Full Stack Web Developer</h1>
                            <h4 className="mt-2" >Experienced and Expertise in Creating Responsive</h4>
                            <h5 className="mt-2" > Web and Mobile applications.</h5>
                        </div>
                    </div>
                    <div className="col-md d-md-block d-none">
                        <div className='profile'><img src={profile} width="100%" alt="" /></div>
                    </div>
                </div>
            </div>
            <div className='subherocontainer'>
                <div className='row' style={{ height: "100%" }}>
                    <div className="col-md-7 col-sm-10 contactcnt">
                        <div className='descpara'>
                            <p style={{fontSize: "14px", color: "black" }}>I am a Full Stack Web Developer with a passion for creating dynamic and responsive web applications. With a strong background in both front-end and back-end development, I strive to deliver seamless user experiences and robust functionality.
                            </p>
                            <div className='mt-3'> <a href='#Contact' className='contactbtn'>Hire me</a></div>
                        </div>
                    </div>
                    <div className="col-md col-sm">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero