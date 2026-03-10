"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ingredient}) {

  const [meals, setMeals] = useState([]);
  
  useEffect(()=> {
    async function loadMealsIdea() {
      if (!ingredient) {
        setMeals([]);
        return;
      }
      const mealsData = await fetchMealIdeas(ingredient);

      if (!mealsData) {
        console.log("No meals found for:", ingredient);
        setMeals([]);
      } else {
        setMeals(mealsData);
      }
    }
    loadMealsIdea();
  },
   [ingredient]
  );

    return (
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Meal Ideas</h2>

        {meals.length === 0 ? (
          <p className="text-xl">No meals found for {ingredient}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {meals.map((meal) => (
              <div
                key={meal.idMeal}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-4"
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <h3 className="text-lg font-semibold text-gray-900">{meal.strMeal}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error(error)
    console.log("No items found")
  }
}


