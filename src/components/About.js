import React from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

import image from '../images/portret06.jpg';

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h1>
          <Fade bottom cascade>
            About.
          </Fade>
        </h1>
        <Fade bottom>
          <p>{data.abouttext}</p>
        </Fade>
      </div>
      <img className="about-image" src={image} alt="about" />
    </div>
  );
};

export default About;
