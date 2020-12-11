import React from "react";
import "./AboutMe.css";
import face from "./img/faceAboutMe.jpg";
import gl1 from "./img/gallery01.jpg";
import gl2 from "./img/gallery02.jpg";
import gl3 from "./img/gallery03.jpg";
import gl4 from "./img/gallery04.jpg";
import gl5 from "./img/gallery05.jpg";


export class AboutMe extends React.Component {
  render() {
    return (
      <div className="aboutMe">
        <div className="picture">
          <img className="aboutMePic" src={face} id="faceAboutMe" alt="faceAboutMe" />
        </div>
        <div className="aboutMeText" >
          <div className="aboutMeH">ABOUT ME</div>
          <div className="aboutMeH1">SHORT BIO</div>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <div className="aboutMeH1">INTERESTS</div>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <div className="aboutMeH1">WHY I DO WHAT I DO</div>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="row">
            <div className="column"><img src={gl1} alt="gl1" width="120" /></div>
            <div className="column"><img src={gl2} alt="gl2" width="120" /></div>
            <div className="column"><img src={gl3} alt="gl3" width="120" /></div>
            <div className="column"><img src={gl4} alt="gl4" width="120" /></div>
            <div className="column"><img src={gl5} alt="gl5" width="270" /></div>            
        </div>
      </div>
    );
  }
}
