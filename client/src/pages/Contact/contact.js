import React from 'react';
import './contact.css'; // Import the CSS file
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import Icons
import { FaXTwitter } from "react-icons/fa6"; // Import X (Twitter) Icon

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Contact Card */}
      <div className="contact-card">
        <h1 className="contact-title">Let's Connect</h1>

        <p>
          <FaUser style={{ color: '#FF5733' }} /> <strong> Muhammad Musharraf</strong>
        </p>

        <p>
          <FaEnvelope style={{ color: '#3498db' }} />  
          <a href="mailto:md.musharaf0305@gmail.com" className="contact-email">
            md.musharaf0305@gmail.com
          </a>
        </p>

        <p>
          <FaPhone style={{ color: '#27ae60' }} /> +91-9573651278
        </p>

        <p>
          <FaMapMarkerAlt style={{ color: '#e74c3c' }} /> Guntur, Andhra Pradesh, India
        </p>

        {/* Social Media Links */}
        <div className="social-media">
  <h2>🌐 Connect with Me</h2>
  <div className="social-links-container">
    <a href="https://www.linkedin.com/in/muhammad-musharraf-374940212/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
      <FaLinkedin className="social-icon" /> LinkedIn
    </a>
    <a href="https://github.com/Mu-1712?tab=repositories" target="_blank" rel="noopener noreferrer" className="social-link github">
      <FaGithub className="social-icon" /> GitHub
    </a>
    <a href="https://x.com/Musharaf_12" target="_blank" rel="noopener noreferrer" className="social-link twitter">
      <FaXTwitter className="social-icon" /> X
    </a>
  </div>
</div>

        
      </div>

      {/* Anime Character */}
      <img src="/Redgoku.png" alt="Anime Character" className="anime-character" />
    </div>
  );
};

export default Contact;
