import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";
import Navbar from "./Navbar";

class Header extends Component {
  

  render() {
    return (
      <div>
        <h1 className="heading-background">CREATIVE</h1>
        <header>
          <span className='logo'>
            <Fade bottom cascade>
              {data.name}
            </Fade>
          </span>
          <Navbar />
        </header>
        <Fade bottom>
          <p className="header-title">
            {data.headerTagline[0]}
            <br></br>
            {data.headerTagline[1]}
            <br></br>
            {data.headerTagline[2]}
            <br></br>
            <button className='button'>
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
