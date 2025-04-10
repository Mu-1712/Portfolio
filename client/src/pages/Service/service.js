import React, { useState } from "react";
import { motion } from "framer-motion";
import "./service.css";

const Experience = () => {
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      company: "Xine Technology Solutions",
      role: "Jr. Developer",
      duration: "Jan 2025 - Present",
      location: "Guntur, A.P, India",
      logo: "XineTech.jpg",
    },
    {
      id: 2,
      company: "Mphasis Pvt Ltd",
      role: "Data Analyst",
      duration: "Sep 2024 - Dec 2024",
      location: "Pune, Maharashtra, India",
      logo: "Mphasis.png",
    },
  ]);

  return (
    <div className="experience-container">
      <p className="title">
          <strong>My Journey</strong>
      </p>

      {/* Timeline container remains for styling purposes */}
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="experience-box"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={exp.logo}
              alt={`${exp.company} logo`}
              className="company-logo"
            />
            <div className="experience-details">
              <h3 className="company-name">{exp.company}</h3>
              <p className="role">{exp.role}</p>
              <p className="duration">{exp.duration}</p>
              <p className="location">{exp.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
