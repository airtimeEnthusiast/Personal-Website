// src/Components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFileAlt,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Close menu when a link is clicked
  };

  return (
    <header className="navbar">
      <div className="header-top">

        {/* Hamburger Icon */}
        <div className="nav-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Nav Containers */}
      <nav className={`nav-container ${isOpen ? 'active' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>

          {/* Nav Dropdown Projects */}
          <li className="nav-item dropdown">
            <span>Projects</span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/projects/Coding" onClick={closeMenu}>
                  Coding
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/airtimeEnthusiast/Blender-Renders"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}>
                  3D Modeling
                </a>
              </li>
            </ul>
          </li>

          {/* Nav Hobbies Projects */}
          <li className="nav-item dropdown">
            <span>Hobbies</span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/hobbies/roller-coasters" onClick={closeMenu}>
                  Roller Coasters  
                </Link>
              </li>
              <li>
                <Link to="/hobbies/mountain-biking" onClick={closeMenu}>
                  Mountain Biking 
                </Link>
              </li>
            </ul>
          </li>

        {/*}
          <li className="nav-item">
            <Link to="uploadphotos" onClick={closeMenu}>
              UploadPhotos
            </Link>
          </li>*/}

        </ul>
      </nav>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/austin-wright/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/airtimeEnthusiast"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/awstin_write/profilecard/?igsh=eWVjYzdiZnhlYTdo"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaInstagram />
        </a>
        <a
          href="https://drive.google.com/file/d/1Ky7B_WEVjAgHBU2sqLKrxpyJkqPaU3jW/view?usp=share_link"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaFileAlt />
        </a>
        <a
          href="https://www.youtube.com/@D00rHandleMedia"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaYoutube />
        </a>
        <a href="tel:4088883144" className="icon">
          <FaPhone />
        </a>
        <a href="mailto:your-email@example.com" className="icon">
          <FaEnvelope />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
