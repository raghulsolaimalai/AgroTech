import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Table, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '' });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addProduct = async () => {
    try {
      const response = await axios.post('/api/products', newProduct);
      setProducts([...products, response.data]);
      setNewProduct({ name: '', price: '', category: '' });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const updateProduct = async (id, updatedProduct) => {
    try {
      await axios.put(`/api/products/${id}`, updatedProduct);
      setProducts(products.map(product => (product.id === id ? updatedProduct : product)));
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <Container fluid className="admin-dashboard">
      <Row className="mb-4">
        <Col>
          <h1 className="dashboard-title">Admin Dashboard</h1>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Card className="table-card">
            <Card.Header>
              <Card.Title>Products Management</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="formProductName">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  />
                </Form.Group>
                <Form.Group controlId="formProductPrice">
                  <Form.Label>Product Price</Form.Label>
                  <Form.Control
                    type="number"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                  />
                </Form.Group>
                <Form.Group controlId="formProductCategory">
                  <Form.Label>Product Category</Form.Label>
                  <Form.Control
                    type="text"
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                  />
                </Form.Group>
                <Button variant="primary" onClick={addProduct}>Add Product</Button>
              </Form>
              <Table responsive hover className="mt-4">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.category}</td>
                      <td>
                        <Button variant="warning" size="sm" className="mr-2" onClick={() => updateProduct(product.id, { ...product, price: product.price + 10 })}>Update</Button>
                        <Button variant="danger" size="sm" onClick={() => deleteProduct(product.id)}>Delete</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
