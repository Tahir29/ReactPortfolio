import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";
import { menu } from "../../utils/MenuData";
import ThemeToggle from "../ThemeToggle";
import "./Header.scss";

function Header() {
  // Manage the expanded state of the Navbar
  const [expanded, setExpanded] = useState(false);
  const handleToggle = () => setExpanded(!expanded); // Toggle between expand and collapse
  const handleLinkClick = () => setExpanded(false); // Collapse the Navbar when a Link is clicked

  return (
    <div className="custom__header">
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        fixed="top"
        className="navbar-default stroke"
        expanded={expanded} // Control the expanded state
        onToggle={handleToggle} // Handle toggling manually
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <div className="logo">
              <p>
                <span className="initial">T</span>
                <span className="hiddenn">
                  <span className="name">ahir</span>
                </span>
                <span className="initial">K</span>
                <span className="hiddenn">
                  <span className="name">utty</span>
                </span>
              </p>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleToggle} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {menu.map((item, index) => (
                <Link
                  key={index}
                  activeClass={item.state}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={200}
                  className={item.name}
                  title={item.title}
                  onClick={handleLinkClick} // Collapse the navbar when clicked
                >
                  {item.title}
                </Link>
              ))}
            </Nav>
          </Navbar.Collapse>
          <ThemeToggle />
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
