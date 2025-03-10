import React from "react";
import '../styles/index.css';
import githubLogo from '../assets/github-mark.jpeg';
import linkedinLogo from '../assets/LI-Logo.png';
import devLogo from '../assets/dev-black.png';

function Footer() {
  return (
    <footer>
      <p style={{color: '#FFB4A2'}}>&copy; 2025 Ashley Hayes<span> </span>
      <a href="https://github.com/ashleymh060504" target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} alt="GitHub Logo" style={{ width: '20px', marginLeft: '100px' }} />
      </a>
      <a href="https://www.linkedin.com/in/ashley-hayes-060504o09a06c08f04" target="_blank" rel="noopener noreferrer">
                <img src={linkedinLogo} alt="LinkedIn Logo" style={{ width: '60px', marginLeft: '25px' }} />
      </a>
      <a href="https://dev.to/ashley_hayes_542dc28e1f78" target="_blank" rel="noopener noreferrer">
                <img src={devLogo} alt="DEV Logo" style={{ width: '25px', marginLeft: '25px' }} />
      </a>
      </p>
      
    </footer>
  );
}

export default Footer;