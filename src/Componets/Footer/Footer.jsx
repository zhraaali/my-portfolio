import './Footer.css'

import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import { FaPinterest } from 'react-icons/fa'


const Footer = () => {
  return (


    <footer>
      <div class="main-footer">
        {/* part 1 */}
        <div class="foot">
          <h1>Zhraa Ali</h1>
          <a href="#" >
            <p>Front end developer</p>
          </a>
        </div>
        {/* part 2 */}
        <div class="foot">
          <h2 className='mb-2  text-xl'>Follow Me in</h2>
          {/* icon scoical media */}
          <div class="icons">
            <div class="social-media">
              <a href="https://www.facebook.com/zhraa.mali.9?mibextid=ZbWKwL" target='_blank'> <FaFacebook /> </a>
            </div>
            <div class="social-media">
              <a href="https://www.instagram.com/zhraa_m_ali3?igsh=dWtpb2RsOGVvMGM2" target='_blank'> <FaInstagram /> </a>
            </div>
            <div class="social-media">
              <a href="https://www.linkedin.com/in/zhraa-ali-a659a927a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'> <FaLinkedin /> </a>
            </div>
            <div class="social-media">
              <a href="https://github.com/zhraaali" target='_blank'> <FaGithub /> </a>
            </div>
            {/* <div class="social-media">
              <a href="https://in.pinterest.com/braashaban101/"> <FaPinterest /> </a>
            </div> */}
          </div>
        </div>

        {/* part 3 */}
        <div class="foot foot3">
          <h2 className=' mb-2  text-xl font-bold' >Contact Us:</h2>
          <a href="#"><span className='mt-3 mb-2  text-xl'>zhraa002.z.ali.2002@gmail.com</span></a>
        </div>
      </div>


      <hr className='mt-10' />
      {/* <p className='text-center mt-6 text-white'>© 2024 by Braa Shaban. All rights reserved.</p> */}
    </footer>
  )
}

export default Footer

