import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <h1>Hi, I'm Muhammad Musharraf</h1>

      <p class="bio-container">
        A Passionate <strong>MERN Stack Developer</strong> 
        I specialize in developing 
        <strong> scalable, responsive, and user-friendly web applications</strong> that deliver seamless user experiences.
      </p>

      <p class="bio-container">
          With a strong grasp of <strong>front-end</strong> and <strong>back-end development</strong>, I enjoy turning ideas into reality with <strong>clean code</strong> and <strong>efficient architectures</strong>. While my expertise is in <strong>web development</strong>, I have <strong>basic knowledge of data analysis</strong> principles and am eager to enhance my skills in <strong>handling, interpreting, and utilizing data</strong> to build more powerful applications. Passionate about <strong>solving complex problems</strong> and creating <strong>impactful digital solutions</strong>, I see challenges as learning opportunities and remain committed to <strong>continuous growth</strong> in both <strong>development</strong> and <strong>data analysis</strong>.
      </p>

      <p class="mt-3 fs-4">
  <strong>Let’s collaborate and create something amazing together! 🚀</strong>
</p>


      <button className="cta-button">Scroll Down</button>
    </div>
  );
};

export default Home;