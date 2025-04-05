import React from 'react';
import './Home.css';
import BioAndResume from '../../pages/Profile/profile'; // Import the BioAndResume component
import Experience from '../../pages/Service/service';
import Contact from '../../pages/Contact/contact';
import Footer from '../../pages/Footer/footer';

const Home = () => {
  return (
    <div className="home-page">
      {/* Centered Heading */}
      <h1>Hi, I'm Muhammad Musharraf</h1>

      {/* Left-Aligned Content for Mobile, Centered for Tablets and Desktops */}
      <div className="bio-container">
        <p>
          A passionate <strong>MERN Stack Developer</strong>. With a strong grasp of <strong>front-end</strong> and <strong>back-end development</strong>,  
          I enjoy turning ideas into reality with <strong>clean code</strong> and <strong>efficient architectures</strong>.  
          While my expertise lies in <strong>web development</strong>, I have a <strong>basic knowledge of data analysis</strong>  
          principles and am eager to enhance my skills in <strong>handling, interpreting, and utilizing data</strong>  
          to build more powerful applications.  
        </p>

        <p className="mt-2 fs-3">
          <strong>Let’s collaborate and create something amazing together!</strong>
        </p>
      </div>

      {/* Center-Aligned Button */}
      <div className="button-container">
        <button className="cta-button">Download My Resume</button>
      </div>

      {/* Profile and Skills Section */}
      <BioAndResume />

      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;