"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ItemList from "./item-list";
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import { useUserAuth } from '../_utils/auth-context';
import { useRouter } from 'next/navigation';
import { getShoppingList, addItem } from '../_services/shopping-list-service';

const Page = () => {

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(false);

  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();  

  useEffect(() => {
    if (user === null)
      //If user is not logged in they are redirected to login page 
      { router.push('/week-8'); }
  }, [user]);

  const loadItems = async () => {
    try {
      const getItems = await getShoppingList(user.uid);
      setItems(getItems)
    } catch (error) {
      console.error("Error loading items:", error)
    }
  }

  useEffect(() => {
    loadItems();
  }, [])

  const handleAddItem = async (newItem) => {
    try {
      const newItemId = await addItem(user.uid, newItem);
      const newItemWithId = {...newItem, id: newItemId };
      setItems((prevItems) => {
        if (Array.isArray(prevItems)) {
          return [...prevItems, newItemWithId];
        } else {
          return [newItemWithId];
        }
      });
    } catch (error) {
      console.error("Error add item:" , error)
    }
  }

  const handleItemSelect = (item) => {
    const itemName = item.name;
    const cleanedIngredient = itemName.split(',')[0].trim().replace(/\p{Emoji}/gu, '');

    setSelectedItemName(cleanedIngredient);
  }

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
      router.push('/week-8');
    }
    catch (error) {
      console.error("Error Logging Out:", error);
    }
  }


  return (
    <main className="flex flex-col min-h-screen p-1 font-sans">
        <div className="flex justify-between items-center">
            <h1 className="text-[40px] font-bold mr-1 mb-3">Shopping List</h1>
            <button 
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-14 rounded items-end"
            >
              Logout
            </button>
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