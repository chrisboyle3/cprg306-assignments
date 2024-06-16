"use client"

import React, { useState } from 'react';

const NewItem = () => {

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce")

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = { name, quantity, category };

    console.log(item)

    alert(`Added item: ${name} \nQuantity: ${quantity} \nCategory: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div style={(formStyle)}>      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="itemName"></label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            placeholder='Item Name'
            value={name}
            onChange={(e)=> setName(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div style={inlineContainer}>
          <div>
            <label htmlFor="itemQuantity"></label>
            <input
              type="number"
              id="itemQuantity"
              name="itemQuantity"            
              value={quantity}
              onChange={(e)=> setQuantity(e.target.value)}
              min="1"
              max="99"
              required
              style={quantityStyle}
            />
          </div>
          <div>
            <label htmlFor="itemCategory"></label>
            <select
              id="itemCategory"
              name="itemCategory"
              value={category}
              onChange={(e)=> setCategory(e.target.value)}
              required
              style={selectStyle}
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen-foods">Frozen Foods</option>
              <option value="canned-goods">Canned Goods</option>
              <option value="dry-goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <button type="submit" style={buttonStyle}>+</button>
      </form>
    </div>
  );
};

// Styling
const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',  
  height: '100vh',
  width: '100%',  
  padding: '20px',
  boxSizing: 'border-box'
};

const inputStyle = {
  width: '400px',
  padding: '10px',
  margin: '10px 0',
  fontSize: '16px',
  color:'black',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const quantityStyle = {
  width: '70px',
  padding: '10px',
  margin: '10px 0',
  fontSize: '16px',
  color:'black',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const selectStyle = {
  width: '200px',
  padding: '10px',
  margin: '10px 0',
  fontSize: '16px',
  color:'black',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  backgroundColor: '#007BFF',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '20px',
  marginTop: '10px',
  width: '400px'
};

const inlineContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
};

export default NewItem;