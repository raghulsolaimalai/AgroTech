import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaGlobe, FaShoppingCart } from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';
import '../App.css';

const Navbar = ({ cartCount }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [language, setLanguage] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/search-results');
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <nav className="navbar-custom">
      <Link to="/home" className="logo">
        <video className="logo-video" src="/images/logo.mp4" autoPlay loop muted />
      </Link>
      <div className="nav-links">
        <Link to="/Home">Home</Link>
        <Link to="/Products">Products</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
        <Link to="/admin/login">Admin Login</Link>
        <Link to="/cart">
          <FaShoppingCart className="cart-icon" />
          <span className="cart-badge">{cartCount}</span>
        </Link>
        {/* <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            <FaGlobe className="globe-icon" /> {language}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleLanguageChange('English')}>English</Dropdown.Item>
            <Dropdown.Item onClick={() => handleLanguageChange('Spanish')}>Spanish</Dropdown.Item>
            <Dropdown.Item onClick={() => handleLanguageChange('French')}>French</Dropdown.Item>
            <Dropdown.Item onClick={() => handleLanguageChange('German')}>German</Dropdown.Item>
            <Dropdown.Item onClick={() => handleLanguageChange('Chinese')}>Chinese</Dropdown.Item>
            <Dropdown.Item onClick={() => handleLanguageChange('Japanese')}>Japanese</Dropdown.Item>
            <Dropdown.Item onClick={() => handleLanguageChange('Tamil')}>Tamil</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
      </div>
      <form className="search-form" onSubmit={handleSearch}>
        <div className="search-input-group">
          <FaSearch className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </form>
    </nav>
  );
};

export default Navbar;
