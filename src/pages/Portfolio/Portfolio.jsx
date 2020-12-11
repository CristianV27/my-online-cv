import React from "react";
import "./Portfolio.css";
import pfLayout1 from "./img/pfLayout01.png";
import pfLayout2 from "./img/pfLayout02.png";
import pfLayout3 from "./img/pfLayout03.png";
import pfLogo from "./img/pfLogo.png";
import pfLogoFoto from "./img/pfLogoFoto.png";

export class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfolio">
        <div className="pfTitle">WEB DEVELOPMENT - HTML, CSS, JAVASCRIPT </div>
        <div className="pfWebD">
          <iframe
            className="webdev" title="webdev"
            src="https://cristianv27.github.io/HW---MoveThePlayer/"
          ></iframe>
          <div className="webdev"></div>
          <div className="webdev"></div>
        </div>
        <a href="https://www.dropbox.com/sh/2q1l9qw8y827xl3/AAAcYK0KBYr3R5d5XGFkom6sa?dl=0" className="showMore" target="blank">GitHub (school asignments)</a>

        <div className="pfTitle">GRAPHIC DESIGN | LAYOUT </div>
        <div className="pfLayout">
          <img src={pfLayout1} alt="pfLayout1" width="140" />
          <img src={pfLayout2} alt="pfLayout2" width="140" />
          <img src={pfLayout3} alt="pfLayout3" width="140" />
        </div>
        <a href="https://www.dropbox.com/sh/2q1l9qw8y827xl3/AAAcYK0KBYr3R5d5XGFkom6sa?dl=0" className="showMore" target="blank">Show more...</a>
        <div className="pfTitle">GRAPHIC DESIGN | LOGO </div>
        <div className="pfLogo"><img src={pfLogo} alt="pfLogo" width="240" /></div>
        <a href="https://www.dropbox.com/sh/9jaq19ui7oee03w/AACX--mQsRGaArqYoLD0b3oca?dl=0" className="showMore" target="blank">Show more...</a>
        <div className="pfTitle">PHOTOGRAPHY | EVENTS </div>
        <div className="pfLogo"><img src={pfLogoFoto} alt="pfLogoFoto" width="240" /></div>
        <a href="https://www.facebook.com/media/set/?vanity=FotoCristian27&set=a.2881203428561847" className="showMore" target="blank">Show more...</a>
        <div className="pfTitle">PHOTOGRAPHY | SHOOTINGS </div>
        <div className="pfLogo"><img src={pfLogoFoto} alt="pfLogoFoto" width="240" /></div>
        <a href="https://www.facebook.com/media/set/?vanity=FotoCristian27&set=a.653788421303370" className="showMore" target="blank">Show more...</a>
      </div>
    );
  }
}
