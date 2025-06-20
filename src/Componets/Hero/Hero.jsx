
import './Hero.css'
import imgGett from "../../assets/imgs/github.png";
import imglinkedin from "../../assets/imgs/linkedin.png";
import imginstagram from "../../assets/imgs/instagram.png";
import { easeOut, motion } from "framer-motion";
import v1 from "../../assets/imgs/hero1.png";
import { useContext } from 'react';
import { themeContext } from '../../Context';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  /* for dark mode */
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section className='Hero'>
      {/* right hero */}
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.75,
            }

          }
        }}
        initial="hidden"
        animate='show'
        className="content">
        <motion.h2
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
            }
          }}
          style={{ color: darkMode ? "white" : "" }}> Hi! I Am</motion.h2>

        <TypeAnimation
          className="title"
          sequence={[
            'Zhraa Ali',
            2000,
            'Front end Developer',
            2000,
          ]}
          wrapper="span"
          speed={80}
          style={{ fontSize: '1.5rem', }}
          repeat={Infinity}>

        </TypeAnimation>

        <motion.p
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
            }
          }}
          className="description"
          style={{ color: darkMode ? "white" : "" }}>
          I'm a front-end developer with 2 years of experience using React
          . Reach out if you'd like to learn more!
        </motion.p>
        {/* <motion.button
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
            }
          }}
          className='button'>
          <a href="mailto:zhraa002.z.ali.2002@gmail.com" className="contactBtn">
            Contact Me
          </a>
        </motion.button> */}
        <motion.div variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
          }
        }}
          className="icons-hero">
          <a href="https://github.com/zhraaali" target='_blank'><img src={imgGett} alt="" /></a>
          <a href="https://www.linkedin.com/in/zhraa-ali-a659a927a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>  <img src={imglinkedin} alt="" /></a>
          <a href="https://www.instagram.com/zhraa_m_ali3?igsh=dWtpb2RsOGVvMGM2" target='_blank'> <img src={imginstagram} alt="" /></a>

        </motion.div>
      </motion.div>

      {/* left hero */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: easeOut, delay: 0.4 }}
        /* img hero */
        className="imgss">
        <img src={v1} alt="" />
        <div className="blur22"></div>
      </motion.div>
    </section>

  )
}

export default Hero
