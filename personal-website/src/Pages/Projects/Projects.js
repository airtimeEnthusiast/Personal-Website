// src/Pages/Projects.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { projectsData, Project } from './projectsData.ts';
import './Projects.css'
import { FaGithub } from 'react-icons/fa';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import background from '../../assets/homebackground.jpg'

const Projects = () => {
  const { category } = useParams();

  // Get the projects for the given category
  const projects: Project[] = projectsData[category] || [];

  return (
    <div>
      <Parallax pages={1.9}>
        <ParallaxLayer offset={0} speed={0.25} factor={3} style={{
          backgroundImage: `url(${background})`, // Correctly format the background image 
        }}
        />
        <ParallaxLayer offset={0} speed={1}>
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
        </ParallaxLayer>
      </Parallax>
    </div>

  );
};

export default Projects;