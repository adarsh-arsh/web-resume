import React, { useState } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import pic from "./pic.png";
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
              <br />
              <a href="https://www.linkedin.com/in/adarsh-singh-b88090128/">
                <LinkedInIcon />
              </a>
              <a href="https://twitter.com/Adarsh_ArshRash">
                <TwitterIcon />
              </a>
              <a href="https://www.instagram.com/adarsh_arsh19/">
                <InstagramIcon />
              </a>
            </div>
            
          </div>
          
          <div className="pic">
          <div className="pic2"><img src={pic}></img></div>
            
            
          </div>
          
        </div>
        <div className="wrapper">
          <div className="box">
            <div>
              <img src={ani}></img>
            </div>
            <div>
              <img src={ani}></img>
            </div>
            <div>
              <img src={ani}></img>
            </div>
            <div>
              <img src={ani}></img>
            </div>
            <div>
              <img src={ani}></img>
            </div>
            <div>
              <img src={ani}></img>
            </div>
            <div>
              <img src={ani}></img>
            </div>
            <div>
              <img src={ani}></img>
            </div>
            <div>
              <img src={ani}></img>
            </div>
            <div>
              <img src={ani}></img>
            </div>
            <div>
              <img src={ani}></img>
            </div>
            <div>
              <img src={ani}></img>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
