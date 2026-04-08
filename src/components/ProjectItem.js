import React from "react";
import { FiGithub, FiExternalLink } from 'react-icons/fi';

function ProjectItem({ image, name, liveLink, githubLink }) {
  return (
    <div className="projectItem glass-card">
      <div className="project-image-wrapper">
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <div className="project-overlay">
          <div className="project-links">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noreferrer" className="project-icon-link" title="GitHub">
                <FiGithub />
              </a>
            )}
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noreferrer" className="project-icon-link" title="Live Demo">
                <FiExternalLink />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="project-details">
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default ProjectItem;