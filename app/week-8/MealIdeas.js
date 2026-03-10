"use client"
import { useState, useEffect, use } from "react";

export default function MealIdeas() {

  const [meals, setMeals] = useState([]);
  
  async function loadMealsIdea(ingredient) {
    const mealsData = await fetchMealIdeas(ingredient);
    setMeals(mealsData);

    useEffect(loadMealsIdea, ingredient);

    return (
      <div>
        {meals.map((meal) => (
          <div key={meal.idMeal}>
          <h3>{meal.strMeal}</h3>
          <img src={meal.strMealThumb}></img>
          </div>
        ))};
      </div>
    )
  }
}

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;

  } catch (error) {
    console.error(error)
  }
}


