import './Certificates.css'
import img1 from "../../assets/imgs/photo_2024-04-01_13-24-49.jpg"
import img3 from "../../assets/imgs/photo.png"
import img4 from "../../assets/imgs/mad-solution-Certificate.png"
import django from '../../assets/imgs/Django.jpg'
// import img6 from "../../assets/imgs/66.jpg"
// import img7 from "../../assets/imgs/77.jpg"
// import img8 from "../../assets/imgs/888.jpg"
// import img9 from "../../assets/imgs/99.jpg"
// import img10 from "../../assets/imgs/10.jpg"
// import img11 from "../../assets/imgs/1111.jpg"
import { useContext } from 'react'
import { themeContext } from '../../Context'
import {  easeOut, motion } from "framer-motion";

const Certificates = () => {
    const theme=useContext(themeContext);
    const  darkMode = theme.state.darkMode;
    return (
        <motion.div 
         initial={{opacity:0,y:-200}}
        animate={{opacity:1,y:0}}
        transition={{duration:1 ,ease:easeOut,delay:0.6}} className='Certificates mt-5 '>
            <h1 class="section-title-01 text-center " style={{ color: darkMode ? "white" : "" }}>Certificates</h1>
            <h2 class="section-title-02 text-center mb-0" style={{ color: darkMode ? "white" : "" }}>Certificates</h2>
            <div className="main-Certificates flex flex-wrap justify-center align-items-center  gap-4 ">
                <div className="imgs mb-2">
                    <img src={img1} alt="" />
                  
                </div>
                <div className="imgs mb-2">
                    <img src={img3} alt="" />
                </div>
                <div className="imgs mb-2">
                    <img src={img4} alt="" />
                </div>
                <div className="imgs mb-2">
                    <img src={django} alt="" />
                </div>
                {/* <div className="imgs mb-2">
                    <img src={img4} alt="" />
                </div>
             
                <div className="imgs mb-2">
                    <img src={img6} alt="" />
                </div>
                <div className="imgs mb-2">
                    <img src={img7} alt="" />
                </div>
                <div className="imgs mb-2">
                    <img src={img8} alt="" />
                </div>
                <div className="imgs mb-2">
                    <img src={img9} alt="" />
                </div>
                <div className="imgs mb-2">
                    <img src={img10} alt="" />
                </div>
                <div className="imgs mb-2">
                    <img src={img11} alt="" />
                </div> */}

            </div>


        </motion.div>
    )
}

export default Certificates