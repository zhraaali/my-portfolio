import React, { useContext } from "react";
import "./Toggle.css";
import { FaRegMoon } from "react-icons/fa";

import { themeContext } from "../../Context";
import { IoSunnyOutline } from "react-icons/io5";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    // debugger
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className="toggle" onClick={handleClick}>
    
      <FaRegMoon />
      <IoSunnyOutline />
      
      <div
        className="toggel-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
