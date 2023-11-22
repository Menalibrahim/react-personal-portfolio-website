import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/Menalibrahim"> 
        <GitHubIcon />
        </a>
        <a href="mailto:menalibrahim67@gmail.com">
        <EmailIcon />
        </a>
        <a href="https://www.linkedin.com/in/menal-ibrahim-031790231/">
        <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2023 menalibrahim</p>
    </div>
  );
}

export default Footer;
