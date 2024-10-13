import './Destination.css'; // Import custom CSS file

import React from 'react';
import mypic from '../photos/templateOne.jpeg'; // Correct import of image
import mypics from '../photos/templateTwo.jpeg';
import mypices from '../photos/templateThree.jpeg';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Destination = () => {
  return (
    <Container className="mt-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="text-primary">Welcome to the CV Maker!</h1>
        <p className="lead text-white">
          Build a professional resume in minutes with customizable templates and step-by-step guidance.
        </p>
      </div>

      {/* About CV Maker Section */}
      <Row className="mb-5">
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>About Our CV Maker</Card.Title>
              <Card.Text>
                Our CV Maker is an easy-to-use tool that helps you create professional resumes 
                without any hassle. Whether you're a fresh graduate or an experienced professional, 
                you can tailor your CV to highlight your strengths.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Why Choose Our CV Maker?</Card.Title>
              <Card.Text>
                - Easy to use, step-by-step guidance <br />
                - Multiple customizable templates <br />
                - Export your CV in PDF format <br />
                - Suitable for all industries
              </Card.Text>
              <Button variant="primary">Get Started</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Resume Templates Section */}
      <div className="text-center mb-5">
        <h2 className="text-warning">Explore Our Resume Templates</h2>
        <p className="text-white">
          Choose from a variety of templates designed to meet the needs of different industries and job levels.
        </p>
      </div>

      {/* Template Features Section */}
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={mypic} /> {/* Corrected image reference */}
            <Card.Body>
              <Card.Title>Modern Template</Card.Title>
              <Card.Text>
                A clean, modern design perfect for professionals in creative and tech industries.
              </Card.Text>
              <Button variant="info">Use This Template</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={mypics} />
            <Card.Body>
              <Card.Title>Classic Template</Card.Title>
              <Card.Text>
                A timeless design that's ideal for job seekers in traditional industries.
              </Card.Text>
              <Button variant="info">Use This Template</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={mypices} />
            <Card.Body>
              <Card.Title>Creative Template</Card.Title>
              <Card.Text>
                Perfect for showcasing your skills and experience with a touch of personality.
              </Card.Text>
              <Button variant="info">Use This Template</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Call to Action Section */}
      <div className="text-center mt-5 mb-5">
        <h2 className="text-success">Start Building Your CV Today!</h2>
        <p className="text-white">Creating a resume has never been easier. Choose a template, fill in your details, and download your CV.</p>
        <Button variant="success" size="lg">Build My CV Now</Button>
      </div>
    </Container>
  );
};

export default Destination;
