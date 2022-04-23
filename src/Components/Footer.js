import React from "react";
import Logo from "../Assets/Components/Icons/Logo";
import Facebook from "../Assets/Components/Icons/FacebookLogo";
import Twitter from "../Assets/Components/Icons/TwitterLogo";
import Instagram from "../Assets/Components/Icons/InstagramLogo";
import Pinterest from "../Assets/Components/Icons/PinterestLogo";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-logo-row">
          <Logo prop={"#fff"} />
        </div>
        <div className="others">
          <div className="footer-links">
            <div className="links">
              <h3>Features</h3>
              <a href="#">Link Shortening</a>
              <a href="#">Branded Links</a>
              <a href="#">Analytics</a>
            </div>
            <div className="links">
              <h3>Resources</h3>
              <a href="#">Blog</a>
              <a href="#">Developers</a>
              <a href="#">Support</a>
            </div>
            <div className="links">
              <h3>Company</h3>
              <a href="#">About</a>
              <a href="#">Our Team</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div className="social-media-icons">
            <Facebook />
            <Twitter />
            <Pinterest />
            <Instagram />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
