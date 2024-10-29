// src/Pages/About/About.js
import React from 'react';
import './About.css';
import { profilePic } from '../../index.ts';
import { aboutData, languages } from './aboutData.ts';

const About = () => {
    return (
      <div className="about-container">
        <div className="about-content">
          <div className="summary">
            <h1>Summary</h1>
            <p>{aboutData.summary}</p>
          </div>
          <img src={profilePic} alt="Profile" className="profile-picture" />
        </div>
  
        {/* Resume Sections */}
        <div className="resume-section">
          <h2>Education</h2>
          <p>{aboutData.education}</p>
        </div>
  
        <div className="resume-section">
          <h2>{aboutData.engineeringExperience.title}</h2>
          {aboutData.engineeringExperience.experiences.map((experience, index) => (
            <div className="experience" key={index}>
              <h3>{experience.title}</h3>
              <span className="experience-date">{experience.date}</span>
              <p>{experience.description}</p>
            </div>
          ))}
        </div>
  
        <div className="resume-section">
          <h2>{aboutData.customerExperience.title}</h2>
          {aboutData.customerExperience.experiences.map((experience, index) => (
            <div className="experience" key={index}>
              <h3>{experience.title}</h3>
              <span className="experience-date">{experience.date}</span>
              <p>{experience.description}</p>
            </div>
          ))}
        </div>
  
        <div className="resume-section">
          <h2>Skills</h2>
          <ul className="skills-list">
            {aboutData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="resume-section">
          <h2>Languages</h2>
          <ul className="skills-list">
          {languages.map((language, index) => (
            <img className='language-item' title={language.title} src={language.icon}/>
          ))}
        </ul>
        </div>

      </div>
    );
  };
  
  export default About;