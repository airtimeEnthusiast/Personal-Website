// src/Components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaInstagram, FaLinkedin, FaYoutube, FaFileAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
    return (
      <header className="navbar">
        <div className="header-top">
          <h1 className="name">Austin Wright</h1>
          <div className="social-icons">
            <a href="https://www.youtube.com/@D00rHandleMedia" target="_blank" rel="noopener noreferrer" className="icon">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/awstin_write/profilecard/?igsh=eWVjYzdiZnhlYTdo" target="_blank" rel="noopener noreferrer" className="icon">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/austin-wright/" target="_blank" rel="noopener noreferrer" className="icon">
              <FaLinkedin />
            </a>
            <a href="https://your-resume-link.com" target="_blank" rel="noopener noreferrer" className="icon">
            <FaFileAlt />
            </a>
            <a href="tel:4088883144" target="_blank" rel="noopener noreferrer" className="icon">
              <FaPhone />
            </a>
            <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer" className="icon">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <nav className="nav-container">
          <ul className="nav-list">
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item dropdown">
              <span>Projects</span>
              <ul className="dropdown-menu">
                <li><Link to="/projects/programming">Programming</Link></li>
                <li><Link to="/projects/3dmodeling">3D Modeling</Link></li>
                <li><Link to="/projects/other">Other</Link></li>
              </ul>
            </li>
            <li className="nav-item"><Link to="/about">About</Link></li>
            <li className="nav-item"><Link to="/contact">Contact</Link></li>
            <li className="nav-item dropdown">
              <span>Vacation Trips</span>
              <ul className="dropdown-menu">
                <li><Link to="/vacation/2021">2021</Link></li>
                <li><Link to="/vacation/2022">2022</Link></li>
                <li><Link to="/vacation/2023">2023</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Navbar;