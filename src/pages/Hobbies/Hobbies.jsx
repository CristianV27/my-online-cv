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
              When I got my first camera, it was a bridge camera. Not a DSLR,
              but not a cheap camera either. I was on a work and travel program
              in the United States, so I had time to test it and felt in love
              with photography. This is an area in witch you find the limits of
              your equipment very fast, and need to get a little higher. So
              after a while I got my first DSLR. But the need for money to buy
              lenses increased, so I decided to shoot events to finance my
              hobby. Not a lot of my friends have this hobbie, so I can practice
              shooting them and their families.
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
              Do you rememver the time you were in the first grade and wanted to
              look cool in front of your classmates? I do! All of the cool kids
              went to this place where you could do extraculicular activities
              after school. I went also because, off course, all the cool kids
              went. I stopped at the dance room. At that time it was a
              folclorique dance curriculum, a lot of children were there, a good
              chance for me to make new friends and to get over my shiness. And
              I still do that to this day. Travelling the world and meating new
              people.
            </p>
          </div>
        </div>

        <div className="hbRow">
          <div className="hbText">
            <p className="hbTitle">DOWN-HILL</p>
            <p>
              The advantages of living in a small city between hills, is that
              you have access to those hills relatively easy. I had a city bike
              when I was a kid, used it to just go arround the city and go to my
              granparents. But when I first went on a hill and got down from
              there on my bike, I was hooked. Goy lucky enough to get a city
              mountain bike, and the little engineer inside me surfaced and
              prepared the mountain bike for down-hill. I still do that that
              till this day, but with a more suitable bike and on hills that
              have down-hill tracks.
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
              With the need for adrenaline from down-hill, in the winter I had
              do to something also. So I tried some winter sports, startes with
              skying, but it was not for me. Long story short, got a friend to
              borrow me snow-board, didn't even had boots, and went down a small
              hill. I was hooked :D. Since then, I got better and better, and
              started to roam my country in the winter time, to the slopes,
              trying to go in a different city each year.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
