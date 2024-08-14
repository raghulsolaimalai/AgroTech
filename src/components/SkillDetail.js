// import React from 'react';
// import { Container, Row, Col, Card, Button, ListGroup, Image } from 'react-bootstrap';
// import { useParams, Link } from 'react-router-dom';
// import '../App.css';

// const SkillDetail = () => {
//   const { skillId } = useParams();

//   const skillData = {
//     'ai': {
//       title: 'Artificial Intelligence',
//       description: 'Explore the fascinating world of Artificial Intelligence and its applications.',
//       image: '/images/detail2.jpg',
//       syllabus: [
//         { week: 1, topic: 'Introduction to AI', details: 'Overview of AI, its history, and applications.' },
//         { week: 2, topic: 'Machine Learning', details: 'Fundamentals of machine learning algorithms and techniques.' },
//         { week: 3, topic: 'Deep Learning', details: 'Introduction to neural networks and deep learning frameworks.' },
//         { week: 4, topic: 'Natural Language Processing', details: 'Techniques for processing and analyzing human language data.' },
//       ],
//       instructor: 'Dr. Jooe',
//       ratings: 4.8,
//       reviews: 132,
//     },
//     'pc-building': {
//       title: 'PC Building',
//       description: 'Learn how to build a PC from scratch with detailed guides and tips.',
//       image: '/images/detail1.jpg',
//       syllabus: [
//         { week: 1, topic: 'Introduction to PC Building', details: 'Understanding PC components and their functions.' },
//         { week: 2, topic: 'Selecting Components', details: 'Choosing the right components based on performance needs.' },
//         { week: 3, topic: 'Assembling PC', details: 'Step-by-step guide to assembling your PC.' },
//         { week: 4, topic: 'Troubleshooting', details: 'Common issues and solutions during and after assembly.' },
//       ],
//       instructor: 'janath',
//       ratings: 4.7,
//       reviews: 89,
//     },
//     'hypnosis': {
//       title: 'Hypnosis',
//       description: 'Explore the fascinating world of Hypnosis.',
//       image: '/images/detail3.jpg',
//       syllabus: [
//         { week: 1, topic: 'Introduction to Hypnosis', details: 'Overview of Hypnosis.' },
//         { week: 2, topic: 'Fundamentals of Hypnosis', details: 'Fundamentals of hypnosis techniques.' },
//         { week: 3, topic: 'Hypnotic Inductions and Deepening Techniques', details: 'Various methods to induce and deepen hypnosis.' },
//         { week: 4, topic: 'Therapeutic Applications of Hypnosis', details: 'Using hypnosis for therapeutic purposes.' },
//       ],
//       instructor: 'Dr. Zodiac',
//       ratings: 4.8,
//       reviews: 132,
//     },
//   };

//   const skill = skillData[skillId] || { title: 'Skill Not Found', syllabus: [], description: 'No information available.', image: '' };

//   return (
//     <Container className="mt-4 skill-detail-container">
//       <Row className="mb-4">
//         <Col md={4}>
//           <Image src={skill.image} fluid rounded className="skill-detail-image" />
//         </Col>
//         <Col md={8}>
//           <h2 className="skill-detail-title">{skill.title}</h2>
//           <p className="skill-detail-description">{skill.description}</p>
//           <h4>Instructor:</h4>
//           <p>{skill.instructor}</p>
//           <h4>Ratings:</h4>
//           <p>{skill.ratings} ({skill.reviews} reviews)</p>
//           <Link to={`/enroll/${skillId}`}>
//             <Button variant="primary">Enroll Now</Button>
//           </Link>
//         </Col>
//       </Row>

//       <Row>
//         <Col md={12}>
//           <Card className="skill-detail-card">
//             <Card.Body>
//               <h4>Syllabus:</h4>
//               <ListGroup variant="flush">
//                 {skill.syllabus.map((item, index) => (
//                   <ListGroup.Item key={index}>
//                     <strong>Week {item.week}: {item.topic}</strong>
//                     <p>{item.details}</p>
//                   </ListGroup.Item>
//                 ))}
//               </ListGroup>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default SkillDetail;
