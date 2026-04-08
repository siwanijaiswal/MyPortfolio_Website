import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects-container section-container">
      <div className="section-header">
        <h4 className="section-subtitle">VISIT MY PROJECTS</h4>
        <h2 className="section-title">My <span className="gradient-text">Portfolio</span></h2>
      </div>
      
      <div className="project-grid">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem 
              key={idx}
              name={project.name} 
              image={project.image} 
              liveLink={project.liveLink} 
              githubLink={project.github} 
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
