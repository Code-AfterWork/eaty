import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, FormGroup, FormControl, FormLabel, Button } from "react-bootstrap";

export const FoodUpload = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [foodName, setFoodName] = useState('');

  useEffect(() => {
    // Fetch categories from the API endpoint
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

    // Send POST request to the API endpoint
    axios.post('http://127.0.0.1:8000/foods/create/', payload)
      .then(response => {
        console.log('Food added successfully:', response.data);
        // Reset the form fields
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
        <form onSubmit={handleSubmit} style={{margin:'10px'}}>
          <label htmlFor="category" style={{margin:'10px'}}>Category:</label>
          <select id="category" value={selectedCategory} onChange={handleCategoryChange} required>
            <option value="">Select a category</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.category}</option>
            ))}
          </select>

          <label htmlFor="foodName" style={{margin:'10px'}}>Food Name:</label>
          <input type="text" id="foodName" value={foodName} onChange={handleFoodNameChange} required />
          <Button type="submit" style={{margin:'10px'}}>Add Food</Button>
        </form>
      </div>
    </container>
  );
};

