import React from "react";
import "./Home.css";
import face from "./face03.jpg";

export class HomePage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="homePoza">
          <img className="pozaHome" src={face} id="face" alt="face" />
        </div>
        <div className="homeText">
          <p className="crs">
            Cristian <b>Vincze</b>
          </p>
          <div className="designer">DESIGNER</div>
          <p style={{ color: "white" }}>
            I am currently on a journey into the world of web development, using
            platforms and java script code to bring to life beautifull
            aplications. I also finished a class of User Experience Design (UXD)
            from Informal School of IT, I have graphic design experience, and a
            strong technical background, beeing a graduate of the Technical
            University of Cluj napoca (UTCN). I am a creative person and have a
            lot of attention to details. I like to participate at brainstorming
            sessions, I like to generate new ideas and make sketches, and I
            believe in my ability of solving problems. I think team work is a
            must in order for a team to succeed and to advance towards succes.
          </p>
        </div>
      </div>
    );
  }
}
