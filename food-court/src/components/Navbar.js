// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'; 

const Navbar = () => {
  return (
    <div className='Main-Div'>
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/">Canteen</NavLink>
      </div>
      <div className="navbar-links">
        <NavLink to="/" exact activeClassName="active">Home</NavLink>
        <NavLink to="/menu" activeClassName="active">Menu</NavLink>
        <NavLink to="/Orders" activeClassName="active">Orders</NavLink>
        <NavLink to="/about" activeClassName="active">About</NavLink>
        <NavLink to="/Authentication" activeClassName="active">Login/SignUp</NavLink>
      
      </div>
    </nav></div>
  );
};

export default Navbar;
