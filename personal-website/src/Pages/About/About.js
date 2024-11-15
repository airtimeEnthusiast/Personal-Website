// src/Pages/About/About.js
import React from 'react';
import './About.css';
import { profilePic } from '../../index.ts';
import { aboutData, languages, frameworks } from './aboutData.ts';

const Section = ({ title, content }) => (
  <div className="resume-section">
    <h2>{title}</h2>
    {content}
  </div>
);

const SkillsList = ({ items, className }) => (
  <ul className="skills-list">
    {items.map((item, index) => (
      <a href={item.url} target="_blank" rel="noopener noreferrer" key={index}>
        <img
          className={className}
          title={item.title}
          src={item.icon}
          alt={item.title}
        />
      </a>
    ))}
  </ul>
);

const About = () => {
  return (
    <div className="about-container">


      <Section
        title="Summary"
        content={
          <div className="summary-section">
            <p className="summary-text">{aboutData.summary}</p>
            <img
              src={profilePic}
              alt="Profile"
              className="profile-picture"
            />
          </div>
        }
      />

      <Section title="Education" content={<p>{aboutData.education}</p>} />

      <Section
        title={aboutData.engineeringExperience.title}
        content={aboutData.engineeringExperience.experiences.map(
          (experience, index) => (
            <div className="experience" key={index}>
              <h3>{experience.title}</h3>
              <span className="experience-date">{experience.date}</span>
              <p>{experience.description}</p>
            </div>
          )
        )}
      />

      <Section
        title={aboutData.customerExperience.title}
        content={aboutData.customerExperience.experiences.map(
          (experience, index) => (
            <div className="experience" key={index}>
              <h3>{experience.title}</h3>
              <span className="experience-date">{experience.date}</span>
              <p>{experience.description}</p>
            </div>
          )
        )}
      />

      <Section
        title="Languages"
        content={<SkillsList items={languages} className="language-item" />}
      />

      <Section
        title="Skills"
        content={
          <ul className="skills-list">
            {aboutData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        }
      />

      <Section
        title="Frameworks"
        content={<SkillsList items={frameworks} className="framework-item" />}
      />
    </div>
  );
};

export default About;