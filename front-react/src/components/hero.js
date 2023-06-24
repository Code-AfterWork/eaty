import hero1 from "../assets/hero1.png"
import { FaUpload, FaPlayCircle, silfood} from 'react-icons/fa';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPenNib } from '@fortawesome/free-solid-svg-icons'

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

      <div className='hero-image' style={{ flex: 1 }}>
        <img src={hero1} alt="Hero Image" style={{ width: '70%', height: 'auto', marginLeft: '90px'}} />
      </div>

      <div className='hero-body' style={{ flex: 1}}>
        <div style={{ alignItems: 'left' }}>
          <h2 style={{ fontSize: '3rem', textAlign:'left'}}>Tupike nini? <br/>
            Wewe unaona tupike nini?
          </h2>
          <p style={{ fontSize: '1.5rem', textAlign:'left'}}>
            Deciding what to cook is hard. Don't you just wish you had someone who would give you 
            food recomendations every evening?  Well, we could be that someone 😉. 
          </p>

          <h4 style={{ fontSize: '1.3 rem', textAlign:'left', marginTop:'20px'}}>Get meal recomendations in two steps!</h4>

          <div style={{ marginRight:'200px'}}>
            <div style={{ display: 'inline-flex',}}>
                <FontAwesomeIcon icon="fa-solid fa-upload" style={{ margin: '10px' }}/>
                <Button variant="outline-dark">Upload Meal</Button>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center'}}>
                <FontAwesomeIcon icon="fa-solid fa-bowl-food" style={{ margin: '10px' }}/>
                <Button onClick={generateMeal} variant="primary">Generate meal</Button>
            </div>    
          </div>

          <div className="card"  style={{ display:'-ms-inline-flexbox', margin: '20px'}}>
                {meal && (
                <div style={{ display: 'flex'}}>
                    <h4>Your Meal is:</h4>
                    <li style={{ display: 'flex'}}>
                    {meal.map((food) => (
                        // <li key={index}>{food}</li>
                        <li>{food}</li>
                    ))}
                    </li>
                </div>
                )}
          </div>  

        </div>
      </div>


    </div>
  );
};