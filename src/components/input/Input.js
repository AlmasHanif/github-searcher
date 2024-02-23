// src/components/Input/Input.js
import React, { useState } from 'react';
import './Input.css';

const Input = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Search users..."
        value={searchText}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Input;
