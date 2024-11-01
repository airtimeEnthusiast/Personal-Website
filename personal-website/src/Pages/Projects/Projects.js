 // src/Pages/Projects.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { projectsData, Project } from './projectsData.ts';
import './Projects.css'
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const { category } = useParams();

  // Get the projects for the given category
  const projects: Project[] = projectsData[category] || [];

  return (
<div className="projects-container">
  <h1 className="project-title">Projects - {category}</h1>
  <ul>
    {projects.map((project) => (
      <div className="projects-content" key={project.id}>
        <li>
          <div className="title-icon-container">
            <h3 className="projects-title">{project.title}</h3>
            <div className="project_social-icons">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>
          <p className="description-container">{project.description}</p>
          <div className="tech-item-container">
            {project.technologies.map((tech, index) => (
              <img className="tech-item" src={tech} alt="icon" key={index} />
            ))}
          </div>
        </li>
      </div>
    ))}
  </ul>
</div>
  );
};

export default Projects;