import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {LandingPage} from './LandingPage.js';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

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
      category: category,
      food: foodName,
    };

    axios.post('http://localhost:8000/foods/create/', newFood)
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
    <div>
      <LandingPage></LandingPage>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", padding:"20px"}}>
      {foods.map((food) => (
      <CardGroup key={food.id}>
        <Card>
          {/* <Card.Img variant="top" src="https://images.pexels.com/photos/725990/pexels-photo-725990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/50px160" /> */}
          <Card.Body>
            <Card.Title>{food.category}</Card.Title>
            <Card.Text>
              {food.food}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Suggest Feedback</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    ))}
    </div>

      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
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

        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
};
