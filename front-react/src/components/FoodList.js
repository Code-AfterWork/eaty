
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {LandingPage, MealGenerator} from './hero.js';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Container, Button } from 'react-bootstrap';


export const FoodList = () => {
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
          <div style={{ display: "flex", flexDirection: "row", padding:"20px",  justifyContent: "center" }}>
              {foods.map((food) => (
              <CardGroup key={food.index} style ={{padding: "10px",}}>
                <Card>
                  <Card.Body>
                    <Card.Title>{food.category}</Card.Title>
                    <Card.Text>
                      <ul>
                        {food.food.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
            ))}
          </div>
      </div>
    </Container>
  );
};
