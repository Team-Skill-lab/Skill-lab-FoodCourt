// src/pages/Home.js
import React from 'react';
import '../css/Home.css';
import { NavLink } from 'react-router-dom';

import chef from '../img/main.png'
const Home = () => {
  return (
    <>
      <div className='main-Home'>
      <div className='Img-chef-div'>
      <img src={chef} className='Img-chef' alt="No img " />
     </div> 
      <div className='Info-Home'>
          
          <p className='Under-Text'> Time to Savor the flavor </p>
          <NavLink to="/menu" className='buttons-Home' activeClassName="active">Menu</NavLink>
        </div>
         
      </div>
    </>
  );
};

export default Home;
