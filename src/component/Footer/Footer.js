import React from "react";
import "./footer.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div>
      <div className="foot1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 500">
          <path
            fill="#08BDBA"
            fill-opacity="1"
            d="M0,32L48,74.7C96,117,192,203,288,213.3C384,224,480,160,576,144C672,128,768,160,864,176C960,192,1056,192,1152,165.3C1248,139,1344,85,1392,58.7L1440,32L1440,500L1392,500C1344,500,1248,500,1152,500C1056,500,960,500,864,500C768,500,672,500,576,500C480,500,384,500,288,500C192,500,96,500,48,500L0,500Z"
          ></path>
        </svg>
      </div>
      <div className="foot2">
        <div><a href="#about">About</a>
        <a href="#sservices">Skills</a>
        <a href="#services">Services</a></div>

       <div className="foot3">
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
       <div class="foot4">
        <p>Mobile: +919113717006  Email: adarshsingh66.as@gmail.com</p>
        <br/>
        <br/>
        <p>Copyright ©2022 All rights reserved | Designed By: <a href="https://rashmeesinha.github.io/resume-app/" target="_blank">Rashmi Sinha</a></p>
       </div>
      </div>
    </div>
  );
}

export default Footer;
