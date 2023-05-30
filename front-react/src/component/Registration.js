// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export const Register = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios.post('/api/users/', {
//       username,
//       password,
//     })
//       .then((response) => {
//         if (response.status === 201) {
//           setError(null);
//         } else {
//           setError(response.data.error);
//         }
//       })
//       .catch((error) => {
//         setError(error.message);
//       });
//   }, [username, password]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('/api/users/', {
//       username,
//       password,
//     })
//       .then((response) => {
//         if (response.status === 201) {
//           // Redirect to the home page
//         } else {
//           setError(response.data.error);
//         }
//       })
//       .catch((error) => {
//         setError(error.message);
//       });
//   };

//   return (
//     <div>
//       <h1>Register</h1>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };


import React, { useState } from 'react';
import axios from 'axios';

export const RegisterUser = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://127.0.0.1:8000/users/register', {
      username,
      password,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Register User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
