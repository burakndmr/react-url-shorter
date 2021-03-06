import React from "react";
import Logo from "../Assets/Components/Icons/Logo";
import { useState } from "react";
import Menu from "../Assets/images/menu.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <div className="logo">
        <Logo prop={"#34313D"} />
      </div>
      <div className={isOpen ? "navbar-element open" : "navbar-element close"}>
        <div className="links">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </div>

        <div className="login-buttons">
          <a className="login" href="#">
            Login
          </a>
          <a className="sign-up" href="#">
            Sign Up
          </a>
        </div>
      </div>
      <div className="mobile">
        <img className="menu" src={Menu} onClick={toggle} />
        {/* <button onClick={toggle}>H</button> */}
      </div>
    </nav>
  );
};

export default Navbar;
