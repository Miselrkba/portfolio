import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";

class Contact extends Component {
 
  render() {
    return (
      <div>
        <h1>
          <Fade bottom cascade>
            {" "}
            Contact me
          </Fade>
        </h1>
        <Fade bottom>
          <div className="contact-content">
            <h1>
              Let’s create your next<br></br>
              <span className="amazing-color">experience together</span>
            </h1>
            <a href={`mailto:${data.contactEmail}`} className="email">
              {data.contactEmail}
            </a>
            <ul className='social'>
              {data.social.map((link, index) => (
                <li key={index}>
                    <button className='button social'>
                  <a target="_blank" rel="noopener noreferrer" href={link.url}>
                    {link.name}
                  </a>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </Fade>

        <span className="footer">Copyright © Michael Huna 2020</span>
      </div>
    );
  }
}

export default Contact;
