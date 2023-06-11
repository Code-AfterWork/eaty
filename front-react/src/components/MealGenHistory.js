import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export const MealGenHistory = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/foods/generatedmealhist/')
      .then(response => {
        // Get the last four items from the response data
        const lastFourMeals = response.data.slice(-4);
        setMeals(lastFourMeals);
      })
      .catch(error => {
        console.log('Error fetching meals:', error);
      });
  }, []);

  return (
    <div>
      <h1>Meal List</h1>
      <CardGroup>
        {meals.map(meal => (
          <Card key={meal.id}>
            <Card.Body>
              <Card.Title>Meal</Card.Title>
              <Card.Text>
                {meal.meal}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">ID: {meal.id}</small>
            </Card.Footer>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
};
