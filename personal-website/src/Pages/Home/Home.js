// src/Pages/Home/Home.js
import React from 'react';
import './Home.css';
import About from '../About/About';
import Title from '../Title/Title';

import { Parallax, ParallaxLayer } from '@react-spring/web'

const Home = () => {
  return (
    <div>
      <Title/>
      <About/>
    </div>
  );
};

export default Home;


/*
<div className="social-icons">
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
*/