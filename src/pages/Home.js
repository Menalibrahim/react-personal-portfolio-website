import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, it's Menal Ibrahim</h2>
        <div className="prompt">
          <p>A software developer  responsible for applying interactive and visual design principles on websites and web applications.</p>
          
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS,
              Ionic, BootStrap,TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS,
              MySQL, MongoDB,
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>React,JavaScript, Nodejs, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
