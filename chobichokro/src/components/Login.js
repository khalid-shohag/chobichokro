import React from "react";
import { useState } from "react";
import axios from "axios";
import './Login.css'
const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:port/api/login', {
        username,
        password
      });


      const token = response.data.token; // Adjust according to your API response
      // Store the token in local storage or state management

    } catch (error) {
      console.error('Error occured', error);
    }
  };

    return(
        <div
        
      style={{
        backgroundImage: 'url("your-background-image-url")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
        
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.8)',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          width: '300px',
        }}
      >
        <h2>Login</h2>
        <form>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              style={{ width: '100%' }}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              style={{ width: '100%' }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: 'green',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              width: '100%',
            }}
            onClick={handleSubmit}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
    );
}

export default Login;