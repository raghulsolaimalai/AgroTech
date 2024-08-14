import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Testimonial from './Testimonial';
import '../App.css';

const Home = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills([
      { id: 1, description: '', image: '/images/1.jpg', title: 'Fresh Market' },
      { id: 2, description: '', image: '/images/2.jpg', title: 'Direct into your hands' },
      { id: 3, description: '', image: '/images/3.jpg', title: 'Delicious Fruits' },
      { id: 4, description: '', image: '/images/4.jpg', title: 'Blue Berries' },
    ]);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container className="home-container">
      <div className="text-center my-4">
        <h2>Welcome to Cropins – Where Freshness Meets Convenience!</h2>
        <p> Empowering Farmers, Enriching Lives. Direct access to fresh, local produce at your fingertips.</p>
      </div>

      <Carousel className="skills-carousel">
        {skills.map(skill => (
          <Carousel.Item key={skill.id}>
            <img
              className="d-block w-100 carousel-image"
              src={skill.image}
              alt={skill.title}
            />
            <Carousel.Caption className="carousel-caption">
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <h3 className="my-4">Top Categories</h3>
      <Row className="category-row">
      {[
  { title: 'Juicy Fruits', image: '/images/category1.jpg', link: '/products/ai' },
  { title: 'Fresh Vegetables', image: '/images/category2.jpg', link: '/products/pc-building' },
  { title: 'Divine Pulse', image: '/images/category3.jpg', link: '/products/graphic-design' },
  { title: 'Luxurious Dairies', image: '/images/category4.jpg', link: '/products/hypnosis' },
  { title: 'Fresh Poultary', image: '/images/category5.jpg', link: '/products/excel' },
  { title: 'Savory Nuts', image: '/images/category6.jpg', link: '/products/data-science' },
  { title: 'Hot Spices', image: '/images/category7.jpg', link: '/products/taxidermy' },
  { title: 'Organic Products', image: '/images/category8.jpg', link: '/products/cryptozoology' }
].map((category, index) => (
  <Col md={6} lg={3} key={index}>
    <Card className="category-card">
      <Card.Img variant="top" src={category.image} className="category-image" />
      <Card.Body>
        <Card.Title>{category.title.toUpperCase()}</Card.Title>
        <Link to={category.link}>
          <Button variant="primary">View more Products</Button>
        </Link>
      </Card.Body>
    </Card>
  </Col>
))}

      </Row>

      <Testimonial />

      <Button 
        variant="primary" 
        className="scroll-to-top" 
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        Scroll to Top
      </Button>
    </Container>
  );
};

export default Home;
