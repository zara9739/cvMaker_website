import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Get email from URL params and pre-fill the field
    const urlParams = new URLSearchParams(location.search);
    const emailFromUrl = urlParams.get('email');
    if (emailFromUrl) {
      setFormData((prevData) => ({
        ...prevData,
        email: emailFromUrl
      }));
    }
  }, [location.search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation or API call for sign-in here
    alert('Sign In Successful!');
    navigate('/dashboard'); // Redirect to dashboard or home page
  };

  return (
    <Container className="mt-4 text-primary">
      <h2>Sign In</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email" className="mb-3 text-white">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="password" className="mb-3 text-white">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="success" type="submit" href="/home">
          Sign In
        </Button>
      </Form>
    </Container>
  );
};

export default SignIn;
