import React, { useState, useEffect } from 'react';
import axios from 'axios';


// When a user is logged in, they are redirected here
export const Home = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/foods/')
      .then((response) => {
        setFoods(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {foods.map((food) => (
        <div key={food.id}>
          <h2>{food.name}</h2>
          <p>{food.food}</p>
        </div>
      ))}
    </div>
  );
};
