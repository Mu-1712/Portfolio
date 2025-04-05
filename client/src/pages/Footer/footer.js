import React from 'react';
import './footer.css';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 - About */}
        <div className="footer-column">
          <h3 className="footer-title">About Me</h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', fontFamily: "'Times New Roman', serif" }}>
            Full Stack Developer specializing in MERN stack with expertise in blockchain technology and data analysis.
          </p>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/muhammad-musharraf-374940212/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Mu-1712" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://twitter.com/Musharaf_12" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="mailto:md.musharaf0305@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer-column">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Technologies */}
        <div className="footer-column">
          <h3 className="footer-title">Technologies</h3>
          <ul className="footer-links">
            <li><a href="#react">React.js</a></li>
            <li><a href="#node">Node.js</a></li>
            <li><a href="#blockchain">Blockchain</a></li>
            <li><a href="#mongodb">MongoDB</a></li>
          </ul>
        </div>

        {/* Column 4 - Contact Info */}
        <div className="footer-column">
          <h3 className="footer-title">Contact Info</h3>
          <ul className="footer-links">
            <li><a href="mailto:md.musharaf0305@gmail.com">md.musharaf0305@gmail.com</a></li>
            <li><a href="tel:+919573651278">+91 9573651278</a></li>
            <li>Guntur, Andhra Pradesh</li>
            <li>India</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Muhammad Musharraf. All rights reserved.</p>
        <p>Designed & Developed with ❤️ by Muhammad Musharraf</p>
      </div>
    </footer>
  );
};

export default Footer;