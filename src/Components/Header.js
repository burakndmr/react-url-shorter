import React from "react";
import Navbar from "./Navbar";
import Working from "../Assets/Components/Icons/Working.js";
import ImageWork from "../Assets/images/illustration-working.svg";
const Header = () => {
  return (
    <header>
      <Navbar />
      <div className="content">
        <div className="image">
          <img className="work-image" src={ImageWork} alt="Working" />
          {/* <Working /> */}
        </div>
        <div className="text">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button>
            <a href="/">Get Started</a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
