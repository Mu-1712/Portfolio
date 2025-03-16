import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/navbar.js'; // Ensure correct path & capitalization
import Home from './components/Home/Home.js';
import Experience from './pages/Experience/Experience.js';
import Projects from './pages/Projects/projects.js';
import Resume from './pages/Resume/resume.js'
import Contact from './pages/Contact/contact.js';
import BioAndResume from './components/Cards/cards.js';
import React from "react";


const App = () => {
  return (
    <Router>
      {/* ✅ Navbar should be inside Router and have a fixed position */}
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<><Home /><BioAndResume /></>} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} /> {/* 🚀 Now Contact page won't have BioAndResume */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
