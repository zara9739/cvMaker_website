import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap'; // Removed Row and Col


const SignUp = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    gender: '',
    skills: [],
    image: null,
    comments: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      // For handling checkbox (skills) input
      setFormData((prevData) => ({
        ...prevData,
        skills: checked
          ? [...prevData.skills, value]
          : prevData.skills.filter((skill) => skill !== value)
      }));
    } else if (type === 'file') {
      // For handling file input
      setFormData((prevData) => ({
        ...prevData,
        [name]: e.target.files[0]
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const validateForm = () => {
    // Basic form validation logic
    const { fname, lname, email, password, gender } = formData;
    if (!fname || !lname || !email || !password || !gender) {
      alert('Please fill in all required fields');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Process form submission here (e.g., API call, localStorage, etc.)
      alert('Sign Up Successful!');
      navigate(`/signin`, { state: formData });
    }
  };

  return (
    <Container className="mt-4 text-primary">
      <h2>Sign Up</h2>
      <Form onSubmit={handleSubmit}>

        {/* First Name */}
        <Form.Group controlId="fname" className="mb-3 text-white">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Last Name */}
        <Form.Group controlId="lname" className="mb-3 text-white">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Email */}
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

        {/* Password */}
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

        {/* Gender */}
        <Form.Group className="mb-3 text-white">
          <Form.Label>Gender</Form.Label><br />
          <Form.Check
            inline
            type="radio"
            label="Male"
            id="male"
            name="gender"
            value="male"
            checked={formData.gender === 'male'}
            onChange={handleChange}
            required
          />
          <Form.Check
            inline
            type="radio"
            label="Female"
            id="female"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Skills */}
        <Form.Group className="mb-3 text-white">
          <Form.Label>Skills</Form.Label><br />
          <Form.Check
            inline
            type="checkbox"
            label="HTML"
            id="html"
            name="skills"
            value="html"
            onChange={handleChange}
          />
          <Form.Check
            inline
            type="checkbox"
            label="CSS"
            id="css"
            name="skills"
            value="css"
            onChange={handleChange}
          />
          <Form.Check
            inline
            type="checkbox"
            label="JavaScript"
            id="js"
            name="skills"
            value="js"
            onChange={handleChange}
          />
        </Form.Group>

        {/* Image Upload */}
        <Form.Group controlId="image" className="mb-3 text-white">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control
            type="file"
            name="image"
            onChange={handleChange}
          />
        </Form.Group>

        {/* Comments */}
        <Form.Group controlId="comments" className="mb-3 text-white">
          <Form.Label>Comments</Form.Label>
          <Form.Control
            as="textarea"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows={3}
          />
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary" type="submit">Sign Up</Button>
      </Form>
    </Container>
  );
};

export default SignUp;
