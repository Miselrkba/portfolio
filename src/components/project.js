import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class Project extends Component {
  render() {
    return (
      <Fade bottom>
        <div className="project">
          <a href={this.props.url} target="_blank" rel="noopener noreferrer">
            <img src={this.props.imageSrc} alt={this.props.title}></img>
          </a>
          <h1>{this.props.title}</h1>
          <span>{this.props.service}</span>
        </div>
      </Fade>
    );
  }
}


export default Project;
