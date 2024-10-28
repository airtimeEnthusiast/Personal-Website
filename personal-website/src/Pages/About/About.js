// src/Pages/About/About.js
import React from 'react';
import './About.css';
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
      </div>

      {/* Resume Sections */}
      <div className="resume-section">
        <h2>Experience</h2>
        <div className="experience">
          <h3>Software Developer - ANDBOUNDS</h3>
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
export default About;