import React from "react";
import dance01 from "./img/dance/dance01.jpg";
import dance04 from "./img/dance/dance04.jpg";
import dance06 from "./img/dance/dance06.jpg";
import dance07 from "./img/dance/dance07.jpg";
import foto01 from "./img/foto/01.jpg";
import foto02 from "./img/foto/02.jpg";
import foto03 from "./img/foto/03.jpg";
import foto04 from "./img/foto/04.jpg";
import foto05 from "./img/foto/05.jpg";
import mtb01 from "./img/mtb/mtb01.jpg";
import mtb02 from "./img/mtb/mtb02.jpg";
import mtb03 from "./img/mtb/mtb03.jpg";
import mtb05 from "./img/mtb/mtb05.jpg";
import snow01 from "./img/snow/snow01.jpg";
import snow02 from "./img/snow/snow02.jpg";
import snow03 from "./img/snow/snow03.jpg";

import "./Hobbies.css";

export class Hobbies extends React.Component {
  render() {
    return (
      <div className="hobbies">
        <div className="hbMainTitle">WE CAN TALK ABOUT... </div>

        <div className="hbRow">
          <div className="hbText">
            <p className="hbTitle">PHOTOGRAPHY</p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            </p>
          </div>
          <img src={foto01} alt="foto01" className="hbPhotos" />
          <img src={foto02} alt="foto02" className="hbPhotos" />
          <img src={foto03} alt="foto03" className="hbPhotos" />
          <img src={foto04} alt="foto04" className="hbPhotos" />
          <img src={foto05} alt="foto05" className="hbPhotos" />
        </div>

        <div className="hbRow">
          <img src={dance01} alt="dance01" className="hbPhotos" />
          <img src={dance04} alt="dance04" className="hbPhotos" />
          <img src={dance06} alt="dance06" className="hbPhotos" />
          <img src={dance07} alt="dance07" className="hbPhotos" />
          <div className="hbText">
            <p className="hbTitle">DANCE</p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            </p>
          </div>
        </div>

        <div className="hbRow">
          <div className="hbText">
            <p className="hbTitle">DOWN-HILL</p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            </p>
          </div>
          <img src={mtb01} alt="mtb01" className="hbPhotos" />
          <img src={mtb02} alt="mtb02" className="hbPhotos" />
          <img src={mtb03} alt="mtb03" className="hbPhotos" />
          <img src={mtb05} alt="mtb05" className="hbPhotos" />
        </div>

        <div className="hbRow">
          <img src={snow01} alt="snow01" className="hbPhotos" />
          <img src={snow02} alt="snow02" className="hbPhotos" />
          <img src={snow03} alt="snow03" className="hbPhotos" />
          <div className="hbText">
            <p className="hbTitle">SNOW-BOARDING</p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            </p>
          </div>
        </div>

      </div>
    );
  }
}
