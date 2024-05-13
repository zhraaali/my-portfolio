
import img1 from "../../assets/imgs/quiz website.png"
// import img2 from "../../assets/imgs/2.png"
// import img3 from "../../assets/imgs/3.png"
import img4 from "../../assets/imgs/education website.png"
// import img5 from "../../assets/imgs/5.png"
// import img6 from "../../assets/imgs/6.png"
// import img7 from "../../assets/imgs/7.png"
// import img8 from "../../assets/imgs/8.png"
import img9 from "../../assets/imgs/mobile website.png"
import { GoArrowUpRight } from "react-icons/go";


import './Portfolio.css'
import { useContext } from "react"
import { themeContext } from "../../Context"
import { easeOut, motion } from "framer-motion";
const Portfolio = () => {
  /* dark mood */
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='portfolio'>
      {/* head Portfolio */}
      <h1 className="section-title-01 text-center " style={{ color: darkMode ? "white" : "" }}>portfolio</h1>
      <h2 className="section-title-02 text-center mb-0" style={{ color: darkMode ? "white" : "" }}>portfolio</h2>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: easeOut, delay: 0.4 }}
        className='project-portfolio flex justify-center items-center'>
        {/* projects div */}
        <div className="projects shadow-lg transition-transform">
          <img src={img1} alt="" />
          <div className="overlay">
            <div class="text">Quizzes website</div>
          </div>
          <div className="information  mt-4 pl-1">
            <h2 style={{ color: darkMode ? "white" : "" }}>Quizzes website</h2>
            <div className="arrow-content flex gap-4">
              <span> Show Website</span>
              <a href="https://robquiz.com" target="_blank">
                <GoArrowUpRight className="arrow animate-bounce" />
              </a>
            </div>
          </div>
        </div>
        {/* projects div */}
        <div className="projects shadow-lg transition-transform">
          <img src={img9} alt="" />
          <div className="overlay">
            <div class="text">Phone</div>
          </div>
          <div className="information  mt-4 pl-1">
            <h2 style={{ color: darkMode ? "white" : "" }} >Phone</h2>
            <div className="arrow-content flex gap-4">
              <span> Show Website</span>
              <a href="https://zhraaali.github.io/task-5-2/" target="_blank">
                <GoArrowUpRight className="arrow animate-bounce" />
              </a>
            </div>
          </div>
        </div>
        {/* projects div */}
        <div className="projects shadow-lg transition-transform">
          <img src={img4} alt="" />
          <div className="overlay">
            <div class="text">Education</div>
          </div>
          <div className="information  mt-4 pl-1">
            <h2 style={{ color: darkMode ? "white" : "" }}>Education</h2>
            <div className="arrow-content flex gap-4">
              <span> Show Website</span>
              <a href="https://zhraaali.github.io/task_4-2/" target="_blank">
                <GoArrowUpRight className="arrow animate-bounce" />
              </a>
            </div>
          </div>

        </div>
        {/* projects div */}
        {/* <div className="projects shadow-lg transition-transform" >
          <img src={img2} alt="" />
          <div className="overlay">
            <div class="text">multi pages</div>
          </div>
          <div className="information  mt-4 pl-1">
            <h2 style={{ color: darkMode ? "white" : "" }}>multi pages</h2>
            <div className="arrow-content flex gap-4">
              <span> Show Website</span>
              <a href="https://braashaban.github.io/advan/index.html">
                <GoArrowUpRight className="arrow animate-bounce" />
              </a>
            </div>
          </div>
        </div> */}
        {/* projects div */}
        {/* <div className="projects shadow-lg transition-transform">
          <img src={img5} alt="" />
          <div className="overlay">
            <div class="text">Moshify</div>
          </div>
          <div className="information  mt-4 pl-1">
            <h2 style={{ color: darkMode ? "white" : "" }}>Moshify</h2>
            <div className="arrow-content flex gap-4">
              <span> Show Website</span>
              <a href="https://braashaban.github.io/myintro/">
                <GoArrowUpRight className="arrow animate-bounce" />
              </a>

            </div>

          </div>
        </div> */}
        {/* projects div */}
        {/* <div className="projects shadow-lg transition-transform">
          <img src={img3} alt="" />
          <div className="overlay">
            <div class="text">Education</div>
          </div>
          <div className="information  mt-4 pl-1">
            <h2 style={{ color: darkMode ? "white" : "" }}>Education</h2>
            <div className="arrow-content flex gap-4">
              <span> Show Website</span>
              <a href="https://braashaban.github.io/task4-2/">
                <GoArrowUpRight className="arrow animate-bounce" />
              </a>
            </div>
          </div>
        </div> */}
        {/* projects div */}
        {/* <div className="projects shadow-lg transition-transform">
          <img src={img6} alt="" />

          <div className="overlay">
            <div class="text">online course</div>
          </div>
   
          <div className="information  mt-4 pl-1">
            <h2 style={{ color: darkMode ? "white" : "" }} >online course</h2>
            <div className="arrow-content flex gap-4 ">
              <span> Show Website</span>
              <a href="file:///C:/Users/Windows.10/AppData/Local/Temp/Rar$EXa2636.42397/Braa-shaban-task-2/dddd/index.html">
                <GoArrowUpRight className="arrow animate-bounce" />
              </a>
            </div>

          </div>
        </div> */}
        {/* projects div */}
        {/* <div className="projects shadow-lg transition-transform">
          <img src={img7} alt="" />
          <div className="overlay">
            <div class="text">My portfolio</div>
          </div>
          <div className="information  mt-4 pl-1">
            <h2 style={{ color: darkMode ? "white" : "" }}>My portfolio</h2>
            <div className="arrow-content flex gap-4">
              <span> Show Website</span>
              <a href="https://braashaban.github.io/task-3/">
                <GoArrowUpRight className="arrow animate-bounce" />
              </a>
            </div>
          </div>
        </div> */}
        {/* projects div */}
        {/* <div className="projects shadow-lg transition-transform">
          <img src={img8} alt="" />
          <div className="overlay">
            <div class="text">Films</div>
          </div>
          <div className="information  mt-4 pl-1">
            <h2 style={{ color: darkMode ? "white" : "" }}>Films</h2>
            <div className="arrow-content flex gap-4">
              <span> Show Website</span>
              <a href="https://braashaban.github.io/movies/">
                <GoArrowUpRight className="arrow animate-bounce" />
              </a>
            </div>
          </div>
        </div> */}
      </motion.div>



    </div>
  )
}

export default Portfolio