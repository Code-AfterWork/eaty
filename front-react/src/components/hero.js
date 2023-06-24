import hero1 from "../assets/hero1.png"
import { FaUpload, FaPlayCircle } from 'react-icons/fa';

import { Container, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Hero = () => {

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
  
      const mealString = mealFoods.join(', ');
  
      axios.post('http://localhost:8000/foods/generatedmeal/', { meal: mealString })
      .then(response => {
        console.log('Meal successfully generated and posted');
      })
      .catch(error => {
        console.log('Error generating or posting meal:', error);
      });
  
    };

  return (
    <div style={{ display: 'flex', marginTop: '70px'}}>

      <div className='hero-body' style={{ flex: 1, marginLeft: '70px'}}>
        <div style={{ alignItems: 'left' }}>
          <h2 style={{ fontSize: '3rem', textAlign:'left'}}>Tupike nini? <br/>
            Wewe unaona tupike nini?
          </h2>
          <p style={{ fontSize: '1.5rem', textAlign:'left'}}>
            Deciding what to cook is hard. Don't you just wish you had someone who would give you 
            food recomendations every evening?  Well, we could be that someone 😉. 
          </p>

          <h4 style={{ fontSize: '1.3 rem', textAlign:'left'}}>Get meal recomendations in two steps!</h4>
          <div style={{ display: 'inline-flex', alignItems: 'left' }}>
            <FaUpload size={30} style={{ marginRight: '10px' }} />
            <span>Upload meals</span>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center'}}>
            <FaPlayCircle size={30} style={{ marginRight: '10px' }} />
            <Button onClick={generateMeal} variant="primary">Generate meal</Button>
            <div className="card"  style={{ display:'-ms-inline-flexbox', marginLeft: '70px'}}>
                {meal && (
                <div>
                    <h4>Your Meal is:</h4>
                    <li className="list-inline">
                    {meal.map((food, index) => (
                        <li key={index}>{food}</li>
                    ))}
                    </li>
                </div>
                )}
            </div>  
          </div>
        </div>
      </div>

      <div className='hero-image' style={{ flex: 0.8 }}>
        <img src={hero1} alt="Hero Image" style={{ width: '50%', height: 'auto' }} />
      </div>

    </div>
  );
};