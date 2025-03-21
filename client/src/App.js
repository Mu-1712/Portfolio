import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/navbar.js'; // Ensure correct path & capitalization
import Home from './components/Home/Home.js';
import Service from './pages/Service/service.js';
import Projects from './pages/Projects/projects.js';
import Profile from './pages/Profile/profile.js'
import Contact from './pages/Contact/contact.js';
// import BioAndResume from './components/Cards/cards.js';
import React from "react";


const App = () => {
  return (
    <Router>
      {/* ✅ Navbar should be inside Router and have a fixed position */}
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} /> {/* 🚀 Now Contact page won't have BioAndResume */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
