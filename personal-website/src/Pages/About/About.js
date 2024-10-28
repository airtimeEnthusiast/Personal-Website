// src/Pages/About/About.js
import React from 'react';
import './About.css';
import profilePic from './assets/profile_image.jpg';
const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
      <div className="summary">
          <h1>Summary</h1>
          <p>
          Recent Computer Science graduate with experience in software development, data structures, 
          and algorithms. Hands-on experience in software development, data processing, and backend systems, 
          with projects utilizing Swift, Python, C++, Java, and JavaScript. A motivated learner with a commitment
           to developing technical skills and contributing to a collaborative team environment.
          </p>
        </div>
      <img src={profilePic} alt="Profile" className="profile-picture" />
      </div>

      {/* Resume Sections */}

      <div className="resume-section">
        <h2>Education</h2>
        <p>Bachelor of Science in Computer Science, Arizona State University</p>
      </div>
      
      <div className="resume-section">
        <h2>Engineering Experience</h2>
        <div className="experience">
          <h3>Software Developer - DataAnnotation</h3>
          <p>Utilized DataAnnotation tools and platforms to label and tag data for machine learning and AI applications.</p>
        </div>
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
        <h2>Customer Experience</h2>
        <div className="experience">
          <h3>Barista - Guest Services International</h3>
          <p>An iOS app that uses onboard sensors to collect and analyze roller coaster ride data, generating detailed reports and integrating with third-party APIs.</p>
        </div>
        <div className="experience">
          <h3>Waiter - Blue Line Pizza</h3>
          <p>A full-stack iOS app with a Swift UI, PostgreSQL database, and a RESTful back-end in Express.js.</p>
        </div>
        <div className="experience">
          <h3>Ride Operator - Six Flags Entertainment</h3>
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
    </div>
  );
};
export default About;