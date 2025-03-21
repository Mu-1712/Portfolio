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
      <div className="row justify-content-center align-items-center d-flex flex-wrap">
        
        {/* Profile Card */}
        <div className="col-md-5 col-12 mb-4 px-3 text-center">
          <motion.div 
            onClick={() => setIsFlippedProfile(!isFlippedProfile)} 
            className="flip-card"
          >
            <motion.div 
              className="flip-card-inner" 
              animate={{ rotateY: isFlippedProfile ? 180 : 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Front Side */}
              <motion.div className="flip-card-front card">
                <div className="card-body d-flex align-items-center justify-content-center">
                  <p className="fs-4 text-white">Tap to See My Profile🔄</p>
                </div>
              </motion.div>

              {/* Back Side - Profile Info */}
              <motion.div className="flip-card-back card text-black">
                <div className="card-body text-center">
                  <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="rounded-circle mx-auto d-block mt-2"
                    style={{ width: "180px", height: "180px", objectFit: "cover", border: "3px solid white" }}
                  />
                  <h2 className="card-title mt-3">Mohammed Musharraf</h2>
                  <h5 className="card-subtitle mt-3 mb-2 text-black">MERN Stack Developer</h5>
                  <p className="text-black fs-5 mt-3">Xine Technology Solutions</p>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>

        {/* Skills Card */}
        <div className="col-md-5 col-12 mb-4 px-3 text-center">
          <motion.div 
            onClick={() => setIsFlippedSkills(!isFlippedSkills)} 
            className="flip-card"
          >
            <motion.div 
              className="flip-card-inner" 
              animate={{ rotateY: isFlippedSkills ? 180 : 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Front Side */}
              <motion.div className="flip-card-front">
                <p className="fs-4 mt-5">Tap to See My Skills🔄</p>
              </motion.div>

              {/* Back Side - Skills Info */}
              <motion.div className="flip-card-back">
                <div className="card text-white">
                  <div className="card-body text-center">
                    <div className="text-start">
                      <h6 className="mt-3 text-black fw-bold">Technical Skills</h6>
                      <strong className="fw-normal text-black">MERN:</strong>
                      <span className="badge bg-dark ms-2">MongoDB</span>
                      <span className="badge bg-dark ms-2">Express.js</span>
                      <span className="badge bg-dark ms-2">React.js</span>
                      <span className="badge bg-dark ms-2">Node.js</span>

                      <div className="mt-2">
                        <strong className="fw-normal text-black">Databases:</strong>
                        <span className="badge text-white ms-2" style={{ backgroundColor: "#2c6e49" }}>MySQL</span>
                        <span className="badge text-white ms-2" style={{ backgroundColor: "#2c6e49" }}>MongoDB</span>
                      </div>

                      <div className="mt-2">
                        <strong className="fw-normal text-black">Programming Languages:</strong>
                        <span className="badge text-white ms-2" style={{ backgroundColor: "#006494" }}>Java</span>
                        <span className="badge text-white ms-2" style={{ backgroundColor: "#006494" }}>JavaScript</span>
                        <span className="badge text-white ms-2" style={{ backgroundColor: "#006494" }}>Python</span>
                      </div>

                      <div className="mt-2">
                        <strong className="fw-normal text-black">Data Visualization Tools:</strong>
                        <span className="badge text-white ms-2" style={{ backgroundColor: "#ff9f1c" }}>Power BI</span>
                      </div>

                      <h6 className="mt-3 text-black fw-bold">Soft Skills</h6>
                      <span className="badge text-white me-2" style={{ backgroundColor: "#2f4550" }}>Communication</span>
                      <span className="badge text-white me-2" style={{ backgroundColor: "#2f4550" }}>Teamwork</span>
                      <span className="badge text-white me-2" style={{ backgroundColor: "#2f4550" }}>Time Management</span>
                      <span className="badge text-white me-2" style={{ backgroundColor: "#2f4550" }}>Adaptability</span>
                      <span className="badge text-white" style={{ backgroundColor: "#2f4550" }}>Problem Solving</span>
                    </div>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default BioAndResume;
