import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-3">
      <Container className="text-center">
        <p>&copy; 2024 TravelBook. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
