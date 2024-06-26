// src/pages/Home.js
import React from 'react';
import './Home.css'
import { NavLink } from 'react-router-dom';
import palavu from '../img/tawa-pulao-pulav-popular-street-food-mumbai-india-tawa-pulao-pulav-pilaf-pilau-indian-street-food-made-using-159850097.webp'
import biryani from '../img/hyderbadi-biriyani-1.jpg'
import idli from '../img/R (1).jpeg'
import dose from '../img/Masala-Dosa.jpg'
const Home = () => {
  return (<>
  <div className='main'>
    <div className='Info'>
      <p className='infotext'>
        Food<br/>
        For<br/>
        Thought

      </p>
      <p className='Under-Text'>Best Quality Food </p> 
      
      
      <NavLink to="/menu" className='buttons'activeClassName="active">Menu</NavLink>
         </div>
    <div className='Img'>
     
    </div>

  </div>
  </>)
};

export default Home;
