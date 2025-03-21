import React from 'react';
import './contact.css';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {

  const handleEmailClick = () => {
    console.log("Email clicked"); // Debugging
    window.location.href = "mailto:md.musharaf0305@gmail.com";
  };

  const handlePhoneClick = () => {
    console.log("Phone clicked"); // Debugging
    window.location.href = "tel:+919573651278";
  };

  const openLink = (url) => {
    console.log("Social link clicked:", url); // Debugging
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title">Let's Connect</h1>

        <div className="contact-detail">
          <FaUser className="contact-icon user-icon" style={{ color: '#0b090a' }} />
          <strong>Muhammad Musharraf</strong>
        </div>

        <div className="contact-detail">
          <FaEnvelope className="contact-icon email-icon" style={{ color: '#800e13' }} />
          <button 
            onClick={handleEmailClick} 
            className="contact-email clickable"
            title="Click to send an email"
          >
            md.musharaf0305@gmail.com
          </button>
        </div>

        <div className="contact-detail">
          <FaPhone className="contact-icon phone-icon" style={{ color: '#03045e' }} />
          <button 
            onClick={handlePhoneClick} 
            className="contact-phone clickable"
            title="Click to call"
          >
            +91-9573651278
          </button>
        </div>

        <div className="contact-detail">
          <FaMapMarkerAlt className="contact-icon address-icon" style={{ color: '#d10000' }} />
          <span>Guntur, Andhra Pradesh, India</span>
        </div>

        <div className="social-media">
          <h2>🌐 Follow Me On</h2>
          <div className="social-links-container">
            <button 
              onClick={() => openLink("https://www.linkedin.com/in/muhammad-musharraf-374940212/")} 
              className="social-link linkedin clickable"
              title="Go to LinkedIn"
            >
              <FaLinkedin className="social-icon" style={{ color: '#03045e' }} /> LinkedIn
            </button>
            <button 
              onClick={() => openLink("https://github.com/Mu-1712?tab=repositories")} 
              className="social-link github clickable"
              title="Go to GitHub"
            >
              <FaGithub className="social-icon" style={{ color: '#000000' }} /> GitHub
            </button>
            <button 
              onClick={() => openLink("https://x.com/Musharaf_12")} 
              className="social-link twitter clickable"
              title="Go to X (Twitter)"
            >
              <FaXTwitter className="social-icon" style={{ color: '#000000' }} /> X
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;