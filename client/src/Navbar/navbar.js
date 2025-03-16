import { NavLink } from 'react-router-dom';
import "./navbar.css";
import React from "react";


const Navbar = () => {
  console.log("Navbar rendered!"); // Debugging log
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container-fluid d-flex justify-content-between align-items-center px-4">
        
        {/* Developer Quote on the Left */}
        <span className="navbar-brand text-light fw-bold" style={{ fontSize: "0.9rem", whiteSpace: "nowrap" }}>
  "Every great ✨feature✨ was once a stubborn😤 bug🐛 refusing🙅‍♂️ to die☠️."
</span>

        {/* Navbar Toggle Button (For Mobile View) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Navigation Links on the Right */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav d-flex gap-4">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/experience">Experience</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects">Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/resume">Resume</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
