import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, FormGroup, FormControl, FormLabel, Button } from "react-bootstrap";

  export const FoodUpload = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [foodName, setFoodName] = useState('');
  
    useEffect(() => {
      axios.get('http://127.0.0.1:8000/foods/categories/')
        .then(response => {
          setCategories(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  
    const handleCategoryChange = (event) => {
      setSelectedCategory(event.target.value);
    };
  
    const handleFoodNameChange = (event) => {
      setFoodName(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (!selectedCategory || !foodName) {
        console.log('Please select a category and enter a food name');
        return;
      }
  
      const payload = {
        category: selectedCategory,
        food: foodName
      };
  
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');
      console.log('token is:', accessToken);
      console.log('refresh token is:', refreshToken);

      // Send POST request to the API endpoint with the Authorization header
      axios.post('http://127.0.0.1:8000/foods/create/', payload, {
        headers: {
          accessToken,
          refreshToken
        },
      })
        .then(response => {
          console.log('Food added successfully:', response.data);
          setSelectedCategory('');
          setFoodName('');
        })
        .catch(error => {
          console.log('Error adding food:', error);
        });
    };
  
    return (
      <container>
        <div>
          <h2>Add Food</h2>
          <Form onSubmit={handleSubmit} style={{ margin: '10px' }}>
            <Form.Group controlId="category" style={{ margin: '10px' }}>
              <Form.Label>Category:</Form.Label>
              <Form.Control as="select" value={selectedCategory} onChange={handleCategoryChange} required>
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.category}</option>
                ))}
              </Form.Control>
            </Form.Group>
  
            <Form.Group controlId="foodName" style={{ margin: '10px' }}>
              <Form.Label>Food Name:</Form.Label>
              <Form.Control type="text" value={foodName} onChange={handleFoodNameChange} required />
            </Form.Group>
  
            <Button type="submit" style={{ margin: '10px' }}>Add Food</Button>
          </Form>
        </div>
      </container>
    );
  };
  