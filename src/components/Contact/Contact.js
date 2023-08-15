import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "../Button/Button";
import Pop from "../Pop/Pop";
import ReactGA from "react-ga";
import "./Contact.scss";

const Contact = () => {
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  const ContactBottomClickHandler = () => {
    ReactGA.event({
      category: "Get In Touch Bottom",
      action: "Get In Touch Bottom Button Clicked",
    });
  };

  return (
    <section id="contact" className="section__contact">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xl={9} lg={9} md={9} sm={12}>
            <div className="contact__wrapper">
              <div className="contact__wrapper--left">
                <div className="contact__content">
                  <p>
                    Got a project in mind, <br /> let's grab a coffee
                  </p>
                </div>
              </div>
              <div className="contact__wrapper--right">
                <div className="contact__button">
                  <Button
                    title="Get in touch"
                    className="btn-light btn-medium"
                    onClick={() => {
                      handleShow();
                      ContactBottomClickHandler();
                    }}
                  >
                    Get in touch
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Pop show={modalShow} onHide={handleClose} />
    </section>
  );
};

export default Contact;
