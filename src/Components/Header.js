import React from "react";
import Navbar from "./Navbar";
import ImageWork from "../Assets/images/illustration-working.svg";
const Header = () => {
  return (
    <header>
      <Navbar />
      <div className="content">
        <div className="image">
          <img className="work-image" src={ImageWork} alt="Working" />
        </div>
        <div className="text">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="btn">Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
