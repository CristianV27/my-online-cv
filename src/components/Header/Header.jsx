import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import cv from "./cv.png";

class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
        <img className="cvDown" src={cv}  alt="cv" />
          <button onClick={this.props.closePopup} className="closeBtn" >close</button>
        </div>
      </div>
    );
  }
}

export class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

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
            <button className="navButton">HOBBIES</button>
          </Link>
          <Link to="/contact">
            <button className="navButton">CONTACT</button>
          </Link>
          <Link to="/download">
            <button
              className="navButtonCV"
              onClick={this.togglePopup.bind(this)}
            >
              DOWNLOAD CV
            </button>
            {this.state.showPopup ? (
              <Popup text="Close Me" closePopup={this.togglePopup.bind(this)} />
            ) : null}

            {/* <button className="navButtonCV">DOWNLOAD CV</button> */}
          </Link>
        </div>
      </header>
    );
  }
}
