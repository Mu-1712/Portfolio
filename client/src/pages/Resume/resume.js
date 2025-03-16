import React from "react";
import "./resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <iframe 
        src="/_Musharraf_Resume.pdf" 
        className="resume-iframe" 
        title="My Resume"
      ></iframe>
    </div>
  );
};

export default Resume;
