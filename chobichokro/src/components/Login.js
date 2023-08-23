import React from "react";
import { useState } from "react";
import axios from "axios";
import './Login.css'
import ImageAdmin from '../assets/film-596009_640.jpg'
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


      const token = response.data.token; 

    } catch (error) {
      console.error('Error occured', error);
    }
  };

    return(
        <div
        
      style={{
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
          backgroundImage: `url(${ImageAdmin})`,
          background: 'rgba(255, 255, 255, 0.8)',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          width: '400px',
          height: '430px'
        }}
      >
        <h2 style={{color: '#2A925E'}}>Login</h2>
        <form >
          <div style={{marginTop: '30px', marginBottom: '30px' }}>
            <label htmlFor="username" style={{color: '#2A925E'}}>Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              style={{ width: '100%', height: "50px", borderRadius: '15px'  }}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div style={{ marginTop: '30px', marginBottom: '50px' }}>
            <label htmlFor="password" style={{color: '#2A925E'}}>Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              style={{ width: '100%', height: "50px", borderRadius: '15px' }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: 'green',
              color: 'white',
              padding: '10px 20px',
              marginLeft: '130px',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              width: '100px',
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