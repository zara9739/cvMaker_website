import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import'./Contact.css';
const Contact = () => {
  return (
    <Container className="mt-5 text-center">
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="contact-info">
            <h1 className="text-primary">Contact Us</h1>
            <p className="text-white">We'd love to hear from you! Reach out to us through any of the following methods:</p>

            <p className="text-white">Phone: +123-456-7890</p>
            <p className="text-white">Email: contact@example.com</p>
            <p className="text-white">WhatsApp: +123-456-7890</p>

            <h4 className="text-white">Connect with Us</h4>
            <div className="d-flex flex-column align-items-center">
              <a href="https://www.facebook.com" className="text-primary mb-2">
                Facebook
              </a>
              <a href="https://www.instagram.com" className="text-danger mb-2">
                Instagram
              </a>
              <a href="https://www.twitter.com" className="text-info mb-2">
                Twitter
              </a>
              <a href="https://www.linkedin.com" className="text-primary">
                LinkedIn
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
