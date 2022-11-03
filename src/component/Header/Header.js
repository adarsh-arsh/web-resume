import React, { useState } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./header.css";
import ani from "./world.png";
function Header() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav>
      <div className="header">
        <div className="navbar">
          <div className="links" id={showLinks ? "hidden" : ""}>
            <a href="#about">About</a>
            <a href="#services">Skills</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
          <button onClick={() => setShowLinks(!showLinks)}>
            {" "}
            <ReorderIcon />
          </button>
        </div>
        <div className="second">
          <div className="name">
            <div>
              {" "}
              <h1>Hey There!</h1>
              <br />
              <h2>I'm Adarsh Singh</h2>
              <br />
              <h3>Automation Developer</h3>
              <br/>
              <a href="https://www.linkedin.com/in/adarsh-singh-b88090128/"><LinkedInIcon/></a>
               <a href="https://twitter.com/Adarsh_ArshRash"><TwitterIcon/></a>
                <a href="https://www.instagram.com/adarsh_arsh19/"><InstagramIcon/></a>
            </div>
          </div>
          <div className="pic">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#08BDBA"
                d="M40.1,-57.1C53.3,-45.6,66.4,-35.7,73.9,-21.8C81.5,-7.9,83.6,10,78,24.7C72.3,39.4,58.9,51,44.6,56.9C30.3,62.8,15.2,63,-0.6,63.8C-16.3,64.6,-32.6,66,-42.8,58.8C-52.9,51.5,-56.9,35.6,-63.3,19.7C-69.8,3.7,-78.8,-12.4,-78.1,-28.8C-77.5,-45.2,-67.3,-61.9,-52.7,-72.9C-38,-84,-19,-89.5,-2.8,-85.7C13.4,-81.8,26.9,-68.7,40.1,-57.1Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>
        <div className="wrapper">
        <div className="box">
          <div><img src={ani}></img></div>
          <div><img src={ani}></img></div>
          <div><img src={ani}></img></div>
          <div><img src={ani}></img></div>
          <div><img src={ani}></img></div>
          <div><img src={ani}></img></div>
          <div><img src={ani}></img></div>
          <div><img src={ani}></img></div>
          <div><img src={ani}></img></div>
          <div><img src={ani}></img></div>
          <div><img src={ani}></img></div>
          <div><img src={ani}></img></div>
          
        </div>

      </div>
      </div>
    </nav>
  );
}

export default Header;
