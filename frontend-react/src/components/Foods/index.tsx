import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';

const index = () => {
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
    <body>
      <Navbar />
      <h1>Foods</h1>
      <h2>Welome to Eaty</h2>
      {foods.map((food) => (
        <div key={food.id}>
          <h2>{food.name}</h2>
          <p>{food.food}</p>
        </div>
      ))}
      <footer className="footer">
        <p className="footer-by">
          A project by{" "}
          <a
            href=" "
            rel="noopener"
            className="small-link"
          >
             CodeAfterWork
          </a>
          <a
            href=" "
            rel="noopener"
            target="_blank"
            className="no-link icon-twitter"
            aria-label="Follow me on Twitter"
          ></a>
        </p>
      </footer>
    </body>
  );
};

export default index;





// import React from "react";
// import Navbar from "../Navbar";

// function index() {
//   return (
//     <body>
//       <Navbar />
//       <h1>Foods</h1>
//       <h2>Welome to Eaty</h2>
//       <footer className="footer">
//         <p className="footer-by">
//           A project by{" "}
//           <a
//             href=" "
//             rel="noopener"
//             className="small-link"
//           >
//              CodeAfterWork
//           </a>
//           <a
//             href=" "
//             rel="noopener"
//             target="_blank"
//             className="no-link icon-twitter"
//             aria-label="Follow me on Twitter"
//           ></a>
//         </p>
//       </footer>
//     </body>
//   );
// }

// export default index;
