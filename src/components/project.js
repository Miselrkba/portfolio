import React from 'react';
import Fade from 'react-reveal/Fade';

const Project = (props) => {
  const { url, imageSrc, title, service } = props;
  return (
    <Fade bottom>
      <div className="project">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={imageSrc} alt={title} />
        </a>
        <h1>{title}</h1>
        <span>{service}</span>
      </div>
    </Fade>
  );
};

export default Project;
