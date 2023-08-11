import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProgressBar from "react-bootstrap/ProgressBar";
import Social from "../Social/Social";
import "./Skill.scss";

const Skill = () => {
  return (
    <section id="skill" className="section__skill">
      <Container fluid>
        <Row>
          <div className="skill__wrapper">
            <div className="skill__left">
              <img
                src="/images/DSCF0360.jpeg"
                alt="Skill"
                className="skill__left--img"
              />
            </div>
            <div className="skill__center">
              <Social />
            </div>
            <div className="skill__right">
              <div className="right__skills">
                <div className="skills skill-1">
                  <p>Photoshop</p>
                  <ProgressBar animated now={45} />
                </div>
                <div className="skills skill-2">
                  <p>Illustrator</p>
                  <ProgressBar animated now={45} />
                </div>
                <div className="skills skill-3">
                  <p>Figma</p>
                  <ProgressBar animated now={45} />
                </div>

                <div className="skills skill-4">
                  <p>Front End Development</p>
                  <ProgressBar animated now={45} />
                </div>

                <div className="skills skill-5">
                  <p>SEO</p>
                  <ProgressBar animated now={45} />
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Skill;
