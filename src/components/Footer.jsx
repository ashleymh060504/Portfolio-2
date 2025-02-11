import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#FFCDB2', color: '#6D6875', padding: '1rem', marginTop: '5rem' }}>
      <Container className="text-center">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Ashley Hayes <a href="https://github.com/ashleymh060504">Github</a> <a href="https://www.linkedin.com/in/ashley-hayes-70654a261/">LinkedIn</a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
