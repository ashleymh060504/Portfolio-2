import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#bc9a93', width: '100%', position: 'relative' }} variant="light">
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: '#202328', fontWeight: 'bold' }}>
          Ashley Hayes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/about" style={{ color: '#202328' }}>About Me</Nav.Link>
            <Nav.Link as={Link} to="/portfolio" style={{ color: '#202328' }}>Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{ color: '#202328' }}>Contact</Nav.Link>
            <Nav.Link as={Link} to="/resume" style={{ color: '#202328' }}>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
