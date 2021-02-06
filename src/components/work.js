import React from 'react';
import Fade from 'react-reveal/Fade';
import Project from './Project';
import data from '../yourdata';

const Work = () => {
  return (
    <div>
      <h1 className="header-projects">
        <Fade bottom cascade>
          Projects.
        </Fade>
      </h1>
      <div className="work-content">
        {data.projects.map((project) => {
          return (
            <div key={project.id}>
              <Project
                key={project.id}
                title={project.title}
                service={project.service}
                imageSrc={project.imageSrc}
                url={project.url}
              />
              <button type="button" className="button link-button">
                <a
                  className="link-button-text"
                  target="_blank"
                  href={project.url}
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </button>
              <button type="button" className="button link-button">
                <a
                  className="link-button-text"
                  target="_blank"
                  href={project.gitUrl}
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
