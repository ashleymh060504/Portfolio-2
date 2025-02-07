import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: 'FFCDB2' }} variant="dark">
      <Container>
        <Navbar.Brand href="#" style={{ color: '#6D6875', fontWeight: 'bold' }}>
          MyPortfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about" style={{ color: '#6D6875' }}>About</Nav.Link>
            <Nav.Link href="#projects" style={{ color: '#6D6875' }}>Projects</Nav.Link>
            <Nav.Link href="#contact" style={{ color: '#6D6875' }}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
