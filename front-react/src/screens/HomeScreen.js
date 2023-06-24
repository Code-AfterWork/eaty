import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Container, Button } from 'react-bootstrap';

import {FoodUpload} from '../components/FoodUpload.js'
import {FoodList} from '../components/FoodList.js'
import {MealGenerator} from '../components/MealGenerator.js';
import {MealGenHistory} from '../components/MealGenHistory';
import {Hero} from '../components/hero.js';

export const HomeScreen = () => {
  const [foods, setFoods] = useState([]);
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

  return (
    <Container className="text-center">
      <div>
        <Hero></Hero>
        <MealGenerator></MealGenerator>
        <FoodList></FoodList>
        <FoodUpload></FoodUpload>
        <MealGenHistory></MealGenHistory>
      </div>
    </Container>
  );
};
