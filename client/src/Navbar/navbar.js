import { NavLink } from 'react-router-dom';
import "./navbar.css";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close menu on link click
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container-fluid d-flex justify-content-between align-items-center px-4">
        
        {/* Full Quote for Desktop & Tablets */}
        <span className="responsive-quote">
          "Every great ✨feature✨ was once a stubborn😤 bug🐛 refusing🙅‍♂️ to die☠️."
        </span>

        {/* "Codezenic" for Mobile View */}
        <span className="mobile-title"> Small fixes🛠️, big impact🚀. </span>

        {/* Desktop Navigation Links */}
        <div className="desktop-nav-links">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/profile">Profile</NavLink>
          <NavLink className="nav-link" to="/service">Service</NavLink>
          <NavLink className="nav-link" to="/projects">Projects</NavLink>
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </div>

        {/* Navbar Toggle Button (For Mobile View) */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Mobile Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <NavLink className="nav-link" to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink className="nav-link" to="/profile" onClick={closeMenu}>Profile</NavLink>
          <NavLink className="nav-link" to="/service" onClick={closeMenu}>Service</NavLink>
          <NavLink className="nav-link" to="/projects" onClick={closeMenu}>Projects</NavLink>
          <NavLink className="nav-link" to="/contact" onClick={closeMenu}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;