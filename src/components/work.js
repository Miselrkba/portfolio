import React, { Component } from "react";
import Project from "./Project";
import Fade from "react-reveal/Fade";
import data from "../yourdata";

class Work extends Component {
 
  render() {
    return (
      <div>
        <h1 className="header-projects">
          <Fade bottom cascade>
            Projects.
          </Fade>
        </h1>
        <div className="work-content">
          {data.projects.map((project) => (
            <div key={project.id}>
            <Project
              key={project.id}
              title={project.title}
              service={project.service}
              imageSrc={project.imageSrc}
              url={project.url}
            ></Project>
            <button className='button link-button'>
              <a className='link-button-text'  target="_blank" href={project.url} rel="noopener noreferrer">
                Live Demo
              </a>
            </button>
            <button className='button link-button'>
              <a className='link-button-text'  target="_blank" href={project.gitUrl} rel="noopener noreferrer">
                GitHub
              </a>
            </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Work;
