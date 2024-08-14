import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

const AboutUs = () => (
  <div className="about-us-section">
    <Container>
      <Row className="my-5">
        <Col>
          <h1 className="about-us-heading">About Mélange Learning Platform</h1>
          <p className="about-us-text">
            Welcome to Mélange, your premier destination for comprehensive and hands-on learning experiences. At Mélange, we are dedicated to bridging the gap between theoretical knowledge and practical application, ensuring that our learners are fully equipped to excel in their chosen fields.
          </p>
          <p className="about-us-text">
            Our platform offers a wide array of up-to-date courses, professional certifications, and real-time projects designed to cater to all skill levels. Whether you are a beginner or a seasoned professional, Mélange is committed to providing top-notch education that empowers you to achieve your goals.
          </p>
          <p className="about-us-text">
            Join us today and embark on a journey of continuous improvement and dedicated service, as we help you unlock your true potential and pave the way for a successful career.
          </p>
        </Col>
      </Row>
      <Row className="my-5">
        <Col className="text-center">
          <h2 className="about-us-subheading">Our Mission</h2>
          <p className="about-us-text">
            To provide accessible, high-quality education that empowers individuals to achieve their personal and professional aspirations through innovative and engaging learning experiences.
          </p>
        </Col>
      </Row>
      <Row className="my-5">
        <Col lg={4} className="text-center mb-4 mb-lg-0">
          <div className="about-us-feature">
            <h3 className="about-us-feature-heading">Comprehensive Courses</h3>
            <p className="about-us-feature-text">
              Our diverse range of courses ensures that there is something for everyone, from beginners to advanced learners.
            </p>
          </div>
        </Col>
        <Col lg={4} className="text-center mb-4 mb-lg-0">
          <div className="about-us-feature">
            <h3 className="about-us-feature-heading">Professional Certification</h3>
            <p className="about-us-feature-text">
              Earn recognized certifications that validate your skills and enhance your professional credibility.
            </p>
          </div>
        </Col>
        <Col lg={4} className="text-center">
          <div className="about-us-feature">
            <h3 className="about-us-feature-heading">Real-Time Projects</h3>
            <p className="about-us-feature-text">
              Gain practical experience by working on real-time projects that prepare you for the real world.
            </p> 
          </div>
        </Col>
      </Row>
      <Row className="my-5 about-us-image-row">
        <Col className="text-center">
          <img src="/images/about.jpg" alt="About Us" className="about-us-image" />
        </Col>
      </Row>
    </Container>
  </div>
);

export default AboutUs;
