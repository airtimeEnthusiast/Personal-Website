 // src/Pages/Projects.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { projectsData, Project } from './projectsData.ts';

const Projects = () => {
  const { category } = useParams();

  // Get the projects for the given category
  const projects: Project[] = projectsData[category] || [];

  return (
    <div>
      <h1>Projects - {category}</h1>
      <p>Here you can explore the {category} projects:</p>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;