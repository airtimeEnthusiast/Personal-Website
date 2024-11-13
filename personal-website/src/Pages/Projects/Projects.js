// src/Pages/Projects.js
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { projectsData, Project } from './projectsData.ts';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import background from '../../assets/homebackground.jpg';

const Projects = () => {
  const { category } = useParams();
  const projects: Project[] = projectsData[category] || [];
  const [pages, setPages] = useState(1.9);
  const projectsContainerRef = useRef(null);

  useEffect(() => {
    const updatePageCount = () => {
      if (projectsContainerRef.current) {
        const contentHeight = projectsContainerRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;

        // Calculate the new page count based on content height and viewport height
        const calculatedPages = Math.max(1, contentHeight / viewportHeight);
        setPages(calculatedPages);

        // Log for debugging
        console.log('Content Height:', contentHeight);
        console.log('Viewport Height:', viewportHeight);
        console.log('Calculated Pages:', calculatedPages);
      }
    };

    updatePageCount(); // Initial page count calculation

    // Recalculate on window resize
    window.addEventListener('resize', updatePageCount);
    return () => window.removeEventListener('resize', updatePageCount);
  }, [projects]);

  return (
    <div>
      <Parallax pages={pages}>
        <ParallaxLayer offset={0} speed={0.25} factor={3} style={{
          backgroundImage: `url(${background})`,
        }}
        />
        <ParallaxLayer offset={0} speed={1}>
          <div ref={projectsContainerRef} className="projects-container">
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

