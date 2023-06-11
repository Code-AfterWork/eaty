import { Container, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const MealGenerator = () => {
  const [meal, setMeal] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/foods/')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.log('Error fetching categories:', error);
      });
  }, []);

  const generateMeal = () => {
    if (categories.length < 3) {
      console.log('Not enough categories to generate a meal');
      return;
    }

    const selectedCategories = [];
    while (selectedCategories.length < 3) {
      const randomIndex = Math.floor(Math.random() * categories.length);
      const category = categories[randomIndex];
      if (!selectedCategories.includes(category)) {
        selectedCategories.push(category);
      }
    }

    const mealFoods = selectedCategories.map(category => {
      const randomIndex = Math.floor(Math.random() * category.food.length);
      return category.food[randomIndex];
    });

    setMeal(mealFoods);
  };

  return (
    <Container className="text-center">
      <div>
        <h1>Meal Generator</h1>
        <Button onClick={generateMeal} variant="primary">Generate Meal</Button>
        {meal && (
          <div>
            <h2>Meal:</h2>
            <ul>
              {meal.map((food, index) => (
                <li key={index}>{food}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Container>
  );
};
