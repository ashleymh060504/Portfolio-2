import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: 'FFCDB2' }} variant="dark">
      <Container>
        <Navbar.Brand href="#" style={{ color: '#6D6875', fontWeight: 'bold' }}>
          Ashley Hayes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/about" style={{ color: '#6D6875' }}>About Me</Nav.Link>
            <Nav.Link as={Link} to="/portfolio" style={{ color: '#6D6875' }}>Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{ color: '#6D6875' }}>Contact</Nav.Link>
            <Nav.Link as={Link} to="/resume" style={{ color: '#6D6875' }}>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
