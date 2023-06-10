
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {LandingPage, MealGenerator} from './MealGenerator.js';
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
              <CardGroup key={food.id} style ={{padding: "10px",}}>
                <Card>
                  <Card.Body>
                    <Card.Title>{food.category}</Card.Title>
                    <Card.Text>
                      <ul>
                        <li>{food.food}</li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    {/* <small className="text-muted">Suggest Feedback</small> */}
                  </Card.Footer>
                </Card>
              </CardGroup>
            ))}
          </div>
      </div>
    </Container>
  );
};
