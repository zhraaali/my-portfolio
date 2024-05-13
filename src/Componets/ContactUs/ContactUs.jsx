import { useRef } from 'react';
import './ContactUs.css'
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useState } from 'react';
import { useContext } from 'react';
import { themeContext } from '../../Context';
import { easeOut, motion } from "framer-motion";
const ContactUs = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [doing, setdoing] = useState(false)

  /* sendEmail */
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fzixula', 'template_zvpslwu', form.current, {
        publicKey: 'pdTug1jIAWOCmTfYb',
      })
      .then((result) => {
        console.log(result.text);
        setdoing(true)
      },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div className='mt-9 mb-3'>
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: easeOut, delay: 0.6 }}
        className="contactt mt-8" id='ContactUs'>
        {/* title contact */}
        <h1 className="section-title-01 text-center" style={{ color: darkMode ? "white" : "" }}>Contact Me</h1>
        <h2 className="section-title-02 text-center" style={{ color: darkMode ? "white" : "" }}>Contact Me</h2>
        <div className="contact-form" id="contact">
          {/* left side form */}
          <div className="w-left">
            <div className="awesome-contact">
              {/* darkMode */}
              <span className='contact-title' style={{ color: darkMode ? "white" : "" }}><span style={{ color: 'var(--orange)' }}>Get</span> in Touch</span>
              <p className='paragrap-contact font-normal'>Have a question or a project in mind? I'd
                love to hear from you. Let's chat and make something amazing together.</p>
              <div className="contact-information">
                <div className='flex gap-7 mb-3'> <MdEmail className='icon-imail' />  <p className='font-medium'> contact: zhraa002.z.ali.2002@gmail.com</p></div>
                <div className='flex gap-7 mb-3'>  <FaLocationDot className='icon-imail' /> <p className='font-medium'>syria lattakia</p></div>
                <div className='flex gap-7 mt-3'>  <FaPhoneAlt className='icon-imail' /> <p className='font-medium'>+963 0937340947</p></div>
              </div>
            </div>
          </div>
          {/* right side form */}
          {/* <div className="c-right mt-6">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="user_name" className="user" placeholder="Name" style={{ backgroundColor: darkMode ? "gray" : "", color: darkMode ? "white" : "" }} />
              <input type="email" name="user_email" className="user" placeholder="Email" style={{ backgroundColor: darkMode ? "gray" : "" }} />
              <input type="number" name="user_email" className="user" placeholder="PhoneNumber" style={{ backgroundColor: darkMode ? "gray" : "" }} />
              <textarea name="message" className="user" placeholder="Message" style={{ backgroundColor: darkMode ? "gray" : "" }} />
              <input type="submit" value="Send" className="btncontact" style={{ backgroundColor: darkMode ? "gray" : "" }} />
              <strong style={{ placeholder: darkMode ? "white" : "" }}>{doing && "Thanks for Contacting me"} </strong>
              <div
                className="blur c-blur1"
                style={{ background: "var(--purple)" }}
              ></div>
            </form>
          </div> */}
        </div>
      </motion.div>
    </div>
  )
}

export default ContactUs