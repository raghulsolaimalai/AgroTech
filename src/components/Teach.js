// import React, { useState, useEffect } from 'react';
// import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import Testimonial from './Testimonial';
// import '../App.css';

// const Home = () => {
//   const [skills, setSkills] = useState([]);

//   useEffect(() => {
//     setSkills([
//       { id: 1, description: 'Learn the basics of programming.', image: '/images/1.jpg', title: 'Programming Basics' },
//       { id: 2, description: 'Become a Pro Esports Gamer.', image: '/images/2.jpg', title: 'Esports Gaming' },
//       { id: 3, description: 'Combining photography and mindfulness.', image: '/images/3.jpg', title: 'Photography & Mindfulness' },
//       { id: 4, description: 'berries.', image: '/images/4.jpg', title: 'blue berries' },
//     ]);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <Container className="home-container">
//       <div className="text-center my-4">
//         <h2>Welcome to Cropins – Where Freshness Meets Convenience!</h2>
//         <p> Empowering Farmers, Enriching Lives. Direct access to fresh, local produce at your fingertips.</p>
//       </div>

//       <Carousel className="skills-carousel">
//         {skills.map(skill => (
//           <Carousel.Item key={skill.id}>
//             <img
//               className="d-block w-100 carousel-image"
//               src={skill.image}
//               alt={skill.title}
//             />
//             <Carousel.Caption className="carousel-caption">
//               <h3>{skill.title}</h3>
//               <p>{skill.description}</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         ))}
//       </Carousel>

//       <h3 className="my-4">Top Categories</h3>
//       <Row className="category-row">
//         {[
//           { title: 'Juicy Fruits', image: '/images/category1.jpg', link: '/skills/ai' },
//           { title: 'Fresh Vegetables', image: '/images/category2.jpg', link: '/skills/pc-building' },
//           { title: 'Divine Organic Pulse', image: '/images/category3.jpg', link: '/skills/graphic-design' },
//           { title: 'Luxurious Dairies', image: '/images/category4.jpg', link: '/skills/hypnosis' },
//           { title: 'Farm-Fresh Poultary', image: '/images/category5.jpg', link: '/skills/excel' },
//           { title: 'Savory Artisan Nuts', image: '/images/category6.jpg', link: '/skills/data-science' },
//           { title: 'Hot Spices', image: '/images/category7.jpg', link: '/skills/taxidermy' },
//           { title: 'Organic Products', image: '/images/category8.jpg', link: '/skills/cryptozoology' }
//         ].map((category, index) => (
//           <Col md={6} lg={3} key={index}><br></br>
//             <Card className="category-card">
//               <Card.Img variant="top" src={category.image} className="category-image" />
//               <Card.Body>
//                 <Card.Title>{category.title.toUpperCase()}</Card.Title>
//                 {/* <Card.Text>Explore various products.</Card.Text> */}
//                 <Link to={category.link}>
//                   <Button variant="primary">View more Products</Button>
//                 </Link>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       <Testimonial />

//       <Button 
//         variant="primary" 
//         className="scroll-to-top" 
//         onClick={scrollToTop}
//         aria-label="Scroll to top"
//       >
//         Scroll to Top
//       </Button>
//     </Container>
//   );
// };

// export default Home;
