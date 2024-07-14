"use client"

import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState("name")

  const sortItems = () => {
    const Item = [...items];

    if (sortBy === "name") {
      return Item.sort((a, b) => a.name.localeCompare(b.name));

    } else if (sortBy === "category") {
      return Item.sort((a, b) => a.category.localeCompare(b.category));
    
    } else if (sortBy === "group") {
        const sortedByCategory = Item.sort((a, b) => a.category.localeCompare(b.category));
        const groupedByCategory = [];
        let currentCategory = null;

        for (const item of sortedByCategory) {
          if (item.category !== currentCategory) {            
            groupedByCategory.push({ isCategoryTitle: true, category: item.category });
            currentCategory = item.category;
          }
          groupedByCategory.push(item);
        }

        return groupedByCategory;
    }
    return itemsData.slice();
  }

  const sortedItems = sortItems();

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  return (
    <main className="container mx-auto p-5">
        <div className="flex mt-3">            
            <button 
            className={`bg-${sortBy === "name" ? "[#465eca]" : "[black]"} p-3 m-2 w-28 rounded-xl text-white`} 
            onClick={() => handleSortChange("name")}>
              Sort by Name
            </button>
            <button 
            className={`bg-${sortBy === "category" ? "[#465eca]" : "[black]"} p-3 m-2 w-28 rounded-xl text-white`}
            onClick={() => handleSortChange("category")}>
              Sort by Category
            </button>
            <button 
            className={`bg-${sortBy === "group" ? "[#465eca]" : "[black]"} p-1 m-2 w-28 rounded-xl text-white`}
            onClick={() => handleSortChange("group")}>
              Grouped Category
            </button>
        </div>
        <div className="flex flex-col justify-center">
        {sortedItems.map((item) => (
        <React.Fragment key={item.id}>
        {item.isCategoryTitle ? (
          <div className="text-xl font-bold mt-3 capitalize">{item.category}</div>
        ) : (
          <Item
            key={item.id}
            item={item}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)}
          />
        )}
      </React.Fragment>
      ))}
      </div>
    </main>
  );
};

export default ItemList;