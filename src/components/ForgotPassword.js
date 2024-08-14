import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col, Spinner } from 'reactstrap';
import '../App.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    
    setTimeout(() => {
      setLoading(false);
      setMessage('If an account with that email exists, you will receive a password reset email shortly.');
    }, 2000);
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <h2 className="text-center">Forgot Password</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email address"
              />
            </FormGroup>
            <Button type="submit" color="primary" block disabled={loading}>
              {loading ? <Spinner size="sm" /> : 'Reset Password'}
            </Button>
          </Form>
          {message && <p className="text-success text-center mt-3">{message}</p>}
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
