import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import myImage from '../photos/First.gif'; // Import your image

const Header = () => {
  // Styling for the background image
  const style = {
    backgroundImage: `url(${myImage})`,
    backgroundSize: 'cover', // Cover the entire container
    backgroundPosition: 'center', // Center the image
    height: '100vh', // Set the height to half of the viewport height
    width: '100%', // Full width
    display: 'flex', // Flexbox for centering content
    alignItems: 'center', // Center vertically
    justifyContent: 'center', // Center horizontally
    color: 'black', // Text color
    textAlign: 'center', // Center text
  };

  return (
    <>
      {/* Full-width image section */}
      <div className="container-fluid p-0">
        <div style={style}>
          <h1>Welcome to My Photos</h1>
          <p>Enjoy the beautiful CV TEMPLATE!</p>
        </div>
      </div>

      {/* Main content section */}
      <Container className="mt-5 text-center">
        <h1 className="text-primary">Create Your CV Easily!</h1>
        <p className="lead text-white">
          Fill out your details below to create a professional CV in just minutes!
        </p>
        
        {/* Cards Section */}
        <Row className="mt-4">
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Step 1: Personal Information</Card.Title>
                <Card.Text>
                  Enter your name, contact number, and email to get started.
                </Card.Text>
                <Button variant="primary">Fill Personal Info</Button>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Step 2: Skills & Experience</Card.Title>
                <Card.Text>
                  Add your skills and work experience to showcase your qualifications.
                </Card.Text>
                <Button variant="primary">Add Skills & Experience</Button>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Step 3: Download Your CV</Card.Title>
                <Card.Text>
                  Once completed, download your CV as a PDF for easy sharing.
                </Card.Text>
                <Button variant="primary">Download CV</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        {/* Call to Action Section */}
        <div className="mt-4 mb-5">
          <h2 className="text-secondary">Why Create a CV?</h2>
          <p className="text-white">
            A well-structured CV increases your chances of landing your dream job. 
            Start crafting your professional image today!
          </p>
          <Button variant="success" size="lg" href="/signUp">Get Started</Button>
        </div>
      </Container>
    </>
  );
};

export default Header;
