import React, { useState, useEffect } from 'react';
import Counter from '../components/Counter'; // Assuming Counter component is correctly imported
import '../css/Order.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Home.css';

const Order = () => {
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const userId = '669e766069a34f9fddf9b349'; // Hardcoding user ID for simplicity

  useEffect(() => {
    axios.get(`http://localhost:8080/api/order/${userId}`).then((response) => {
      setOrder(response.data);
      setTotal(response.data.reduce((acc, item) => acc + item.price, 0));
      });
    const newTotal = orders.reduce((sum, order) => sum + order.count, 0);
    setTotal(newTotal);
  }, [orders]);

  const handleCountChange = (id, newCount) => {
    setOrders(orders => orders
      .map(order => (order.id === id ? { ...order, count: newCount } : order))
      .filter(order => order.count !== 0)
    );
  };

  const handleCheckout = async () => {
    const orderData = {
      orderID: new Date().getTime().toString(),
      orderDate: new Date(),
      userId,
      menuItems: orders.map(order => ({
        item: order.id,
        quantity: order.count
      })),
      orderStatus: 'Pending'
    };

    try {
      const newOrder = await axios.post('http://localhost:8080/api/orders', orderData);

      // Update user's current order and clear the cart
      await axios.put(`http://localhost:8080/api/users/${userId}/checkout`, {
        currentOrder: newOrder.data._id,
        currentCart: []
      });

      setOrders([]);
      navigate('/Feedback');
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <div className="order-container">
      <div className="main-OrderAll">
        {orders.map(order => (
          <div key={order.id} className="order">
            <h1>Order: {order.Name}</h1>
            <p>Available: {order.ifavailable ? 'Yes' : 'No'}</p>
            <Counter
              number={order.count}
              onChange={(newCount) => handleCountChange(order.id, newCount)}
            />
          </div>
        ))}
        <div className='div-cost'>
          <p className='p-cost'>Total count: {total}</p>
          <button className="buttons-Home" onClick={handleCheckout}>Check out</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
