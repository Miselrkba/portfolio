import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <nav>
      <ul className="navigation">
        <li>
          <Link
            className="link"
            activeClass="active"
            to="home"
            spy
            smooth
            offset={-70}
            duration={500}
            onClick={scrollToTop}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="link"
            activeClass="active"
            to="about"
            spy
            smooth
            offset={-70}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="link"
            activeClass="active"
            to="work"
            spy
            smooth
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="link"
            activeClass="active"
            to="contact"
            spy
            smooth
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
