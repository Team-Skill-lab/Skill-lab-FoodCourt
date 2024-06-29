//Items.js
import React from 'react';
import './Items.css'
import './SearchBar.css'
import SearchBar from './SearchBar'; 
import { useState } from 'react';
import ToggleSwitch from '../components/ToggleSwitch';
const card = [
    {
      id: 1,
      image: "",
      info: "Chicken Briyani",
      price: 80,
    },
    {
      id: 2,
      image: "",
      info: "Veg Briyani",
      price: 60,
    },
    {
      id: 3,
      image: "",
      info: "Chicken Kabab",
      price: 45,
    },
    {
        id: 4,
        image: "",
        info: "Chicken Sukka",
        price: 45,
    },
  ];
  
  export default function Items() {
    const [searchTerm, setSearchTerm] = useState('');
  
    
  
    const fun = () => {
      alert("Information Sent to counter!");
    };
  
    const filteredProducts = card.filter((product) =>
      product.info.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <>
<div className='Main-Items'>
        <SearchBar onSearch={setSearchTerm} /> {/* Add the SearchBar component here */}
        <div className='card-container'>
          {filteredProducts.map((product) => (
            <div key={product.id} className='card'>
              <h2>{product.info}</h2>
              <img src={product.image} alt="pro-image" />
              <p>{product.info}</p>
              <h3>Price=₹{product.price}</h3>
             <ToggleSwitch/>
            </div>
          ))}
        </div>
        </div>
      </>
    );
  }