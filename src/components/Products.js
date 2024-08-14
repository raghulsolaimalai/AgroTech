import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests
import '../App.css';

const Explore = () => {
  const [products, setProducts] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState({});
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }

      // Fetch recommendations (you may need to adapt this if you have a separate endpoint for recommendations)
      const recommendationsData = [
        { id: 1, title: 'Recommendation 1', image: '/images/class4.jpg' },
        { id: 2, title: 'Recommendation 2', image: '/images/class3.jpg' },
        { id: 3, title: 'Recommendation 3', image: '/images/class6.jpg' }
      ];
      setRecommendations(recommendationsData);
    };

    fetchData();
  }, []);

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = (productId) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      newCart[productId] = (newCart[productId] || 0) + 1;
      setCartCount(Object.values(newCart).reduce((acc, quantity) => acc + quantity, 0));
      return newCart;
    });
  };

  const handleDecreaseQuantity = (productId) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      if (newCart[productId] > 1) {
        newCart[productId] -= 1;
      } else {
        delete newCart[productId];
      }
      setCartCount(Object.values(newCart).reduce((acc, quantity) => acc + quantity, 0));
      return newCart;
    });
  };

  const handleIncreaseQuantity = (productId) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      newCart[productId] = (newCart[productId] || 0) + 1;
      setCartCount(Object.values(newCart).reduce((acc, quantity) => acc + quantity, 0));
      return newCart;
    });
  };

  const getCartCount = (productId) => {
    return cart[productId] || 0;
  };

  return (
    <Container className="explore-container mt-4">
      <h2 className="text-center mb-4">Products</h2>
      <div className="filter-buttons mb-4 text-center">
        <ButtonGroup>
          <Button variant={selectedCategory === 'All' ? 'primary' : 'secondary'} onClick={() => handleFilter('All')}>All</Button>
          <Button variant={selectedCategory === 'Fruits' ? 'primary' : 'secondary'} onClick={() => handleFilter('Fruits')}>Fruits</Button>
          <Button variant={selectedCategory === 'Vegetables' ? 'primary' : 'secondary'} onClick={() => handleFilter('Vegetables')}>Vegetables</Button>
          <Button variant={selectedCategory === 'Dairy' ? 'primary' : 'secondary'} onClick={() => handleFilter('Dairy')}>Dairy</Button>
          <Button variant={selectedCategory === 'Poultry' ? 'primary' : 'secondary'} onClick={() => handleFilter('Poultry')}>Poultry</Button>
          <Button variant={selectedCategory === 'Nuts' ? 'primary' : 'secondary'} onClick={() => handleFilter('Nuts')}>Nuts</Button>
          <Button variant={selectedCategory === 'Pulses' ? 'primary' : 'secondary'} onClick={() => handleFilter('Pulses')}>Pulses</Button>
          <Button variant={selectedCategory === 'Spices' ? 'primary' : 'secondary'} onClick={() => handleFilter('Spices')}>Spices</Button>
          <Button variant={selectedCategory === 'Organic Products' ? 'primary' : 'secondary'} onClick={() => handleFilter('Organic Products')}>Organic Products</Button>
        </ButtonGroup>
      </div>
      <Row>
        {products
          .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
          .map(product => (
            <Col md={4} key={product.id} className="mb-4">
              <Card className="product-card">
                <Card.Img variant="top" src={product.image} alt={product.name} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.price} Rs/kg</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    {getCartCount(product.id) > 0 ? (
                      <div className="quantity-controls d-flex align-items-center">
                        <Button variant="outline-secondary" onClick={() => handleDecreaseQuantity(product.id)}>-</Button>
                        <span className="mx-2">{getCartCount(product.id)}</span>
                        <Button variant="outline-secondary" onClick={() => handleIncreaseQuantity(product.id)}>+</Button>
                        <span className="ms-2 text-success">&#10004; Added To Cart</span> {/* Tick symbol */}
                      </div>
                    ) : (
                      <Button variant="primary" onClick={() => handleAddToCart(product.id)}>Buy Now</Button>
                    )}
                    <Button variant="light" className="cart-icon">
                      <span className="cart-badge">{cartCount}</span>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
      <h2 className="text-center mb-4">Recommended for You</h2>
      <Row>
        {recommendations.map(rec => (
          <Col md={4} key={rec.id} className="mb-4">
            <Card className="recommendation-card">
              <Card.Img variant="top" src={rec.image} alt={rec.title} />
              <Card.Body>
                <Card.Title>{rec.title}</Card.Title>
                <Link to={`/product/${rec.id}`}>
                  <Button variant="primary">View Recommendation</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Explore;
