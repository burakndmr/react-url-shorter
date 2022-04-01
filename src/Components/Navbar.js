import React from "react";
import Logo from "../Assets/Components/Icons/Logo";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <div className="logo">
        <Logo />
      </div>
      <div className={isOpen ? "navbar-element open" : "navbar-element close"}>
        <div className="links">
          <a href="/">Features</a>
          <a href="/">Pricing</a>
          <a href="/">Resources</a>
        </div>

        <div className="login-buttons">
          <a href="/">Login</a>
          <a href="/">Sign Up</a>
        </div>
      </div>
      <div className="mobile">
        <button onClick={toggle}>H</button>
      </div>
    </nav>
  );
};

export default Navbar;
