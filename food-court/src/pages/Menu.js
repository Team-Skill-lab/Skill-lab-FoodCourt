import React, { useState, useEffect } from 'react';
import '../css/Menu.css';
import logo from '../img/menu125.png'
import axios from "axios"


const FoodMenu = () => {
  const [FoodData, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Data = await axios.get('http://localhost:8080/api/menus');
        console.log(Data.data)
        setItems(Data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;













  
  
/*
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value.toLowerCase();
    const filteredItems = cardsToShow.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setCardsToShow(filteredItems);
  };
*/
  return (
    <div>
      <img src='https://example.com/images/food_court.png' alt="bg" className="background-image" />
      <header className="header">
        <nav className="navbar">
          <div className="navbar-brand">
            <h1 className="brand-text">Food Court</h1>
          </div>
          <form className="search-form">
            <input
              type="text"
              className="search-input"
              name="search"
              placeholder="Search for food..."
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
          <div className="filter">
            {/*<select
              className="filter-select"
              onChange={(e) => displayCards(e.target.value)}
            >
              <option value="all">All</option>
              <option value="veg">Vegetarian</option>
              <option value="nonveg">Non-Vegetarian</option>
              <option value="snacks">Snacks</option>
              <option value="juice">Juice</option>
              <option value="chats">Chats</option>
            </select>*/}
            <ul className="selected-filters" id="selected-filters"></ul>
          </div>
        </nav>
      </header>
<img className='Img-menu-all' src={logo} />
      <div className="cards-container">

        {FoodData.map((item, index) => 
        (
          <div key={item._id} className="card" >
         <div className="img-card-main">
            <img
              src={`data:image/jpeg;base64,${item.image}`}
              alt={item.name}
              className="card-image"
            
            /></div>
            <h2 className="card-title">{item.name}</h2>
            <p className="card-price">💰{item.price}</p>
            <button className='button'>Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
