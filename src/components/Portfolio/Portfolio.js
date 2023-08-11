import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { work } from "../../utils/PortfolioData";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section__portfolio">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xl={9} lg={9} md={11} sm={12}>
            <ListGroup>
              {work.map((item, index) => {
                return (
                  <ListGroup.Item key={index}>
                    <a
                      href={item.redirect}
                      className="portfolio__list"
                      rel="noreferrer"
                      target="_blank"
                      title={item.title}
                    >
                      <img
                        src={item.preview}
                        alt={item.title}
                        className="portfolio__list--image"
                      />
                      <div className="portfolio__list--content">
                        <p className="portfolio__list--content-title">
                          {item.title}
                        </p>
                        <p className="portfolio__list--content-desc">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
