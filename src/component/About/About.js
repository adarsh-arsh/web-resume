import React from "react";
import Button from "@mui/material/Button";
import "./about.css";
import pic2 from "./pic.png";

function About() {
  function resumeD() {
    fetch("resume-a.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "resume-a.pdf";
        alink.click();
      });
    });
    console.log("clickled!");
  }

  return (
    <div className="container1" id="about">
      <div className="image1">
        <img src={pic2}></img>
      </div>
      <div className="content">
        <h2>About Me</h2>
        <p>
          <h1>JAVA AUTOMATION DEVELOPER</h1>
          <br />
          Experienced Software Quality Assurance, with 2 years and 5 months of
          experience in Web testing and API testing. Done Training on Selenium
          Automation Testing in Wipro Limited (3 months). Experience on domains
          such as CPG, Telecom, Healthcare and IES. Knowledge on Defect, Defect
          Life Cycle & Defect Tracking and Software Testing Life Cycle (STLC).
          Expertise in understanding Business Requirement Specifications,
          Functional Specifications and Design documentations and converting
          them into Test Scenarios. Performed Manual and Automation test
          estimations based on the business requirements and the resources.
          <br />
          <br />
          <Button variant="contained" onClick={resumeD}>
            Download CV
          </Button>
        </p>
      </div>
    </div>
  );
}
export default About;
