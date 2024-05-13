import './Exp.css'
import "../Skills/Skills.css"
import { FaBookMedical } from "react-icons/fa";
import { themeContext } from '../../Context'
import {  easeOut, motion } from "framer-motion"
import { useContext } from 'react';
const Exp = () => {
  const theme=useContext(themeContext);
  const  darkMode = theme.state.darkMode;
  return (
    <>
<div className="Exprencies">
      <div className='Exp'>
        <div className="exp-content">
          <div className="circle" style={{ color: darkMode ? "black" : "" ,backgroundColor: darkMode ? "  #87e6fb": ""}}><strong>+1</strong></div>
          <span className='circle-1' style={{ color: darkMode ? "white" : "" }}>Years</span>
          <p className='circle-2' >Exprinice</p>
        </div>
        <div className="exp-content">
          <div className="circle" style={{ color: darkMode ? "black" : "" ,backgroundColor: darkMode ? "  #87e6fb": ""}}><strong>+4</strong></div>
          <span className='circle-1' style={{ color: darkMode ? "white" : "" }}>completed</span>
          <p className='circle-2 '>Projects</p>
        </div>
        {/* <div className="exp-content">
          <div className="circle" style={{ color: darkMode ? "black" : "",backgroundColor: darkMode ? "  #87e6fb": ""}}><strong>+10</strong></div>
          <span className='circle-1' style={{ color: darkMode ? "white" : "" }}>Microsoft</span>
          <p className='circle-2' >Projects</p>
        </div> */}

      </div>
      <div className="skills-others">
        <div className="language">
          <h1>language</h1>
          <hr className='line' />
          <div className="skill-box language1">
            <span className="title2" style={{ color: darkMode ? "white" : "" }}>English</span>
            <div className="skill-bar">
              <span className="skill-per css">
                <span className="tooltip"style={{ color: darkMode ? "white" : "" }}>65%</span>
              </span>
            </div>
          </div>
          {/* <div className="skill-box language2">
            <span className="title2">French</span>
            <div className="skill-bar">
              <span className="skill-per javascript">
                <span className="tooltip">30%</span>
              </span>
            </div>
          </div> */}
          </div>

          <div className="Studies">
            <h1>Studies</h1>
            <hr className='line22' />
            <div className="Studies-part flex  justify-items-start gap-7">
              <div>      <span className='book-studies'> <FaBookMedical /></span></div>
     
            <div>
              <p className='title2'>Tishreen University</p>
              {/* <span>Graduation at <strong className='-amber'>2021</strong></span> */}
            </div>
            </div>
            
          </div>
      
        </div>
        </div>
      </>
      )
}

      export default Exp