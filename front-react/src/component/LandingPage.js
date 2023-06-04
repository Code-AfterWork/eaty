// import React from 'react';
import { Container, Button } from 'react-bootstrap';

// import {useEffect, useState} from "react";
// import axios from "axios";

// export const LandingPage = () => {
//   return (
//     <Container className="text-center">
//       <div>
//         <h1>Pss! Pss! Looking for what to eat?</h1>
//         <p>
//           I will help you find what to cook
//         </p>
//         <Button variant="primary">Generate Meal</Button>
//         <MealGenerator/>
//       </div>
//     </Container>
//   );
// };


import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const MealGenerator = () => {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/foods/')
      .then((response) => {
        const categories = response.data;
        generateMeal(categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const generateMeal = (categories) => {
    const randomIndex = Math.floor(Math.random() * categories.length);
    const randomCategory = categories[randomIndex];
    const randomFood = getRandomFood(randomCategory.foods);
    setMeal({ category: randomCategory.category, food: randomFood });
  };

  const getRandomFood = (foods) => {
    const randomIndex = Math.floor(Math.random() * foods.length);
    return foods[randomIndex].food; // <-- Access the "food" property
  };

  const handleGenerateMeal = () => {
    axios.get('http://localhost:8000/foods/')
      .then((response) => {
        const categories = response.data;
        generateMeal(categories);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container className="text-center">
      <div>

          <h1>Meal Generator</h1>
          <Button onClick={handleGenerateMeal} variant="primary">Generate Meal</Button>
          {meal && (
            <div>
              <h2>Category: {meal.category}</h2>
              <h3>Food: {meal.food}</h3>
            </div>
        )}
      </div>
    </Container>
  );
};
