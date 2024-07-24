//Items.js
import React from 'react';
import '../css/Items.css';
import '../css/SearchBar.css';
import SearchBar from './SearchBar'; 
import { useState } from 'react';
import ToggleSwitch from '../components/ToggleSwitch';
const card = [
    {
      id: 1,
      image: "",
      info: "Chicken Briyani",
      price: 80,
      image: 'https://saihomefood.in/cdn/shop/products/n7_1000x1000_crop_center.jpg?v=1572348312',

    },
  
    {
      id: 3,
      image: "",
      info: "Chicken Kabab",
      price: 45,
      image: 'https://as2.ftcdn.net/v2/jpg/03/13/35/73/1000_F_313357375_eI3nubCLdKLGOIbgNU6oDurVWg0u7j4b.jpg',

    },
    {
        id: 4,
        image: "",
        info: "Chicken Sukka",
        price: 45,
        image: 'https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img,w_735/https://www.thetakeiteasychef.com/wp-content/uploads/2016/07/CS-Featured.jpg',

    },{id:5 ,info: 'Pani puri', price: '50.00', image: 'https://media.istockphoto.com/id/525416827/photo/pani-puri-golgappe-chat-item-india.jpg?s=612x612&w=is&k=20&c=7uwMbkrH4vJL5a-PkpOsvXApbU3THY5REMS2WAhBOq0='}
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
              <h3 style={{color:'white'}}>Price=₹{product.price}</h3>
             <ToggleSwitch/>
            </div>
          ))}
        </div>
        </div>
      </>
    );
  }