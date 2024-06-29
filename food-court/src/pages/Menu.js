import React, { useState, useEffect } from 'react';
import './Menu.css';
const imagePaths = {
  "dosa": require('../Images/Dose.jpeg'),
  miniMeal: '/images/f1.jpeg',
  pulav: '/images/pulav.jpeg',
  lemonRice: '/images/lemon_rice.jpeg',
  chapathi: '/images/chapathi.jpeg',
  gobi: '/images/gobi.jpeg',
  idli: '/images/idli.jpeg',
  masalaDosa: '/images/masala_dosa.jpeg',
  chickenKebab: '/images/chicken_kebab.jpeg',
  chickenSukka: '/images/chicken_sukka.jpeg',
  chickenPulimunchi: '/images/chicken_pulimunchi.jpeg',
  chickenRice: '/images/chicken_rice.jpeg',
  chickenPepper: '/images/chicken_pepper.jpeg',
  chickenBiryani: '/images/chicken_biryani.jpeg',
  vegPuffs: '/images/veg_puffs.jpeg',
  samosa: '/images/samosa.jpeg',
  oreoShake: '/images/oreo_shake.jpeg',
  watermelonJuice: '/images/watermelon_juice.jpg',
  muskmelonJuice: '/images/muskmelon_juice.jpeg',
  chippadJuice: '/images/chippad_juice.jpeg',
  masalaPuri: '/images/masala_puri.jpeg',
  sevPuri: '/images/sev_puri.jpeg',
  dahiPuri: '/images/dahi_puri.jpeg',
  paniPuri: '/images/pani_puri.jpeg',
  foodCourt: '/images/food_court.png',
};

const foodData = {
  veg: [
    { name: 'Dosa', price: '40.00', image: 'Dosa' },
    { name: 'Mini meal', price: '50.00', image: 'MiniMeal' },
    { name: 'Pulav', price: '40.00', image: 'pulav' },
    { name: 'Lemon rice', price: '45.00', image: 'lemonRice' },
    { name: 'Chapathi', price: '45.00', image: 'chapathi' },
    { name: 'Gobi munchurian', price: '45.00', image: 'gobi' },
    { name: 'Idli', price: '45.00', image: 'idli' },
    { name: 'Masala Dosa', price: '45.00', image: 'masalaDosa' },
  ],
  nonveg: [
    { name: 'Chicken kebab', price: '45.00', image: 'chickenKebab' },
    { name: 'Chicken Sukka', price: '45.00', image: 'chickenSukka' },
    { name: 'Chicken Pulimunchi', price: '45.00', image: 'chickenPulimunchi' },
    { name: 'Chicken Rice', price: '80.00', image: 'chickenRice' },
    { name: 'Chicken Pepper', price: '45.00', image: 'chickenPepper' },
    { name: 'Chicken Biryani', price: '85.00', image: 'chickenBiryani' },
  ],
  snacks: [
    { name: 'Puffs', price: '50.00', image: 'vegPuffs' },
    { name: 'Samosa', price: '50.00', image: 'samosa' },
  ],
  juice: [
    { name: 'Oreo shake', price: '50.00', image: 'oreoShake' },
    { name: 'watermelon juice', price: '50.00', image: 'watermelonJuice' },
    { name: 'Muskmelon juice', price: '50.00', image: 'muskmelonJuice' },
    { name: 'chippad juice', price: '50.00', image: 'chippadJuice' },
  ],
  chats: [
    { name: 'Masala puri', price: '50.00', image: 'masalaPuri' },
    { name: 'Sev puri', price: '50.00', image: 'sevPuri' },
    { name: 'dhahi puri', price: '50.00', image: 'dahiPuri' },
    { name: 'Pani puri', price: '50.00', image: 'paniPuri' },
  ],
};

const FoodMenu = () => {
  const [cardsToShow, setCardsToShow] = useState([]);

  const displayAllCards = () => {
    const allItems = [
      ...foodData.veg,
      ...foodData.nonveg,
      ...foodData.snacks,
      ...foodData.juice,
      ...foodData.chats,
    ];
    setCardsToShow(allItems);
  };

  useEffect(() => {
    displayAllCards();
  }, []);

  const displayCards = (category) => {
    if (category === 'all') {
      displayAllCards();
    } else {
      setCardsToShow(foodData[category]);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value.toLowerCase();
    const filteredItems = cardsToShow.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setCardsToShow(filteredItems);
  };

  return (
    <div>
      <img src={imagePaths.foodCourt} alt="bg" className="background-image" />
      <header className="header">
        <nav className="navbar">
          <div className="navbar-brand">
            <h1 className="brand-text">Food Court</h1>
          </div>
          <form className="search-form" onSubmit={handleSearchSubmit}>
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
            <select
              className="filter-select"
              onChange={(e) => displayCards(e.target.value)}
            >
              <option value="all">All</option>
              <option value="veg">Vegetarian</option>
              <option value="nonveg">Non-Vegetarian</option>
              <option value="snacks">Snacks</option>
              <option value="juice">Juice</option>
              <option value="chats">Chats</option>
            </select>
            <ul className="selected-filters" id="selected-filters"></ul>
          </div>
        </nav>
      </header>

      <div className="cards-container">
        {cardsToShow.map((item, index) => (
          <div key={index} className="card">
            <img
              src={imagePaths[item.image]}
              alt={item.name}
              className="card-image"
              width={75}
              height={75}
            />
            <h2 className="card-title">{item.name}</h2>
            <p className="card-price">💰{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
