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
          <img
            className="aboutMePic"
            src={face}
            alt="faceAboutMe"
          />
        </div>
        <div className="aboutMeText">
          {/* <div className="aboutMeH">ABOUT ME</div> */}
          <div className="aboutMeH1">SHORT BIO</div>
          <p>
            I was born in a small town in Salaj county, in the north-west part
            of Romania, near the city of Cluj Napoca. As a little child, I liked
            to see how things work, how they function, what are the components,
            I liked to take the apart to see the insides, and after that to put
            them back together.
          </p>
          <p>
            During high-school, I discovered I have a tallent and an inclination
            to art, I started to get myself different craions and tools, and I
            started to experiment different styles of painting and drawing
          </p>
          <p>
            The need for knowledge grew higher, so I apllied at the local
            Technical College in my city, computer science field. I was lucky
            enough to have parrents that understood that investing into your
            child and suporting him was very beneficial with the rise of todays
            technology, so they got me my first computer, and so my life in the
            field of computers and engineering has started :D.
          </p>
          <div className="aboutMeH1">INTERESTS</div>
          <p>
            My interest are all related to art and technology. It doesn't matter
            if the topics are only art, or only technology, I am like an open
            book, and I have enough knowledge to entertain anyone in any basic
            life topic.
          </p>
          <div className="aboutMeH1">WHY I DO WHAT I DO</div>
          <p>
            I like to see what I do workes. The satisfaction, when you see a
            thing that you build works, is priceless. The satisfaction of
            knowing that you have created something valuable, or not ... id
            doesn't matter, it's priceless. In the end, it's all about helping
            you and the people around you, it's about knowing that you did
            something good for the human kind. Maybe it's not that big, small
            things also count, when added together.
          </p>
        </div>
        <div className="row">
          <div className="column">
            <img src={gl1} alt="gl1" width="120" />
          </div>
          <div className="column">
            <img src={gl2} alt="gl2" width="120" />
          </div>
          <div className="column">
            <img src={gl3} alt="gl3" width="120" />
          </div>
          <div className="column">
            <img src={gl4} alt="gl4" width="120" />
          </div>
          <div className="column">
            <img src={gl5} alt="gl5" width="270" />
          </div>
        </div>
      </div>
    );
  }
}
