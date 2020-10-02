import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Typed from "react-typed";
import data from "../yourdata";
import Navbar from "./Navbar";

class Header extends Component {
  render() {
    return (
      <div>
        <h1 className="heading-background">CREATIVE</h1>
        <header>
          <span className="logo">
            <Fade bottom cascade>
              {data.name}
            </Fade>
          </span>
          <Navbar />
        </header>
        <Fade bottom>
          <p className="header-title">
            <Typed strings={[data.headerTagline[0]]}/>
            <br></br>
            <Typed
              strings={[data.headerTagline[1]]}
              typeSpeed={40} 
              backSpeed={20}
              loop
              smartBackspace
              shuffle={false}
              backDelay={1}
              fadeOut={false}
              fadeOutDelay={100}
              loopCount={0}
              showCursor
              cursorChar="|"
            />

            <br></br>
            
            <button className="button">
              <a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer">
                Contact
              </a>
            </button>
          </p>
        </Fade>
      </div>
    );
  }
}

export default Header;
