// src/Pages/Home/Home.js
import React from 'react';
import './Home.css';
import profilePic from './assets/profile_image.jpg'; // Make sure you have a picture in your assets folder
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <img src={profilePic} alt="Profile" className="profile-picture" />
        <div className="summary">
          <h1>Welcome</h1>
          <p>
            Hi, I'm Austin Wright, a software developer passionate about creating innovative solutions. 
            With a strong background in iOS development, 3D modeling, and project management, I love taking 
            on new challenges and continuously expanding my skill set.
          </p>
        </div>
      </div>

      {/* Resume Sections */}
      <div className="resume-section">
        <h2>Experience</h2>
        <div className="experience">
          <h3>iOS Software Developer Intern - ANDBOUNDS</h3>
          <p>Led a front-end team, implementing industry-standard techniques and securing user logins with OAuth.</p>
        </div>
        <div className="experience">
          <h3>Project Engineer Intern - Largo Concrete</h3>
          <p>Monitored production quantities and assured regulatory compliance on construction projects.</p>
        </div>
      </div>

      <div className="resume-section">
        <h2>Projects</h2>
        <div className="project">
          <h3>iOS G-Force Analyzer App</h3>
          <p>An iOS app that uses onboard sensors to collect and analyze roller coaster ride data, generating detailed reports and integrating with third-party APIs.</p>
        </div>
        <div className="project">
          <h3>Disney Trivia App</h3>
          <p>A full-stack iOS app with a Swift UI, PostgreSQL database, and a RESTful back-end in Express.js.</p>
        </div>
      </div>

      <div className="resume-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>Swift & iOS Development</li>
          <li>3D Modeling & Animation</li>
          <li>Full-Stack Development</li>
          <li>Data Analytics & Visualization</li>
        </ul>
      </div>

      <div className="resume-section">
        <h2>Education</h2>
        <p>Bachelor of Science in Computer Science, Arizona State University</p>
      </div>
    </div>
  );
};
export default Home;