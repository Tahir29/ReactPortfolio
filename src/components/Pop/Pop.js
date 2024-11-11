import React, { useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
import "./Pop.scss";

const Pop = (props) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_phone: "",
    user_email: "",
    user_message: "",
    // user_companyName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_139lj8b",
        "template_ukfaviu",
        form.current,
        "kPe8s-2BJ0qysa02U"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            setShowSuccess(true);
            setFormData({
              user_name: "",
              user_phone: "",
              user_email: "",
              user_message: "",
              // user_companyName: "",
            });
            setTimeout(() => {
              setShowSuccess(false);
            }, 5000);
          }
        },
        (error) => {
          // console.log(error.text);
          alert("Kindly fill the correct details");
        }
      );
  };

  return (
    <Modal
      {...props}
      size="xl"
      dialogClassName="modal-full custom__modal"
      aria-labelledby="ContactUs"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="ContactUs">Let's grab a coffee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="justify-content-center">
            <Col xl={11} lg={11} md={12}>
              <Row>
                <Col xl={4} lg={4} md={12} sm={12}>
                  <p className="contact-modal-desc">
                    Looking forward to hearing from you. Let's arrange a chat
                    about our project
                  </p>
                </Col>
                <Col xl={8} lg={8} md={12} sm={12}>
                  <Form className="customForm" ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col xl={12} sm={12}>
                        <FloatingLabel
                          className="mb-3"
                          controlId="floatingName"
                          label="NAME"
                        >
                          <Form.Control
                            className="custom-input"
                            size="lg"
                            type="text"
                            placeholder="NAME"
                            name="user_name"
                            value={formData.user_name}
                            onChange={handleChange}
                            required
                          />
                        </FloatingLabel>
                      </Col>
                      <Col xl={6} lg={6} md={6} sm={12}>
                        <FloatingLabel
                          className="mb-3"
                          controlId="floatingMobile"
                          label="PHONE"
                        >
                          <Form.Control
                            className="custom-input"
                            size="lg"
                            type="number"
                            placeholder="PHONE"
                            name="user_phone"
                            value={formData.user_phone}
                            onChange={handleChange}
                            required
                          />
                        </FloatingLabel>
                      </Col>
                      <Col xl={6} lg={6} md={6} sm={12}>
                        <FloatingLabel
                          className="mb-3"
                          controlId="floatingEmail"
                          label="EMAIL ADDRESS"
                        >
                          <Form.Control
                            className="custom-input"
                            size="lg"
                            type="email"
                            placeholder="EMAIL ADDRESS"
                            name="user_email"
                            value={formData.user_email}
                            onChange={handleChange}
                            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                            required
                          />
                        </FloatingLabel>
                      </Col>
                      {/* <Col xl={6} lg={6} md={6} sm={12}>
                        <FloatingLabel
                          className="mb-3"
                          controlId="floatingConpany"
                          label="COMPANY NAME"
                        >
                          <Form.Control
                            className="custom-input"
                            size="lg"
                            type="text"
                            placeholder="COMPANY NAME"
                            name="user_companyName"
                            value={formData.user_companyName}
                            onChange={handleChange}
                            required
                          />
                        </FloatingLabel>
                      </Col> */}
                      <Col xl={12} sm={12}>
                        <FloatingLabel
                          className="mb-3"
                          controlId="floatingSubject"
                          label="HOW CAN I HELP?"
                        >
                          <Form.Control
                            as="textarea"
                            size="xl"
                            cols={30}
                            rows={8}
                            className="custom-input"
                            placeholder="HOW CAN I HELP?"
                            name="user_message"
                            value={formData.user_message}
                            onChange={handleChange}
                            required
                          />
                        </FloatingLabel>
                      </Col>
                      <Col xl={12} sm={12}>
                        <div className="text-center">
                          <button
                            type="submit"
                            value="Send"
                            className="button btn-effect btn-dark btn-small"
                          >
                            <span>Send</span>
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                  <p className={`success-message ${showSuccess ? "show" : ""}`}>
                    Message sent successfully!
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default Pop;
