import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";

export class Header extends React.Component {
  render() {
    return (
      <header className="header"> 
        <div className="headerLeft">
          <Link to="/">
            <img src={logo} id="logoHome" width="35" alt="logo" />
          </Link>
          <div className="cristian">CRISTIAN VINCZE</div>
        </div>
        <div className="headerRight">
          <Link to="/about-me">
            <button className="navButton">ABOUT ME</button>
          </Link>
          <Link to="/resume">
            <button className="navButton">RESUME</button>
          </Link>
          <Link to="/portfolio">
            <button className="navButton">PORTFOLIO</button>
          </Link>
          <Link to="/hobbies">
            <button className="navButton">LET'S TALK ABOUT</button>
          </Link>
          <Link to="/contact">
            <button className="navButton">CONTACT</button>
          </Link>
          <Link to="/download">
            <button className="navButtonCV">DOWNLOAD CV</button>
          </Link>
        </div>
      </header>
    );
  }
}
