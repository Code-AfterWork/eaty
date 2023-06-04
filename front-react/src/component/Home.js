
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {LandingPage, MealGenerator} from './LandingPage.js';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import { Container, Button } from 'react-bootstrap';

export const Home = () => {
  const [foods, setFoods] = useState([]);
  const [foodName, setFoodName] = useState('');
  const [category, setCategory] = useState('');
  const [foodCategories, setFoodCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/foods/')
      .then((response) => {
        setFoods(response.data);
        const uniqueCategories = [...new Set(response.data.map(food => food.category))];
        setFoodCategories(uniqueCategories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


const handleSubmit = (e) => {
  e.preventDefault();

  if (!category || !foodName) {
    console.log("Please select a category and enter a food name");
    return;
  }

  const newFood = {
    category: parseInt(category),
    food: foodName,
  };

  axios.post('http://localhost:8000/foods/create/', newFood, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      setFoods([...foods, response.data]);
      setFoodName('');
      setCategory('');
    })
    .catch((error) => {
      console.log(error);
    });
};

const renderFoodCategories = () => {
  return (
    <select
      id="food-category"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      required
    >
      <option value="">Select a category</option>
      {foodCategories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

  return (
    <Container className="text-center">
      <div>
          <MealGenerator></MealGenerator>
          <div style={{ display: "flex", flexDirection: "row", padding:"20px",  justifyContent: "center" }}>
              {foods.map((food) => (
              <CardGroup key={food.id} style ={{padding: "10px",}}>
                <Card>
                  <Card.Body>
                    <Card.Title>{food.category}</Card.Title>
                    <Card.Text>
                      {food.food}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    {/* <small className="text-muted">Suggest Feedback</small> */}
                  </Card.Footer>
                </Card>
              </CardGroup>
            ))}
          </div>

        <div style={{ justifyContent: "center", padding:"10px"}}>
          <h1>Upload Food</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              required
            />
            {renderFoodCategories()}
            <Button type="submit" variant="primary">Upload</Button>
          </form>
        </div>
      </div>
    </Container>
  );
};
