"use client"

import React, { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [ingredientSelected, setIngredientSelected] = useState(false);

  const getMealIdeas = async (ingredient) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();

      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([])
      }

    } catch (error) {
        console.error('Error fetching meal ideas:', error);
        setMeals([]);
    } finally {
      setIsLoading(false);
      setIngredientSelected(true);
    }
  };

  useEffect(() => {
    console.log('useEffect triggered with ingredient:', ingredient);
    getMealIdeas(ingredient);
  }, [ingredient]);


  return (
    <div>
      <h1 className="text-2xl font-bold font-sans">More Ideas</h1>
      {isLoading ? (<p>Loading...</p>) : (
        <div>
          {ingredientSelected ? (meals.length > 0 ? (
              <div>
                <h2 className="mb-2">Here are some meal ideas using {ingredient}</h2>
                <ul>
                  {meals.map((meal) => (                    
                    <li key={meal.idMeal} className="bg-[#f0b74e] p-2 mb-3 rounded-l hover-bg-amber-200 cursor-pointer text-black font-bold flex">
                      <img src={meal.strMealThumb} alt={meal.strMeal} className='w-16 h-16 mr-2'/>
                      {meal.strMeal}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>No meal ideas found for {ingredient}</p>
            )
          ) : (
            <p>Select an item to see meal ideas</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MealIdeas;