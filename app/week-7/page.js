"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import ItemList from "./item-list";
import NewItem from './new-item';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';

const Page = () => {

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(false);

  const handleAddItem = (newItem) => {
    const updatedItem = [...items, newItem];
    setItems(updatedItem)
  }

  const handleItemSelect = (item) => {
    const itemName = item.name;
    const cleanedIngredient = itemName.split(',')[0].trim().replace(/\p{Emoji}/gu, '');

    setSelectedItemName(cleanedIngredient);
  }


  return (
    <main className="flex flex-col min-h-screen p-1 font-sans">
        <div className="flex">
            <h1 className="text-[40px] font-bold mr-1 mb-3">Shopping List</h1>
            
        </div>
        <div className="flex">
          <div className="flex-2">
            <div className="mr-1">
            <NewItem onAddItem={handleAddItem} />
            </div>
            <ItemList 
              items={items} 
              onItemSelect={handleItemSelect}
            />
          </div>
          <div className="flex flex-1 ml-1">
            <MealIdeas ingredient={selectedItemName}/>
          </div>
        </div>
        <Link href="/">Back</Link>
    </main>
  );
};

export default Page;