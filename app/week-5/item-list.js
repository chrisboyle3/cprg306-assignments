import React from 'react';
import Item from './item';
import { useState } from 'react';
import items from './items.json';

const ItemList = () => {
    const [sortBy, setSortBy] = useState('name');
  
    const sortedItems = [...items].sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'category') {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });
  
    const groupByCategory = () => {
      const grouped = items.reduce((acc, item) => {
        (acc[item.category] = acc[item.category] || []).push(item);
        return acc;
      }, {});
  
      return Object.keys(grouped).sort().map(category => (
        <div key={category}>
          <h2 className="capitalize font-bold mt-4">{category}</h2>
          <ul>
            {grouped[category].sort((a, b) => a.name.localeCompare(b.name)).map(item => (
              <Item 
                key={item.id} 
                name={item.name} 
                quantity={item.quantity} 
                category={item.category} 
              />
            ))}
          </ul>
        </div>
      ));
    };
  
    return (
      <div>
        <div className="mb-4">
          <button 
            onClick={() => setSortBy('name')} 
            className={`px-4 py-2 mr-2 ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
            Sort by Name
          </button>
          <button 
            onClick={() => setSortBy('category')} 
            className={`px-4 py-2 ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
            Sort by Category
          </button>
          <button 
            onClick={() => setSortBy('group')} 
            className={`px-4 py-2 ml-2 ${sortBy === 'group' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
            Group by Category
          </button>
        </div>
        {sortBy === 'group' ? (
          groupByCategory()
        ) : (
          <ul className="list-none p-0">
            {sortedItems.map(item => (
              <Item 
                key={item.id} 
                name={item.name} 
                quantity={item.quantity} 
                category={item.category} 
              />
            ))}
          </ul>
        )}
      </div>
    );
  };

export default ItemList;