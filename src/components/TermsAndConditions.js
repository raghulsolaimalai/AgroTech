import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const TermsAndConditions = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <h2 className="text-center">Terms and Conditions</h2>
          <p>Your terms and conditions content goes here.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default TermsAndConditions;
