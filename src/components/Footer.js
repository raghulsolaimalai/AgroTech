import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../App.css';

const Footer = () => (
  <footer className="footer-custom py-4">
    <Container>
      <Row className="text-center text-md-left">
        <Col md={4} className="mb-4 mb-md-0">
          <h5 className="footer-heading">Contact Us</h5>
          <ul className="list-unstyled">
            <li><FaEnvelope /> <a href="mailto:support@example.com" className="footer-link">cropins@gmail.com</a></li>
            <li><FaPhone /> <a href="tel:+123456789" className="footer-link">+91 9360481316</a></li>
          </ul>
        </Col>
        <Col md={4} className="mb-4 mb-md-0">
          <h5 className="footer-heading">Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="/about" className="footer-link">About Us</a></li>
            <li><a href="/services" className="footer-link">Services</a></li>
            <li><a href="/terms-and-conditions" className="footer-link">Terms and Conditions</a></li>
            <li><a href="/privacy-policy" className="footer-link">Privacy Policy</a></li>
          </ul>
        </Col>
        <Col md={4}>
          <h5 className="footer-heading">Follow Us</h5>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
          </div>
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
          <Button variant="primary" className="mt-3" href="/feedback">Give Feedback</Button>
        </Col>
      </Row>
      <Row className="text-center mt-4">
        <Col>
          <p className="mb-0">&copy;2024 cropins. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
