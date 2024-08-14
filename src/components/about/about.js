import React from 'react'
import './about.css'

function About() {
    return (
        <div className='aboutcontainer'>

            <div className='row' id='aboutheader'>
                {/* <div className="col-md-6 shap" style={{backgroundColor:"#ffffff", borderRadius: "0 0 5px 0"}}></div> */}
                <div className="col-md text-center Abouttile" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>About me</div>
            </div>
            <div className='row mb-4' style={{ color: "black" }}>
                <div className="col-md-12">
                    <div className='row reverserow' style={{ padding: "20px", textAlign: "center" }}>

                        <div className="col-md-8" >
                            <div className="container cardcontain row mx-auto">
                                <div className="card col-md-12" >
                                    <div className='cardhead'><h3>Experience</h3></div>
                                    <div className="details">
                                    <p className="mb-2"><strong>Years of Experience:</strong> 2 Years</p>
                                    <p className="mb-2"><strong>Designation:</strong> Software Engineer</p>
                                    <p className="mb-2"><strong>Company:</strong> Dataevolve solutions PVT LTD</p>
                                    <p className="mb-2"><strong>Address:</strong> Madhapur, Hyderabad</p>
                                    </div>
                                </div>
                                <div className="card col-md">
                                    <div className='cardhead'><h4>Persional</h4></div>
                                    <div className="details">
                                    <p className="mb-2"><strong>Name:</strong> Hari Venkatesh Chintha</p>
                                    <p className="mb-2"><strong>Location:</strong> Hyderabad, Telangana</p>
                                    <p className="mb-2"><strong>Collage:</strong> Adhikavi Nannaya University</p>
                                    <p className="mb-2"><strong>Course:</strong> Bachelor's in Computer Science</p>
                                    <p className="mb-2"><strong>Age:</strong> 25</p>
                                    </div>

                                </div>
                                <div className="card col-md">
                                    <div className='cardhead'><h4>Address</h4></div>
                                    <div className="details">
                                    <p className="mb-2"><strong>Current Location:</strong>Mahdapur, Hyderabad, Telangana</p>
                                    <p className="mb-2"><strong>Perminent:</strong> Antervedi, Konaseema Dist, Andhra pradesh, India</p>
                                    <p className="mb-2"><strong>Phone:</strong>9100251660</p>
                                    </div>

                                </div>

                            </div>
                            <button className='mt-3 mx-auto morebtn d-md-none d-block'>Know More About Me</button>

                        </div>

                        <div className="col-md" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div style={{ color: "#ffffff" }} className='mb-3'>
                                <h2 className="mb-2 deshead">
                                    I Am Full Stack Web Developer
                                </h2>
                                <p className="mb-2">
                                    Hello! I'm a dedicated web developer with a passion for creating dynamic and responsive web applications. With over two years of experience in JavaScript and extensive expertise in Angular, React, and Node.js, I thrive on turning complex problems into simple, beautiful, and intuitive designs. My strong background in front-end development, coupled with my skills in back-end technologies, allows me to build seamless and efficient web solutions from the ground up.
                                </p>
                                <button className='mt-3 mx-auto mb-3 morebtn d-md-block d-none'>Know More About Me</button>
                            </div>
                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}

export default About