import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "../Button/Button";
import { TypeAnimation } from 'react-type-animation';
import Pop from "../Pop/Pop";
import { Link } from "react-scroll";
import "./Home.scss";

const TextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        'Front End Developer.',
        1000,
        'Graphic Designer.',
        1000,
        'React JS Developer.',
        1000,   
        'Freelancer',
        1000,     
      ]}
      wrapper="span"
      speed={250}
      cursor={true}
      repeat={Infinity}
    />
  )
}

const Home = () => {

  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  return (
    <section id="home" className="section__main">
      <Container fluid>
        <Row>
          <Col xl={6} lg={6} md={12} sm={12}>
            <div className="main-info">
              <div>
                <span>Hello, I'm Tahir</span>
              </div>
              <h1>
                <span className="typeWriter">
                  <TextAnimation />
                </span>
              </h1>
              <h2>Designing and building user interfaces.</h2>
            </div>
          </Col>
          <Col xl={6} lg={6} md={12} sm={12} className="sm-me-0">
            <div className="main-bgImg">
              <div className="main-bgImg-img"></div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xl={2} lg={6} md={12} sm={12}>
            <div className="main-button">
              <Link
                to="portfolio"
                title="Explore My Work"
                smooth={true}
                offset={-60}
                duration={200}
                className="button btn-effect btn-light btn-large"
              >
                <span>Explore My Work</span>
              </Link>
              <Button
                title="Get in touch"
                className="btn-dark btn-large"
                onClick={handleShow}
              >
                Get in touch
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Pop show={modalShow} onHide={handleClose} />
    </section>
  );
};

export default Home;
