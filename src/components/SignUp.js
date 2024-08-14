import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [failedMessage, setFailedMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    return /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(password); // Corrected regex
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setFailedMessage('Invalid email address.');
      return;
    }

    if (!validatePassword(password)) {
      setFailedMessage('Password must be at least 8 characters long and include both letters and numbers.');
      return;
    }

    if (password !== confirmPassword) {
      setFailedMessage('Passwords do not match.');
      return;
    }

    if (!termsAccepted) {
      setFailedMessage('You must accept the terms and conditions.');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('http://localhost:8080/api/users/signup', {
        firstName,
        lastName,
        email,
        password,
      });

      console.log('Response data:', response.data);
      setSuccessMessage('Sign-up successful! Redirecting to login page...');
      setTimeout(() => {
        navigate('/login'); // Redirect to login page
      }, 1000);
    } catch (error) {
      if (error.response) {
        console.log('Error data:', error.response.data);
        setFailedMessage(error.response.data.message || 'Sign-up failed.');
      } else if (error.request) {
        console.error('Error request:', error.request);
        setFailedMessage('Sign-up failed: Network error or server not responding.');
      } else {
        console.error('Error message:', error.message);
        setFailedMessage('Sign-up failed: An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sign-body">
      <div className="sign-form-container">
        <form className="sign-form" onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <label htmlFor="firstName">
            First Name
            <input
              type="text"
              id="firstName"
              className="sign-input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              placeholder="Enter your first name"
            />
          </label>
          <label htmlFor="lastName">
            Last Name
            <input
              type="text"
              id="lastName"
              className="sign-input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              placeholder="Enter your last name"
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              className="sign-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              className="sign-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </label>
          <label htmlFor="confirmPassword">
            Confirm Password
            <input
              type="password"
              id="confirmPassword"
              className="sign-input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm your password"
            />
          </label>
          <label className="terms-checkbox">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
            />
            <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="sign-link"> I accept the terms and conditions</a>.
          </label>
          <button type="submit" className="sign-button" disabled={loading}>
            {loading ? 'Loading...' : 'Sign Up'}
          </button>
          {successMessage && <p className="text-success">{successMessage}</p>}
          {failedMessage && <p className="text-danger">{failedMessage}</p>}
          <p className="sign-link">
            Already have an account? <Link to="/login" className="sign-link">Log in here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

