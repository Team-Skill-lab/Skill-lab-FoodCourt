// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Order from './pages/Order';
import Admin from './pages/Admin';
import Login from './pages/Login'
import Items from './pages/Items'
import Groceries from './pages/Groceries';
import Feedback from '../src/pages/FeedBack';
import User from './pages/User';
import OrderItems from './pages/OrderItems';
const App = () => {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        
        <Route path="/Orders" element={<Order />} />
        <Route path='/Authentication' element={<Login/>}/>
        <Route path='/User' element={<About/>}/>
        <Route path='/admin/products' element={<Items/>}/>
        <Route path='/admin/groceries' element={<Groceries/>}/>
        <Route path='/admin/user' element={<User/>}/>
        <Route path='/admin/orders' element={<OrderItems/>}/>
        <Route path='*' element={<h3>Hello</h3>}/>
        <Route path="/admin" element={<Admin />} />
        <Route path="/About" element={<Admin />} />
        <Route path='/Feedback' element={<Feedback/>}/>
      </Routes>
    </Router>
  );
};

export default App;
