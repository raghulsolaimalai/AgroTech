
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col, InputGroup, InputGroupText, Spinner, FormFeedback } from 'reactstrap';
import { FaLock, FaEnvelope } from 'react-icons/fa';
import axios from 'axios';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [failedMessage, setFailedMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) => /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(password);

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

    setLoading(true);
    setFailedMessage('');
    setSuccessMessage('');

    try {
      const response = await axios.post('http://localhost:8080/api/users/admin/login', {
        email,
        password,
      });

      if (response.status === 200) {
        setSuccessMessage('Admin login successful! Redirecting to admin dashboard...');
        setTimeout(() => {
          navigate('/admin/dashboard');
        }, 1000);
      }
    } catch (error) {
      if (error.response) {
        setFailedMessage(error.response.data.message || 'Login failed.');
      } else {
        setFailedMessage('Login failed: Network error or server not responding.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="auth-page">
      <Row>
        <Col md={6} className="mx-auto">
          <h2 className="text-center mb-4">Admin Log In</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="email">Email</Label>
              <InputGroup>
                <InputGroupText><FaEnvelope /></InputGroupText>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  invalid={!validateEmail(email) && email !== ''}
                />
                <FormFeedback>Invalid email address.</FormFeedback>
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <InputGroup>
                <InputGroupText><FaLock /></InputGroupText>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                  invalid={!validatePassword(password) && password !== ''}
                />
                <FormFeedback>Password must be at least 8 characters long and include both letters and numbers.</FormFeedback>
              </InputGroup>
            </FormGroup>
            {failedMessage && <p className="text-danger">{failedMessage}</p>}
            {successMessage && <p className="text-success">{successMessage}</p>}
            <Button color="primary" type="submit" disabled={loading}>
              {loading ? <Spinner size="sm" /> : 'Log In'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminLogin;


