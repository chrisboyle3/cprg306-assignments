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
            className={`bg-${sortBy === "name" ? "[#465eca]" : "[black]"} p-3 m-2 w-28 rounded-xl text-white`}>
            Sort by Name
          </button>
          <button 
            onClick={() => setSortBy('category')} 
            className={`bg-${sortBy === "category" ? "[#465eca]" : "[black]"} p-3 m-2 w-28 rounded-xl text-white`}>
            Sort by Category
          </button>
          <button 
            onClick={() => setSortBy('group')} 
            className={`bg-${sortBy === "group" ? "[#465eca]" : "[black]"} p-1 m-2 w-28 rounded-xl text-white`}>
            Grouped Category
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