import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { Link, NavLink, Router } from 'react-router';
 

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="nav-links">
        <ul>
        <li><Link to="/">Home</Link></li> {/* Link to HomePage */}
          <li><Link to="/NaturePage">Nature and Recreation</Link></li> {/* Link to NaturePage */}
          <li><Link to="/food">Food and Beverages</Link></li> {/* Link to FoodPage */}
          <li><Link to="/contact">Contact</Link></li> {/* Link to ContactPage */}
          {/* <li><a href="#">Home</a></li>
          <li><a href="#">Nature and Recreation</a></li>
          <li><a href="FoodPage">Food and Beverages</a></li>
          <li><a href="#">contact</a></li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;