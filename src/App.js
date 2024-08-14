import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Testimonial from './components/Testimonial';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Register from './components/Register';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import ForgotPassword from './components/ForgotPassword';
import TermsAndConditions from './components/TermsAndConditions';
import SkillDetail from './components/SkillDetail';
import Purchase from './components/Purchase';
import SearchResults from './components/SearchResults';
import Cart from './components/CartPage'; // Import Cart component
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

const App = () => {
  // Cart state
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([
    { id: 1, title: 'Apple', description: '240.00 Rs/kg', image: '/images/class1.jpg', category: 'Fruits' },
    { id: 2, title: 'Orange', description: '160.00 Rs/kg', image: '/images/class2.jpg', category: 'Fruits' },
    { id: 3, title: 'Grapes', description: '80.00 Rs/kg', image: '/images/class3.jpg', category: 'Fruits' },
    { id: 4, title: 'Tomato', description: '40.00 Rs/kg', image: '/images/class7.jpg', category: 'Vegetables' },
    { id: 5, title: 'Potato', description: '50.00 Rs/kg', image: '/images/class6.jpg', category: 'Vegetables' },
    { id: 6, title: 'Pumpkin', description: '25.00 Rs/kg', image: '/images/class4.jpg', category: 'Vegetables' },
    { id: 7, title: 'Carrot', description: '70.00 Rs/kg', image: '/images/class5.jpg', category: 'Vegetables' },
    { id: 8, title: 'Fresh Milk', description: '40.00 Rs/Liter', image: '/images/class8.jpg', category: 'Dairy' },
    { id: 9, title: 'Eggs', description: '6.00 Rs/Unit', image: '/images/class9.jpg', category: 'Poultry' },
    { id: 10, title: 'Pista', description: '100.00 Rs/kg', image: '/images/class10.jpg', category: 'Nuts' },
    { id: 11, title: 'Dry Green Pea', description: '90.00 Rs/kg', image: '/images/class11.jpg', category: 'Pulses' },
    { id: 12, title: 'Chilli Powder', description: '35.00 Rs/kg', image: '/images/class12.jpg', category: 'Spices' },
    { id: 13, title: 'Organic Tomato', description: '70.00 Rs/kg', image: '/images/class13.jpg', category: 'Organic Products' }
  ]);

  // Function to handle cart operations
  const handleIncreaseQuantity = (productId) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      newCart[productId] = (newCart[productId] || 0) + 1;
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
      return newCart;
    });
  };

  return (
    <Router>
      <Navbar />
      <Container className="my-4">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/testimonials" element={<Testimonial />} />
          {/* <Route path="/skills/:skillId" element={<SkillDetail />} /> */}
          <Route path="/products/:category" component={Products} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/cart" element={<Cart products={products} cart={cart} handleIncreaseQuantity={handleIncreaseQuantity} handleDecreaseQuantity={handleDecreaseQuantity} />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;



