// Develop a user registration and login form 
// with validation and error handling. This task assesses form handling and validation 
// skills

import React, { useState } from 'react';
import './Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Perform validation, e.g., check if the fields are not empty
    if (formData.name.trim() === '') {
      validationErrors.name = 'Username is required';
    }

    if (formData.password.trim() === '') {
      validationErrors.password = 'Password is required';
    }

    // If there are validation errors, set them in state
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Form is valid, you can perform further actions like sending data to a server
      // Reset errors
      setErrors({});

      // Your login logic here
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="login">
          <label htmlFor="name">Username</label> <br/>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="password">Password</label> <br/>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        <div>
          <br/>
          <button type="submit">Login </button>
        </div>
      </form>
      <div>
        <h6>or signup using</h6>
        <div className="social-icons">
          <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
          <FontAwesomeIcon icon={faGoogle} className="google-icon" />
        </div>
      </div>

     
    </div>
  );
}

export default Login;
