import React, { useState, useEffect } from 'react';
import '../css/Menu.css';
import logo from '../img/menu125.png'
const imagePaths = {
  Dosa: 'https://t3.ftcdn.net/jpg/00/37/81/84/360_F_37818424_iEAeI3ngDZ3pNwQ8iZvm2AIDzVDRQmhz.jpg',
  MiniMeal: 'https://yazhli.com/wp-content/uploads/2019/11/images-3-1.jpg',
  pulav: 'https://img.freepik.com/free-photo/veg-biryani-veg-pulav-fried-rice-indian-food-generative-ai_1258-151587.jpg?size=626&ext=jpg&ga=GA1.1.1788614524.1719446400&semt=sph',
  lemonRice: 'https://www.cookwithmanali.com/wp-content/uploads/2016/01/South-Indian-Lemon-Rice-Recipe.jpg',
  chapathi: 'https://img.freepik.com/premium-photo/chapathi-with-vegetable-curry_931559-307.jpg?w=900',
  gobi: 'https://as2.ftcdn.net/v2/jpg/07/71/26/89/1000_F_771268905_A9ub62Ny5XPJzIgcxztnfznEK3B7KkGZ.jpg',
  idli: 'https://img.freepik.com/premium-photo/idly-sambar-idli-with-sambhar-green-red-chutney-popular-south-indian-breakfast_999766-2544.jpg?w=900',
  masalaDosa: 'https://t3.ftcdn.net/jpg/07/21/67/66/240_F_721676699_iDZye5CUAhVJIG2sJSbeT4qGXfUZkmx0.jpg',
  chickenKebab: 'https://as2.ftcdn.net/v2/jpg/03/13/35/73/1000_F_313357375_eI3nubCLdKLGOIbgNU6oDurVWg0u7j4b.jpg',
  chickenSukka: 'https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img,w_735/https://www.thetakeiteasychef.com/wp-content/uploads/2016/07/CS-Featured.jpg',
  chickenPulimunchi: 'https://ts2.mm.bing.net/th?q=chicken-pulimunchi-the-take-it-easy-chef.webp',
  chickenRice: 'https://nishkitchen.com/wp-content/uploads/2017/08/indian-lemon-chicken-and-rice-2B.jpg',
  chickenPepper: 'https://www.recipehub.in/wp-content/uploads/2021/06/pepper-chicken2website.jpg',
  chickenBiryani: 'https://saihomefood.in/cdn/shop/products/n7_1000x1000_crop_center.jpg?v=1572348312',
  vegPuffs: 'https://carveyourcraving.com/wp-content/uploads/2021/11/veg-puff-recipe-968x1200.jpg',
  samosa: 'https://www.spiceupthecurry.com/wp-content/uploads/2016/10/Samosa-recipe-1-1-1024x1536.jpg',
  oreoShake: 'https://t3.ftcdn.net/jpg/08/02/02/04/240_F_802020443_030QEvt9a3llsj7x6YBeNMXYcQiYnYwB.jpg',
  watermelonJuice: 'https://moonrice.net/wp-content/uploads/2023/07/WatermelonDrink-3-768x768.jpg',
  muskmelonJuice: 'https://5.imimg.com/data5/DT/PV/MY-28707171/magic-musk-melon-juice-1000x1000.png',
  chippadJuice: 'https://www.archanaskitchen.com/images/archanaskitchen/World_Beverages/Muskmelon_Kharbuj_Juice_Recipe-1.jpg',
  masalaPuri: 'https://b2958125.smushcdn.com/2958125/wp-content/uploads/masala-poori-homemade-chaat-street-side-recipe-e.jpg?lossy=1&strip=1&webp=1',
  sevPuri: 'https://as1.ftcdn.net/v2/jpg/08/20/38/24/1000_F_820382404_mpGKfhxgNVeWrOFsIDOu76qx7DMcsyX1.jpg',
  dahiPuri: 'https://media.istockphoto.com/id/1314802039/photo/forehead-castle-chat.jpg?s=612x612&w=is&k=20&c=169ddUWsudZO3mSpe8DSZ3tv2SWCrxxiEUBpv0-ofk0=',
  paniPuri: 'https://media.istockphoto.com/id/525416827/photo/pani-puri-golgappe-chat-item-india.jpg?s=612x612&w=is&k=20&c=7uwMbkrH4vJL5a-PkpOsvXApbU3THY5REMS2WAhBOq0=',
  foodCourt: 'https://example.com/images/food_court.png',
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
<img className='Img-menu-all' src={logo} />
      <div className="cards-container">
        {cardsToShow.map((item, index) => (
          <div key={index} className="card">
         <div className="img-card-main">
            <img
              src={imagePaths[item.image]}
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
