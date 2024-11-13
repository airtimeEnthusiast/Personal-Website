// src/Components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaInstagram, FaLinkedin, FaYoutube, FaGithub, FaFileAlt, FaPhone, FaEnvelope } from 'react-icons/fa';


// <li><Link to="/projects/Other">Other</Link></li>

const Navbar = () => {
    return (
      <header className="navbar">
        <div className="header-top">
        </div>
        <nav className="nav-container">
          <ul className="nav-list">
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item dropdown">
              <span>Projects</span>
              <ul className="dropdown-menu">
                <li><Link to="/projects/Coding">Coding</Link></li>
                <li><Link to="https://github.com/airtimeEnthusiast/Blender-Renders">3D Modeling</Link></li>
              </ul>
            </li>
            <li className="nav-item"><Link to="/">Roller Coasters</Link></li>
            <li className="nav-item"><Link to="/">Mountain Biking</Link></li>
          </ul>
        </nav>
        <div className="social-icons">
            <a href="https://www.linkedin.com/in/austin-wright/" target="_blank" rel="noopener noreferrer" className="icon">
              <FaLinkedin />
            </a>
            <a href="https://github.com/airtimeEnthusiast" target="_blank" rel="noopener noreferrer" className="icon">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/awstin_write/profilecard/?igsh=eWVjYzdiZnhlYTdo" target="_blank" rel="noopener noreferrer" className="icon">
              <FaInstagram />
            </a>
            <a href="https://your-resume-link.com" target="_blank" rel="noopener noreferrer" className="icon">
            <FaFileAlt />
            </a>
            <a href="https://www.youtube.com/@D00rHandleMedia" target="_blank" rel="noopener noreferrer" className="icon">
              <FaYoutube />
            </a>
            <a href="tel:4088883144" target="_blank" rel="noopener noreferrer" className="icon">
              <FaPhone />
            </a>
            <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer" className="icon">
              <FaEnvelope />
            </a>
          </div>
      </header>
    );
  };
  
  export default Navbar;