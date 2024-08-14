import React, {useState } from 'react';
import './projects.css';

function Projects() {


  const Projectsdata = [
    {
      title: "Dataevolve Solutions Official Website",
      role: "Front End Developer",
      duration: "Sep 2022 to May 2023 (Full Time)",
      summary: "Spearheaded the end-to-end development of Dataevolve Solutions' official website, a 23-page platform showcasing the company's AWS services. The project focused on creating a fully responsive, high-performance, and secure website with engaging animations.",
      projectlink: "https://www.dataevolve.in",
      linkname: "Dataevolve Solutions Official Website",
      frontend: " Developed a fully responsive website, ensuring a seamless experience across all devices and screen sizes. Utilized the Lighthouse tool to optimize website performance, achieving exceptional scores for loading speed and user engagement. Implemented robust security headers and protocols, along with comprehensive SEO strategies to enhance website security and search engine visibility. Integrated email services for seamless user communication, improving customer interaction and support. Employed GSAP (GreenSock Animation Platform) to create stunning animations on scroll, enhancing user experience and engagement.",
      backend: null,
      pjLogo:require("../../assets/DElogo.jpeg"),
      security:"Implemented robust security measures including HTTPS for secure communication, Content Security Policy (CSP) to prevent cross-site scripting attacks, and authentication mechanisms to ensure secure access to the application.",
      // achivements:"Achieved high Lighthouse scores for loading speed and user engagement, ensuring a fast and responsive user experience. Successfully enhanced website security and SEO, resulting in improved search engine rankings and user trust. Received positive feedback from users for the website's responsiveness, performance, and engaging animations.",
      percentage: [
        {
          skill: "Angular",
          percentnum: 100,
          percenttext: "100%"
        }, {
          skill: "Typescript",
          percentnum: 100,
          percenttext: "100%"
        },{
          skill: "HTML5",
          percentnum: 100,
          percenttext: "80%"
        }, {
          skill: "Css3",
          percentnum: 100,
          percenttext: "80%"
        }, {
          skill: "Bootstrap 5",
          percentnum: 50,
          percenttext: "50%"
        }, {
          skill: "Material Ui",
          percentnum: 80,
          percenttext: "80%"
        },
      ]
    },
    {
      title: "GailGas Tenders",
      role: "Full stack Developer",
      duration: "Aug 2023 to Jul 2024 (Full Time)",
      summary: "Developed a comprehensive application for creating and displaying tenders, enhancing the transparency and accessibility of tender information for users. Integrated an admin portal to efficiently manage tenders, enabling administrators to create, update, and monitor tenders with ease",
      projectlink: "https://gailgastenders.gail.co.in/",
      linkname: "Gail Gas Tenders Site",
      frontend: "Utilized Angular and TypeScript to create dynamic and responsive user interfaces, providing a smooth and interactive user experience.Leveraged NGRX for effective state management and RXJS for reactive programming, ensuring optimal data handling and application performance. Integrated Reactive Forms for robust data validation and improved user interaction, enhancing the overall user experience.Crafted a modern, responsive design using HTML5, CSS3, Bootstrap, and Angular Material, ensuring a seamless user experience across devices.",
      backend: "Built a robust backend using Node.js with Express.js, ensuring a scalable and high-performance application. Developed RESTful APIs to facilitate seamless communication between the frontend and backend, enabling efficient data exchange. Employed MySQL for reliable data storage and retrieval, ensuring data integrity and consistency. Implemented JWT (JSON Web Token) for secure authentication and authorization, protecting sensitive tender information. Implemented ",
      // achivements:"Successfully delivered a scalable, secure, and user-centric tenders management system. Improved transparency and efficiency in tender creation and display processes. Implemented robust security practices, ensuring the protection of sensitive information and compliance with industry standards.",
      pjLogo:require("../../assets/gailgaslogo.jpeg"),
    
      percentage: [
        {
          skill: "Angular",
          percentnum: 100,
          percenttext: "100%"
        }, {
          skill: "Typescript",
          percentnum: 100,
          percenttext: "100%"
        }, {
          skill: "Node.js",
          percentnum: 60,
          percenttext: "60%"
        }, {
          skill: "My SQL",
          percentnum: 60,
          percenttext: "60%"
        }, {
          skill: "HTML5",
          percentnum: 100,
          percenttext: "80%"
        }, {
          skill: "Css3",
          percentnum: 100,
          percenttext: "80%"
        }, {
          skill: "Bootstrap 5",
          percentnum: 50,
          percenttext: "50%"
        }, {
          skill: "Material Ui",
          percentnum: 80,
          percenttext: "80%"
        },
      ]

    },
    
    {
      title: "GailGas Admin portal",
      role: "Full stack Developer",
      duration: "Jan 2023 to Jul 2024 (Full Time)",
      summary: "Gail gas company is specializing in Natural Gas retailing and distribution, with a strong focus on City Gas Distribution. The company is dedicated to exceptional customer care and value creation. Its operations extend to gas transmission, marketing, and intricate processing, including the fractionation of LPG, Propane, SBP Solvent.",
      projectlink: "https://gailgas.com/home",
      linkname: "Gail Gas Admin Site",
      frontend: "Developed dynamic and responsive user interfaces using Angular and TypeScript, enhancing application performance and maintainability. State Management: Employed NGRX for effective state management and RXJS for reactive programming, ensuring optimal data handling and user experience. Integrated Reactive Forms for robust data validation and improved user interaction. Crafted a modern, responsive design using HTML5, CSS3, Bootstrap, and Angular Material, ensuring a seamless user experience across devices.",
      backend: "Leveraged Node.js with Express.js to build a scalable and high-performance backend, facilitating smooth and reliable API interactions. Created and managed RESTful APIs to enable seamless data communication between frontend and backend services. Utilized MySQL for efficient data storage and retrieval, ensuring data integrity and scalability.Implemented JWT (JSON Web Token) for secure user authentication and authorization, safeguarding sensitive information.",
      // achivements:"Successfully developed and deployed a scalable and secure complaint management system. Enhanced user experience through responsive design and efficient data handling. Implemented robust security measures to protect sensitive data and ensure compliance with industry standards.",
      pjLogo:require("../../assets/gailgaslogo.jpeg"),
      percentage: [
        {
          skill: "Angular",
          percentnum: 100,
          percenttext: "100%"
        }, {
          skill: "Typescript",
          percentnum: 100,
          percenttext: "100%"
        }, {
          skill: "Node.js",
          percentnum: 60,
          percenttext: "60%"
        }, {
          skill: "My SQL",
          percentnum: 60,
          percenttext: "60%"
        }, {
          skill: "HTML5",
          percentnum: 100,
          percenttext: "80%"
        }, {
          skill: "Css3",
          percentnum: 100,
          percenttext: "80%"
        }, {
          skill: "Bootstrap 5",
          percentnum: 50,
          percenttext: "50%"
        }, {
          skill: "Material Ui",
          percentnum: 80,
          percenttext: "80%"
        },
      ],
      

    },
    {
      title: "Seed Fund Scheme",
      role: "Front End Developer",
      duration: "Dec 2022 to Jul 2024 (Full Time)",
      summary: "Startup India The Startup India Seed Fund Scheme (SISFS) aims to provide financial assistance to startups for proof of concept, prototype development, product trials, market entry, and commercialization. The goal is to help startups reach a stage where they can attract investments from angel investors, venture capitalists, or obtain loans from banks and financial institutions.",
      projectlink: "https://seedfund.startupindia.gov.in/",
      linkname: "Seed Fund India Site",
      frontend: "Utilized React.js to build dynamic and responsive user interfaces, enhancing the user experience with interactive components and a modern design. Implemented state management using Redux to efficiently handle complex state across the application, ensuring a smooth and consistent user experience. Connected the application to backend services and APIs using Axios, managing asynchronous data fetching and updates seamlessly. Applied performance optimization techniques such as code splitting, lazy loading, and memoization to enhance application efficiency and load times. Focused on creating a user-friendly interface that simplifies the process for startups to apply for financial assistance and track their application status.",
      backend: null,
      security:"Implemented robust security measures including HTTPS for secure communication, Content Security Policy (CSP) to prevent cross-site scripting attacks, and authentication mechanisms to ensure secure access to the application.",
      // achivements:"Streamlined the application process, enhancing user satisfaction with an intuitive interface and smooth performance. Developed a scalable and secure architecture, successfully protecting sensitive data and receiving positive feedback from startups and administrators.",
      pjLogo:require("../../assets/seedfundlogo.png"),
      percentage: [
        {
          skill: "React",
          percentnum: 100,
          percenttext: "100%"
        }, {
          skill: "Type Script",
          percentnum: 100,
          percenttext: "100%"
        },{
          skill: "Redux",
          percentnum: 80,
          percenttext: "80%"
        }, 
        {
          skill: "JSX",
          percentnum: 80,
          percenttext: "80%"
        },
        {
          skill: "CSS3",
          percentnum: 70,
          percenttext: "70%"
        }, {
          skill: "Bootstrap 5",
          percentnum: 60,
          percenttext: "60%"
        }
      ],

    },
    {
      title: "GailGas Public portal",
      role: "Front End Developer",
      duration: "Jan 2023 to Jul 2024 (Full Time)",
      summary: "Gail gas company is specializing in Natural Gas retailing and distribution, with a strong focus on City Gas Distribution. The company is dedicated to exceptional customer care and value creation. Its operations extend to gas transmission, marketing, and intricate processing, including the fractionation of LPG, Propane, SBP Solvent.",
      projectlink: "https://gailgas.com/home",
      linkname: "Gail Gas Admin Site",
      frontend: "Angular & TypeScript: Developed dynamic and responsive user interfaces using Angular and TypeScript, enhancing application performance and maintainability. State Management: Employed NGRX for effective state management and RXJS for reactive programming, ensuring optimal data handling and user experience. Reactive Forms: Integrated Reactive Forms for robust data validation and improved user interaction. UI/UX Design: Crafted a modern, responsive design using HTML5, CSS3, Bootstrap, and Angular Material, ensuring a seamless user experience across devices.",
      backend: null,
      security: "Implemented security measures such as HSTS (HTTP Strict Transport Security) and CSP (Content Security Policy) to mitigate web vulnerabilities and protect against potential threats. Configured interceptors for secure handling of HTTP/HTTPS requests, enhancing data protection during transmission. Optimized the application for search engines to enhance visibility and accessibility.",
      // achivements: "Successfully delivered a scalable, secure, and user-centric tenders management system. Improved transparency and efficiency in tender creation and display processes.Implemented robust security practices, ensuring the protection of sensitive information and compliance with industry standards.",
      pjLogo:require("../../assets/gailgaslogo.jpeg"),
      percentage: [
        {
          skill: "Angular",
          percentnum: 100,
          percenttext: "100%"
        }, {
          skill: "Typescript",
          percentnum: 100,
          percenttext: "100%"
        }, {
          skill: "HTML5",
          percentnum: 100,
          percenttext: "80%"
        }, {
          skill: "Css3",
          percentnum: 100,
          percenttext: "80%"
        }, {
          skill: "Bootstrap 4",
          percentnum: 70,
          percenttext: "70%"
        }, {
          skill: "Material Ui",
          percentnum: 40,
          percenttext: "40%"
        },
      ]
     },
    {
      title: "Gail Gas Wrok Permit",
      role: "Front End Developer",
      duration: "May 2023 to Jul 2024 (Full Time)",
      summary: "Developed a hybrid mobile application for requesting and issuing work permits at various GAIL Gas work sites. The application serves both GAIL Gas employees and third-party stakeholders, enhancing operational efficiency and compliance.",
      projectlink: null,
      linkname: "Seed Fund India Site",
      frontend: "Utilized React Native to build a cross-platform mobile application, demonstrating proficiency in JavaScript, JSX, and mobile development. Enabled seamless interaction between GAIL Gas employees and third-party stakeholders within the application using efficient state management with Redux and Context API. Implemented core features for work permit management, enhancing operational efficiency and compliance through robust RESTful APIs. Ensured a responsive and user-friendly interface for diverse user groups, leveraging React Native's UI capabilities and responsive design principles, along with CSS-in-JS libraries like Styled Components.",
      backend: null,
      security:"Integrated robust security measures including JWT for secure authentication, HTTPS for secure data transmission, and data encryption to protect sensitive information.",
      pjLogo:require("../../assets/gailgaslogo.jpeg"),

      // achivements:"Significantly improved the process of requesting and issuing work permits, enhancing operational efficiency at GAIL Gas work sites. Delivered a robust and efficient cross-platform mobile application, ensuring consistent performance on both Android and iOS devices. Successfully protected sensitive data and ensured secure communication through advanced security practices. Received positive feedback from users for the application's responsiveness and ease of use.",
      percentage: [
        {
          skill: "React Native",
          percentnum: 100,
          percenttext: "100%"
        }, {
          skill: "Java Script",
          percentnum: 100,
          percenttext: "100%"
        },{
          skill: "Redux",
          percentnum: 80,
          percenttext: "80%"
        }, {
          skill: "CSS",
          percentnum: 70,
          percenttext: "70%"
        }
      ]

    },
    

  ]

  const [activeId, setActiveId] = useState(1);

  return (
    <>
      <div className='prjectmaincnt mb-0'>
        <div className='row pb-4' id='Projectheader'>
          <div className="col-md text-center projectmaintitle" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>My Projects</div>
        </div>

        <div className="row prjectcontainer" >
          <div className="col-md-12 prcontent p-0">
            <div className="row" style={{ height: "100%" }}>
              <div className="col-md-3 prjectnav">
                <div className="projectlist">
                  <div className='list'>
                    <div className={`prname ${activeId === 1 ? 'active' : ''}`} onClick={() => setActiveId(1)}>Dataevolve Website</div>
                    <div className={`prname ${activeId === 2 ? 'active' : ''}`} onClick={() => setActiveId(2)}>Gail Gas Tenders</div>
                    <div className={`prname ${activeId === 3 ? 'active' : ''}`} onClick={() => setActiveId(3)}>Gas Gas Admin </div>
                    <div className={`prname ${activeId === 4 ? 'active' : ''}`} onClick={() => setActiveId(4)}>Seed Fund Scheme</div>
                    <div className={`prname ${activeId === 5 ? 'active' : ''}`} onClick={() => setActiveId(5)}>Gail Gas Public</div>
                    <div className={`prname ${activeId === 6 ? 'active' : ''}`} onClick={() => setActiveId(6)}>Work Permit</div>
                    <div className='mt-3 navprofile' style={{backgroundImage:`url(${Projectsdata[activeId-1].pjLogo})`}}>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md prjecDetails p-0" >
                <div className="imagecontainer pb-3" >
                  <div className="projecttitle">
                    {Projectsdata[activeId - 1].title}
                  </div>
                  <div className="role">{Projectsdata[activeId - 1].role}</div>
                  <div className='duration'>{Projectsdata[activeId - 1].duration} </div>
                  <div className="prdisc">
                    {Projectsdata[activeId - 1].summary}
                  </div>
                  <p className='websitelink'> <strong>Visit</strong>: <a href={Projectsdata[activeId - 1].projectlink} target='black' >{Projectsdata[activeId - 1].linkname}</a></p>
                </div>
                <div className="row Projectinfo m-0">
                  <div className="col-md-7">
                    <span className='roleandres'> Role and Responsibilities</span>
                    <div>
                      <h6 style={{ fontSize: "14px", marginTop: "10px" }}>Frontend Development:</h6>
                      <p>{Projectsdata[activeId - 1].frontend}</p>

                      {Projectsdata[activeId - 1].backend &&
                        <h6 style={{ fontSize: "14px", marginTop: "10px" }}>Backend Development:</h6>
                      }
                      <p>{Projectsdata[activeId - 1].backend}</p>

                      {Projectsdata[activeId - 1].security && <div>
                        <h6 style={{ fontSize: "14px", marginTop: "10px" }}>Security:</h6>
                        <p>{Projectsdata[activeId - 1].security}</p>
                      </div>}



                    </div>
                  </div>
                  <div className="col-md">
                    <div style={{ height: "100%", display: "flex", justifyContent: "center" }}>
                      <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "start", flexDirection: "column" }}>

                        {Projectsdata[activeId - 1].percentage && Projectsdata[activeId - 1].percentage.map((item, i) => {
                          return (
                            <div className="skillpercent" key={i}>
                              <span className='framename'>{item.skill}</span>
                              <div className='skillsbarsec'>
                                <span className='percent'>{item.percenttext}</span>
                                <div className='bar' style={{ width: `${item.percentnum}%` }}></div>
                              </div>
                            </div>
                          )
                        })}

                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    {Projectsdata[activeId - 1].achivements && <div>
                      <h6 style={{ fontSize: "14px", marginTop: "10px" }}>Achivements:</h6>
                      <p>{Projectsdata[activeId - 1].achivements}</p>
                    </div>}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>



      </div>
    </>
  );
}

export default Projects;
