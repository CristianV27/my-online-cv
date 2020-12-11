import React from "react";
import "./Resume.css";

export class Resume extends React.Component {
  render() {
    return (
      <div className="resume">
        <div className="rsLeft">
          <div className="rsTitle">PROFESSIONAL EXPERIENCE</div>
          <div className="rsCompany">2018 - Present | Seko Sieta</div>
          <div className="rsJob">Technical Documentation Specialist</div>
          <div className="rsText">
            <p>Instructions manual design</p>
            <p>
              3D renderings for different customers in order to make a
              personalized offer
            </p>
            <p>Graphic design for the product labels</p>
            <p>
              Photo-manipulation for different offers for clients, to offer a
              glimpse of the product in the customers company colors
            </p>
          </div>
          <div className="rsCompany">2010 - 2018 | DocEssensis</div>
          <div className="rsJob">Layouter / Graphic Designer</div>
          <div className="rsText">
            <p>
              Layout-ing different projects from Imprimerie Centrale du
              Luxembourg, a Luxembourg based typography that has the main
              contractor the United Nations, along with several European banks.
            </p>
            <p>
              In charge of all the projects that had arabic and hindu languages.
            </p>
            <p>Designing several brochures, books, statistic magazines.</p>
            <p>
              In charge of designing all the charts that were needed for most of
              the team projects.
            </p>
            <p>
              Corect, edit or photo-manipulate different picture and photographs
              for the main purpose of the project.
            </p>
          </div>
          <div className="rsCompany">2009 - 2010 | Auchan Cluj</div>
          <div className="rsJob">Decorator</div>
          <div className="rsText">
            <p>Receciving orders on prints that are needen in the store</p>
            <p>Designing and printing them, finishing touches, placing them</p>
            <p>Other visuals that were needed in the store</p>
          </div>
          <div className="rsCompany">2008 - 2009 | Kantor Impex</div>
          <div className="rsJob">Print Operator</div>
          <div className="rsText">
            <p>Received images under tiff format, prepare for DTP printing</p>
            <p>Setting up the machine, finalizing the print</p>
            <p>
              Manually applying and creating the print job on different surfaces
            </p>
          </div>
        </div>
        <div className="rsMiddle">
          <div className="rsTitle">PROFESSIONAL TRAININGS</div>
          <div className="rsCompany">2020 | INFORMAL SCHOOL OF IT</div>
          <div className="rsJob">Web Development | Java Script</div>
          <div className="rsText">
            <p>
              During this class, I’ve learned and implemented in a project,
              knowledge about research, design thinking, usability, user
              interviews, user research techniques, interaction design,
              information architecture, and learned about different guidelines
              from big companies.
            </p>
          </div>
          <div className="rsCompany">2018 | INFORMAL SCHOOL OF IT</div>
          <div className="rsJob">User Experience Design</div>
          <div className="rsText">
            <p>
              During this class, I’ve learned to build the front-end of an
              application, using the latest standards. I've learned basic
              programing knowledge. I've learned how to code in JavaScript, and
              also the use of React framework
            </p>
          </div>
          <div className="rsTitle">LANGUAGES</div>
          <div className="rsJob">ENGLISH</div>
          <meter max="450" value="400" title="GB"></meter>
          <p></p>
          <div className="rsJob">HUNGARIAN</div>
          <meter max="450" value="150" title="GB"></meter>
          <div className="rsJob">GERMAN</div>
          <meter max="450" value="100" title="GB"></meter>
        </div>
        <div className="rsRight">
          <div className="rsTitle">EDUCATION</div>
          <div className="rsCompany">
            2009 - 2011 | Technical University of Cluj Napoca
          </div>
          <div className="rsJob">Masters Degree - Industrial Design</div>
          <div className="rsText">
            <p>
              Advanced studies in the field of industrial design, research and
              development, marketing and adverstising, brainstorming sessions,
              different techniques at implementing ideeas into production.
            </p>
          </div>
          <div className="rsCompany">2010 | HAMK University</div>
          <div className="rsJob">Erasmus scholarship</div>
          <div className="rsText">
            <p>
              Spent s semester in a foreign country, at a mechanical engineering
              university in Finland, learnd a lot about production techniques,
              mechanical engineering design, research and development.
            </p>
          </div>
          <div className="rsCompany">
            2004 - 2009 | Technical University of Cluj Napoca
          </div>
          <div className="rsJob">Bachelors Degree - Industrial Design</div>
          <div className="rsText">
            <p>
              Studies in the field of industrial design, research and
              development, marketing and adverstising, brainstorming sessions,
              different techniques at implementing ideeas into production. Basic
              knowledge in the field of research and development in the
              mechanical engineering department.
            </p>
          </div>
          <div className="rsCompany">
            2000 - 2004 | Iuliu Maniu Technical College
          </div>
          <div className="rsJob">Computer Science High School</div>
          <div className="rsText">
            <p>
              Learned about basic programing, algorithms, pseudo-code, used
              different softwares for media editing.
            </p>
          </div>
          <div className="rsTitle">SKILLS & ABILITIES</div>
            <div className="skills">
                <mark> Photoshop</mark>
                <mark> Lightroom</mark>
                <mark> Illustrator</mark>
                <mark> InDesign</mark>
                <mark> PremierPro</mark>
                <mark> Keyshot</mark>
                <mark> 3D Max</mark>
                <mark> SolidWorks</mark>
                <mark> Office</mark>

            </div>

          

        </div>
      </div>
    );
  }
}
