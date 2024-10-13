import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Cv.css';

const Cv = () => {
  const [formData, setFormData] = useState({
    contactNo: '',
    email: '',
    firstName: '',
    lastName: '',
    age: '',
    qualification: '',
    skills: '',
    experience: '',
  });

  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150');

  const handleImageUpload = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      setProfileImage(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., sending data to the server
    console.log('Form Submitted', formData);
  };

  return (
    <Container className="cv-section mt-4 text-info">
      <Row>
        {/* Left side for the image */}
        <Col md={4} className="text-center">
          <img id="profileImage" src={profileImage} alt="" className="uploaded-image" />
          <Form.Group controlId="imageUpload" className="form-group mt-3 text-info">
            <Form.Label>Upload Your Image</Form.Label>
            <Form.Control type="file" className="form-control-file" accept="image/*" onChange={handleImageUpload} />
          </Form.Group>
        </Col>

        {/* Right side for contact information */}
        <Col md={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3 text-info">
              <Form.Label column sm={2}>
                Contact No:
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="tel"
                  id="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  placeholder="Enter your contact number"
                  className="form-control-plaintext"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 text-info">
              <Form.Label column sm={2}>
                Email:
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="form-control-plaintext"
                />
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>

      {/* Left side for personal details */}
      <Row className="mt-4">
        <Col md={4} className="text-left">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 text-info">
              <Form.Label htmlFor="firstName">First Name</Form.Label>
              <Form.Control
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                className="single-line-input"
              />
            </Form.Group>

            <Form.Group className="mb-3 text-info">
              <Form.Label htmlFor="lastName">Last Name</Form.Label>
              <Form.Control
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                className="single-line-input"
              />
            </Form.Group>

            <Form.Group className="mb-3 text-info">
              <Form.Label htmlFor="age">Age</Form.Label>
              <Form.Control
                type="number"
                id="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter your age"
                className="single-line-input"
              />
            </Form.Group>

            <Form.Group className="mb-3 text-info">
              <Form.Label htmlFor="qualification">Qualification</Form.Label>
              <Form.Control
                type="text"
                id="qualification"
                value={formData.qualification}
                onChange={handleChange}
                placeholder="Enter your qualification"
                className="single-line-input"
              />
            </Form.Group>

            <Form.Group className="mb-3 text-info">
              <Form.Label htmlFor="skills">Skills</Form.Label>
              <Form.Control
                type="text"
                id="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="Enter your skills"
                className="single-line-input"
              />
            </Form.Group>

            <Form.Group className="mb-3 text-info">
              <Form.Label htmlFor="experience">Experience</Form.Label>
              <Form.Control
                as="textarea"
                id="experience"
                rows={3}
                value={formData.experience}
                onChange={handleChange}
                placeholder="Enter your experience"
                className="single-line-input"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              DownloadCV
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Cv;
