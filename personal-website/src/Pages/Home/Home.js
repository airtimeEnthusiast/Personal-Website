// src/Pages/Home/Home.js
import React, { useEffect, useState } from "react";
import './Home.css';
import About from '../About/About';
import Title from '../Title/Title';
import background from './assets/homebackground.jpg'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const Home = () => {

  const [pages, setPages] = useState(1);
  useEffect(() => {
    const updatePages = () => {
      const isMobile = window.innerWidth <= 390;
      setPages(isMobile ? 2 : 1.5); // Adjust based on content size
    };

    updatePages(); // Initial calculation
    window.addEventListener("resize", updatePages);

    return () => window.removeEventListener("resize", updatePages);
  }, []);



  return (
    <div>
      <Parallax pages={pages}>
        <ParallaxLayer offset={0} speed={0.25} factor={3} style={{
          backgroundImage: `url(${background})`, // Correctly format the background image 
        }}
        />
        <ParallaxLayer offset={0} speed={1}>
          <Title />
        </ParallaxLayer>
        <ParallaxLayer offset={0.95} speed={1}>
          <About />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;


/*

 <ParallaxLayer offset={3.2} speed={2}>
          <About/>
        </ParallaxLayer>

<div className="social-icons">
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
*/