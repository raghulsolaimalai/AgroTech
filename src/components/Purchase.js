// import React, { useState } from 'react';
// import { Container, Row, Col, Card, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
// import '../App.css'; 

// const Purchase = () => {
//   const [selectedPlan, setSelectedPlan] = useState('Monthly');
//   const [paymentDetails, setPaymentDetails] = useState({
//     cardNumber: '',
//     expiryDate: '',
//     cvv: ''
//   });

  
//   const handlePlanChange = (e) => {
//     setSelectedPlan(e.target.value);
//   };

  
//   const handlePaymentChange = (e) => {
//     const { name, value } = e.target;
//     setPaymentDetails(prevDetails => ({
//       ...prevDetails,
//       [name]: value
//     }));
//   };

 
//   const handlePurchase = (e) => {
//     e.preventDefault();
    
//     console.log('Purchasing Plan:', selectedPlan);
//     console.log('Payment Details:', paymentDetails);
    
//   };

//   return (
//     <Container className="purchase-container mt-4">
//       <Row>
//         <Col md={{ span: 8, offset: 2 }}>
//           <Card className="purchase-card">
//             <Card.Body>
//               <h2 className="text-center mb-4">Choose Your Subscription Plan</h2>
//               <Form onSubmit={handlePurchase}>
//                 <Form.Group controlId="planSelection">
//                   <Form.Label>Select Plan</Form.Label>
//                   <Form.Control as="select" value={selectedPlan} onChange={handlePlanChange}>
//                     <option value="Monthly">Monthly - $9.99</option>
//                     <option value="Yearly">Yearly - $99.99</option>
//                   </Form.Control>
//                 </Form.Group>

//                 <h3 className="mt-4">Payment Details</h3>
//                 <InputGroup className="mb-3">
//                   <FormControl
//                     placeholder="Card Number"
//                     name="cardNumber"
//                     value={paymentDetails.cardNumber}
//                     onChange={handlePaymentChange}
//                     required
//                   />
//                 </InputGroup>
//                 <InputGroup className="mb-3">
//                   <FormControl
//                     placeholder="Expiry Date (MM/YY)"
//                     name="expiryDate"
//                     value={paymentDetails.expiryDate}
//                     onChange={handlePaymentChange}
//                     required
//                   />
//                 </InputGroup>
//                 <InputGroup className="mb-3">
//                   <FormControl
//                     placeholder="CVV"
//                     name="cvv"
//                     value={paymentDetails.cvv}
//                     onChange={handlePaymentChange}
//                     required
//                     type="password"
//                   />
//                 </InputGroup>

//                 <Button type="submit" variant="primary" className="w-100">Complete Purchase</Button>
//               </Form>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Purchase;
