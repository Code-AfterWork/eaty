
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Button } from 'react-bootstrap';



// export const FoodUpload = () => {
//   const [foods, setFoods] = useState([]);
//   const [foodName, setFoodName] = useState('');
//   const [category, setCategory] = useState('');
//   const [foodCategories, setFoodCategories] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8000/foods/')
//       .then((response) => {
//         setFoods(response.data);
//         const uniqueCategories = [...new Set(response.data.map(food => food.category))];
//         setFoodCategories(uniqueCategories);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

// const handleSubmit = (e) => {
//   e.preventDefault();

//   if (!category || !foodName) {
//     console.log("Please select a category and enter a food name");
//     return;
//   }

//   const newFood = {
//     category: parseInt(category),
//     food: foodName,
//   };

//   axios.post('http://localhost:8000/foods/create/', newFood, {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => {
//       setFoods([...foods, response.data]);
//       setFoodName('');
//       setCategory('');
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// const renderFoodCategories = () => {
//   return (
//     <select
//       id="food-category"
//       value={category}
//       onChange={(e) => setCategory(e.target.value)}
//       required
//     >
//       <option value="">Select a category</option>
//       {foodCategories.map((category) => (
//         <option key={category} value={category}>
//           {category}
//         </option>
//       ))}
//     </select>
//   );
// };

//   return (
//     <Container className="text-center">
//       <div>
//         <div style={{ justifyContent: "center", padding:"10px"}}>
//           <h1>Upload Food</h1>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               placeholder="Name"
//               value={foodName}
//               onChange={(e) => setFoodName(e.target.value)}
//               required
//             />
//             {renderFoodCategories()}
//             <Button type="submit" variant="primary">Upload</Button>
//           </form>
//         </div>
//       </div>
//     </Container>
//   );
// };


import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div>
      <h2>Add Food</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="category">Category:</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange} required>
          <option value="">Select a category</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.category}</option>
          ))}
        </select>

        <label htmlFor="foodName">Food Name:</label>
        <input type="text" id="foodName" value={foodName} onChange={handleFoodNameChange} required />

        <button type="submit">Add Food</button>
      </form>
    </div>
  );
};

