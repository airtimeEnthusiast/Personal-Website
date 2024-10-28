 // src/Pages/Projects.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Projects = () => {
  const { category } = useParams();

  return (
    <div>
      <h1>Projects - {category}</h1>
      <p>Here you can describe the {category} projects.</p>
    </div>
  );
};

export default Projects;