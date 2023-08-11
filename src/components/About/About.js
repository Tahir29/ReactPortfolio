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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorem.
                  </p>
                  <p className="about-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi nemo quisquam doloribus nostrum. Tempora expedita,
                    amet odit voluptatum facilis illo! Veniam vitae nisi facilis
                    molestiae vero molestias nostrum consectetur maiores!
                  </p>
                  <p className="about-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi nemo quisquam doloribus nostrum. Tempora expedita,
                    amet odit voluptatum facilis illo! Veniam vitae nisi facilis
                    molestiae vero molestias nostrum consectetur maiores!
                  </p>

                  <Social />
                </div>
              </Col>
              <Col xl={6} lg={6} md={12} sm={12}>
                <div className="about-right">
                  <p className="about-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi nemo quisquam doloribus nostrum. Tempora expedita,
                    amet odit voluptatum facilis illo! Veniam vitae nisi facilis
                    molestiae vero molestias nostrum consectetur maiores!
                  </p>
                  <p className="about-content">
                  To build career in a growing organization, where I can get the opportunities to prove my abilities by accepting challenges, fulfilling the organizational goal and climb the ladder through continuous learning and commitment.
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
