import { useContext } from 'react';
import { themeContext } from '../../Context';
import './Skills.css'
import {easeOut, motion } from "framer-motion";
const Skills = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <motion.section 
        initial={{opacity:0,y:-200}}
        animate={{opacity:1,y:0}}
       transition={{duration:1 ,ease:easeOut,delay:0.6}}
        className='Skills'>
               <h1 class="section-title-01 text-center  " style={{ color: darkMode ? "white" : "" }}>Skills</h1>
          <h2 class="section-title-02 text-center mb-0" style={{ color: darkMode ? "white" : "" }}>Skills</h2>
            <div className='Skills-head'>
                <p className='mt-0' style={{ color: darkMode ? "white" : "" }}>excel in essential design skills, creating visually stunning and
                    functional digital experiences</p></div>

            <div className="progress-part">
                <div className="progress-part1">


                    <div className="skill-box">
                        <span className="title">HTML</span>
                        <div className="skill-bar">
                            <span className="skill-per html">
                                <span className="tooltip">95%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill-box">
                        <span className="title">CSS</span>
                        <div className="skill-bar">
                            <span className="skill-per css">
                                <span className="tooltip">85%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill-box">
                        <span className="title">JavaScript</span>
                        <div className="skill-bar">
                            <span className="skill-per javascript">
                                <span className="tooltip">50%</span>
                            </span>
                        </div>
                    </div>
                    {/* <div className="skill-box">
                        <span className="title">NodeJS</span>
                        <div className="skill-bar">
                            <span className="skill-per nodejs">
                                <span className="tooltip">40%</span>
                            </span>
                        </div>
                    </div> */}
                    <div className="skill-box">
                        <span className="title">ReactJS</span>
                        <div className="skill-bar">
                            <span className="skill-per reactjs">
                                <span className="tooltip">60%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill-box">
                        <span className="title">Bootstrap</span>
                        <div className="skill-bar">
                            <span className="skill-per expressjs">
                                <span className="tooltip">80%</span>
                            </span>
                        </div>
                    </div>


                </div>
            </div>



        </motion.section>
    )
}

export default Skills