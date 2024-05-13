import React, { useState } from "react";
import { useContext } from "react";
import { themeContext } from "../../Context";
import br from "../../assets/imgs/OIP.jpeg"
import Toggle from "../Toggle/Toggle"; 
import "./NavBar.css";
import { Link } from "react-scroll";

function NavBar() {
const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
 const [collapse, setCollapse] = useState("nav-items");

  const [toggleIcon, setToggleIcon] = useState("toggler-icon"); 
   const onToggle = () => {
    collapse === "nav-items"
      ? setCollapse("nav-items nav-collapse")
      : setCollapse("nav-items");

    toggleIcon === "toggler-icon"
      ? setToggleIcon("toggler-icon toggle")
      : setToggleIcon("toggler-icon");
  }; 
  return (
    <>
  <div className="nav-container">
     <div className="logo ">
   <img src={br} alt="" />
     </div>
    
      <div className={collapse}>
        <ul>
         <Link activeClass="active" to="Navbar" spy={true} smooth={true} style={{ color: darkMode ? "white" : "" }}>
                Home
              </Link>
              <Link activeClass="active" to="works" spy={true} smooth={true} style={{ color: darkMode ? "white" : "" }}>
              works
              </Link>
              <Link activeClass="active" to="  portfolio" spy={true} smooth={true} style={{ color: darkMode ? "white" : "" }}>
              portfolio
              </Link>
              <Link activeClass="active" to="Certificates" spy={true} smooth={true} style={{ color: darkMode ? "white" : "" }}>
              Certificates
              </Link>
              <Link activeClass="active" to="Skills" spy={true} smooth={true} style={{ color: darkMode ? "white" : "" }}>
              Skills
              </Link>
              <Link activeClass="active" to="ContactUs" spy={true} smooth={true} style={{ color: darkMode ? "white" : "" }}>
              ContactUs
              </Link>
     
        </ul>

        <div className="btn-mode" >
       <Toggle />
    
        </div>
      </div>

      
     <div className={toggleIcon} onClick={onToggle}>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div> 
    </div>
  
  





    </>
  );
}

export default NavBar;

