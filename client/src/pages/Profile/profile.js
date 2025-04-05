import { motion } from "framer-motion";
import { useState } from "react";
import "./profile.css";
import React from "react";

const BioAndResume = () => {
  const [isFlippedProfile, setIsFlippedProfile] = useState(false);
  const [isFlippedSkills, setIsFlippedSkills] = useState(false);

  return (
    <div className="container mt-3">
      <h2 className="section-title">Profile & Skills</h2>
      <div className="row justify-content-center">
        {/* Profile Card */}
        <div className="col-lg-5 col-md-6 col-12 mb-4">
          <motion.div 
            onClick={() => setIsFlippedProfile(!isFlippedProfile)} 
            className="flip-card"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="flip-card-inner" 
              animate={{ rotateY: isFlippedProfile ? 180 : 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flip-card-front">
                <p>Tap to See My Profile 🔄</p>
              </div>
              <div className="flip-card-back">
                <div className="d-flex flex-column align-items-center justify-content-center h-100">
                  <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="profile-image"
                  />
                  <h3 className="card-title">Mohammed Musharraf</h3>
                  <h5 className="card-subtitle">MERN Stack Developer</h5>
                  <p className="text-muted">Xine Technology Solutions</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills Card */}
        <div className="col-lg-5 col-md-6 col-12 mb-4">
          <motion.div 
            onClick={() => setIsFlippedSkills(!isFlippedSkills)} 
            className="flip-card"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="flip-card-inner" 
              animate={{ rotateY: isFlippedSkills ? 180 : 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flip-card-front">
                <p>Tap to See My Skills 🔄</p>
              </div>
              <div className="flip-card-back">
                <div className="skills-container">          
                  <div className="skills-category">
                    <h6 className="fw-bold">Technical Skills</h6>
                    <div className="mb-3">
                      <strong>MERN:</strong>
                      <div className="mt-2">
                        <span className="badge bg-dark">MongoDB</span>
                        <span className="badge bg-dark">Express.js</span>
                        <span className="badge bg-dark">React.js</span>
                        <span className="badge bg-dark">Node.js</span>
                      </div>
                    </div>

                    <div className="mb-3">
                      <strong>Databases:</strong>
                      <div className="mt-2">
                        <span className="badge bg-success">MySQL</span>
                        <span className="badge bg-success">MongoDB</span>
                      </div>
                    </div>

                    <div className="mb-3">
                      <strong>Programming Languages:</strong>
                      <div className="mt-2">
                        <span className="badge bg-primary">Java</span>
                        <span className="badge bg-primary">JavaScript</span>
                        <span className="badge bg-primary">Python</span>
                      </div>
                    </div>

                    <div className="mb-3">
                      <strong>Data Visualization Tools:</strong>
                      <div className="mt-2">
                        <span className="badge bg-warning text-dark">Power BI</span>
                      </div>
                    </div>
                  </div>

                  <div className="skills-category">
                    <h6 className="fw-bold">Soft Skills</h6>
                    <div className="mt-2">
                      <span className="badge bg-secondary">Communication</span>
                      <span className="badge bg-secondary">Teamwork</span>
                      <span className="badge bg-secondary">Time Management</span>
                      <span className="badge bg-secondary">Adaptability</span>
                      <span className="badge bg-secondary">Problem Solving</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BioAndResume;