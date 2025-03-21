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
      duration: "Sep 2014 - Dec 2024",
      location: "Pune, Maharashtra, India",
      logo: "Mphasis.png",
    },
  ]);

  return (
    <div className="experience-container">
      <p className="title">
        <strong>
          Driven by code, fueled by curiosity and shaped by experience
        </strong>
        . Every{" "}
        <span style={{ color: "yellow" }}>
          <strong>project</strong> has expanded my <strong>vision</strong>
        </span>{" "}
        👨‍💻, and every <strong>position</strong> has helped me{" "}
        <strong>grow</strong> 🚀. Driven by <strong>innovation</strong> and a
        passion for <strong>excellence</strong>, I work to bring{" "}
        <strong>ideas</strong> 💡 to life through meaningful{" "}
        <strong>digital solutions</strong>.
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
