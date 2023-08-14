import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Social from "../Social/Social";
import "./About.scss";

const About = () => {
  return (
    <section id="about" className="section__about">
      <Container>
        <Row className="justify-content-center">
          <Col xxl={10} xl={9} lg={9} md={12} sm={12} xs={10}>
            <Row>
              <Col xl={6} lg={6} md={12} sm={12}>
                <div className="about-left">
                  <p className="about-content">
                    Hello, I'm Tahir Kutty, an individual with a passion for technology and a drive to excel.
                  </p>
                  <p className="about-content">
                    With a Bachelor's degree in Commerce, I embarked on a dynamic journey that took me from the world of Technical Support Associate (BPO) to the realm of UI Development.
                  </p>
                  <p className="about-content">
                    My professional journey has been diverse, transitioning from the fast-paced environment of a Call Centre, where I honed my communication and problem-solving skills, to the creative landscape of UI Development, where I thrive on turning ideas into user-friendly digital experiences.
                  </p>

                  <Social />
                </div>
              </Col>
              <Col xl={6} lg={6} md={12} sm={12}>
                <div className="about-right">
                  <p className="about-content">
                    I'm more than just my professional roles - I'm a dedicated individual who's relentlessly focused on achieving goals. My determination and unwavering commitment push me forward, regardless of the challenges I encounter. I believe that every experience, whether success or setback, contributes to my growth.
                  </p>
                  <p className="about-content">
                    When I'm not immersed in coding or perfecting user interfaces, I'm often found exploring new technologies, expanding my skill set, and keeping a finger on the pulse of the ever-evolving tech world. My journey continues, as I strive to not only meet but exceed my aspirations.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
