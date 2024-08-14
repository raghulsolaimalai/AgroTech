import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills([
      { id: 1, title: 'Skill 1', description: 'Learn the basics of programming.', image: '/images/skill1.jpg' },
      { id: 2, title: 'Skill 2', description: 'Become a Pro Esports Gamer.', image: '/images/skill2.jpeg' },
      { id: 3, title: 'Skill 3', description: 'Combining photography and mindfulness.', image: '/images/skill3.jpg' },
    ]);
  }, []);

  return (
    <Container className="skills-container">
      <h2 className="text-center my-4">Our Skills</h2>
      <Row>
        {skills.map(skill => (
          <Col md={4} key={skill.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={skill.image} />
              <Card.Body>
                <Card.Title>{skill.title}</Card.Title>
                <Card.Text>{skill.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
