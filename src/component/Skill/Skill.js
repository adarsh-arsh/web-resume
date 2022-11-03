import React from "react";
import "./skill.css";
import testImg from "./test.png";
import autoImg from "./robots.png";
import moreImg from "./java.png";

function Skill() {
  return (
    <div className="container" id="services">
      <div className="content">
        <h2>Skills as Services</h2>
      </div>
      <div className="boxContainer">
        <div className="skillType">
          <h2>Testing tool</h2>
          <img src={testImg}></img>

          <p>Selenium</p>
          <p>SAP ISU, RQM, JIRA</p>
          <p>Postman, Ecppse IDE</p>
          <p>Putty, Protractor, TestNG</p>
          
        </div>
        <div className="skillType">
          <h2>Automation Framework</h2>
          <img src={autoImg}></img>

          <p>Hybrid Framework</p>
          <p>Data Driven Framework </p>
          <p>Page Object Model design pattern</p>
          <p>JIRA and RQM</p>
          <p>Junit, Maven</p>
          
        </div>
        <div className="skillType">
          <h2>More...</h2>
          <img src={moreImg}></img>
          <p>Core Java, HTML, CSS</p>
          <p>Gitlab, Jenkins</p>
          <p>MySQL</p>
          <p>Bit bucket, SharePoint</p>
          
        </div>
      </div>
    </div>
  );
}

export default Skill;
