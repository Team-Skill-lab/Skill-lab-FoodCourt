// SearchBar.js
import React from 'react';
import '../css/SearchBar.css'
const SearchBar = ({ onSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;