import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { Link, NavLink, Router } from 'react-router';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="nav-links">
 
      </div>
    </nav>
  );
};

export default Navbar;