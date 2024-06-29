// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'; 
import logo  from '../img/sahyadri-college-of-enggineering-and-management-logo-108.jpg'
const Navbar = () => {
  return (
    <div className='Main-Div_navBar'>
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/"><img src={logo} alt='Logo'></img>Food court</NavLink>
      </div>
      <div className="navbar-links">
        <NavLink to="/" exact activeClassName="active">Home</NavLink>
        <NavLink to="/menu" activeClassName="active">Menu</NavLink>
        <NavLink to="/Orders" activeClassName="active">Orders</NavLink>
       
        <NavLink to="/Authentication" activeClassName="active">Login/SignUp</NavLink>
      
      </div>
    </nav></div>
  );
};

export default Navbar;
