import React from 'react'
import './Skills.css'
// import angular from "../../assets/Angularlogo.png"
// import Jslogo from '../../assets/jslogo-removebg-preview.png'
// import Tslogo from '../../assets/Tslogo.webp'
// import Reactlogo from '../../assets/Reactlogo.webp'
// import Jquery from '../../assets/jQeurylogo.png'
// import Nodelogo from '../../assets/nodelogo.png'
// import Sqllogo from '../../assets/sqllogo.png'
// import Reactnative from '../../assets/reactnativelogo.png'
// import Htmllogo from '../../assets/Html5.jpg'
// import Csslogo from '../../assets/css3logo.png'
// import Bootstraplogo from '../../assets/bootstraplogo.png'
// import Materiallogo from '../../assets/materialui.png'
// import Mongodblog from '../../assets/mongodblog.png'
// import Gitlogo from '../../assets/Gitlogonew.webp'
// import Expresslogo from '../../assets/expresslogo.webp'
// import VScodelogo from '../../assets/vscodelogo.png'
// import Ziralogo from '../../assets/ziralogo.png'
// import sourcetreelogo from '../../assets/sourcetreelogo.png'



const listofskills = [
  {
    name: "Java Script",
    path: require("../../assets/jslogo-removebg-preview.png"),
    size: "40%"
  },
  {
    name: "Angular",
    path: require("../../assets/Angularlogo.png"),
    size: "40%"
  },
  {
    name: "Type Script",
    path: require("../../assets/Tslogo.webp"),
    size: "40%"
  },
  {
    name: "React.js",
    path: require("../../assets/Reactlogo.webp"),
    size: "40%"
  },
  {
    name: "jQuery",
    path: require("../../assets/jQeurylogo.png"),
    size: "40%"
  },
  {
    name: "Node.js",
    path: require("../../assets/nodelogo.png"),
    size: "40%"
  },
  {
    name: "React Native",
    path: require("../../assets/reactnativelogo.png"),
    size: "40%"
  },
  {
    name: "HTML5",
    path: require("../../assets/Html5.jpg"),
    size: "40%"
  },
  {
    name: "CSS3",
    path: require("../../assets/css3logo.png"),
    size: "40%"
  },
  {
    name: "My SQL",
    path: require("../../assets/sqllogo.png"),
    size: "40%"
  },
  {
    name: "Mongo DB",
    path: require("../../assets/mongodblog.png"),
    size: "40%"
  },
  {
    name: "Bootstrap5",
    path: require("../../assets/bootstraplogo.png"),
    size: "40%"
  },
  {
    name: "Material Ui",
    path: require("../../assets/materialui.png"),
    size: "40%"
  },

  {
    name: "Git",
    path: require("../../assets/Gitlogonew.webp"),
    size: "40%"
  },
  {
    name: "Express.js",
    path: require("../../assets/expresslogo.webp"),
    size: "80%"
  },
  {
    name: "VS Code",
    path: require("../../assets/vscodelogo.png"),
    size: "40%"
  },
  {
    name: "Jira",
    path: require("../../assets/ziralogo.png"),
    size: "40%"
  },
  {
    name: "Sourcetree",
    path: require("../../assets/sourcetreelogo.png"),
    size: "40%"
  }
];




function Skills() {
  return (
    <div className='skillscntr'>

      <div className='skillshead'><h3 >SKILLS</h3></div>
      <div className="row skillsrow mt-5">
        <div className="col-md"></div>
        {/* <div className="col-md-3"></div> */}
        <div className="col-md-8 leftsec">
          <div className='parentcardrow'>
            <div className="skillcardrow">
              {listofskills && listofskills.map((item, index) => {
                return (
                  <div key={index} className="skillcard">
                    <div><img src={item.path} alt="" width={item.size} /></div> 
                    <div>{item.name}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="col-md"></div>

      </div>
    </div >
  )
}

export default Skills