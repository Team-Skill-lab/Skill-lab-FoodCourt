import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

const Items_List = [
  { Name: "User", Link: "/admin/user" },
  { Name: "Products", Link: "/admin/products" },
  { Name: "Orders", Link: "/admin/orders" },
  { Name: "Groceries", Link: "/admin/groceries" }
];

const Admin = () => {
  return (
    <div className="Main-admin">
      {Items_List.map((item, index) => (
        <div className="cards-admin" key={index}>
          <Link to={item.Link}>
           
            <br />
            <button>{item.Name}</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Admin;
