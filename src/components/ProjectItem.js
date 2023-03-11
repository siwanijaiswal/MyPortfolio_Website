import React from "react";

function ProjectItem({ image, name, id, liveLink, githubLink }) {
  return (
    <div
      className="projectItem"
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
      <div className="projectlink">
        {
          liveLink && <a href={liveLink} target="_blank">
            <button class="btn_livedemo">Live Demo</button>
          </a>
        }
        {
          githubLink && <a href={githubLink} target="_blank">
            <button class="btn_github" >Github</button>
          </a>
        }
      </div>
    </div>

  );
}

export default ProjectItem;