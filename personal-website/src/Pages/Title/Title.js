// src/Pages/Title/Title.js
import React from 'react';
import './Title.css';
//import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Title = () => {
  return (
    <div className="title">
      <div className="content">
        <h1>Austin Wright</h1>
        <p>Software Developer | 3D Modeler | Tech Enthusiast</p>
      </div>
    </div>
  );
};

export default Title;


/*
<div className="social-icons">
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
*/