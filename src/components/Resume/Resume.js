import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "../Button/Button";
import Skill from "../Skill/Skill";
import { education, experience } from "../../utils/ResumeData";
import "./Resume.scss";

const Resume = () => {
  return (
    <section id="resume" className="section__resume">
      <Container>
        <Row className="justify-content-center">
          <Col xl={6} lg={6} md={12} sm={12} xs={11}>
            <div className="resume experience">
              <div className="resume__title">
                <span>experience</span>
              </div>
              <ListGroup>
                {experience.map((item, index) => {
                  return (
                    <ListGroup.Item key={index}>
                      <div className="resume__info">
                        <h5>{item.designation}</h5>
                        <span>
                          {item.company} <br /> {item.duration}
                        </span>
                        <p>{item.desc}</p>
                      </div>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </div>
          </Col>
          <Col xl={6} lg={6} md={12} sm={12} xs={11}>
            <div className="resume education">
              <div className="resume__title">
                <span>education</span>
              </div>
              <ListGroup>
                {education.map((item, index) => {
                  return (
                    <ListGroup.Item key={index}>
                      <div className="resume__info">
                        <h5>{item.qualification}</h5>
                        <span>{item.marks}</span>
                        <p>{item.name}</p>
                        <p>{item.desc}</p>
                      </div>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </div>
            <Col xl={12} sm={12}>
              <div className="CVButton">
                <Button
                  to="/TAHIR__KUTTY.pdf"
                  title="Download CV"
                  className="btn-dark btn-small"
                  target="_blank"
                  download
                >
                  <span>Download CV</span>
                </Button>
              </div>
            </Col>
            <Col xl={12} sm={12}>
              <Skill />
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Resume;
