import { FaTelegramPlane } from 'react-icons/fa'
import  './Talk.css'
import {easeOut, motion } from "framer-motion";
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Talk = () => {
  /* for dark mood */
  const theme=useContext(themeContext);
  const  darkMode = theme.state.darkMode;
  return (
    /* main-talks */
    <motion.div 
       initial={{opacity:0,y:-100}}
    animate={{opacity:1,y:0}}
   transition={{duration:1 ,ease:easeOut,delay:0.4}}
    className="main-talk">
    <div className='Talk  flex shadow gap-9 flex-wrap'>
<div className="talk-1">
    <span style={{ color: darkMode ? "black" : "" }}> LET'S TALK</span>
    <h3 style={{ color: darkMode ? "black" : "" }}>ABOUT YOUR</h3>
    <h2 style={{ color: darkMode ? "black" : "" }}> NEXT PROJECT</h2>
</div>
<div className="talk-2 ">
    <button className="button flex justify-center  gap-2 items-center"> Get in Touch <a href="https://t.me/Braashabann"> <FaTelegramPlane /></a>  </button>
</div>

    </div>
    </motion.div>
  )
}

export default Talk