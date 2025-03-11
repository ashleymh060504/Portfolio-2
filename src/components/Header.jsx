import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import '../styles/index.css';

const Header = () => {
  const location = useLocation();

  const getLinkStyle = (path) => ({
    color: location.pathname === path ? 'white' : '#818895',
    fontWeight: location.pathname === path ? 'bold' : 'normal',
  });

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#202328', width: '100%', position: 'relative' }} variant="light">
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: '#bc9a93', fontWeight: 'bold', fontSize: '3rem' }}>
          Ashley Hayes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" style={getLinkStyle('/')}>About Me</Nav.Link>
            <Nav.Link as={Link} to="/portfolio" style={getLinkStyle('/portfolio')}>Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/contact" style={getLinkStyle('/contact')}>Contact</Nav.Link>
            <Nav.Link as={Link} to="/resume" style={getLinkStyle('/resume')}>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
