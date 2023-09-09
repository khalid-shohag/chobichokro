import React from "react";
import { useState } from "react";
import axios from "axios";
import './Login.css'
import ImageAdmin from '../assets/camera-219958_1280.jpg'
import { Link, Outlet, useNavigate } from 'react-router-dom';

function Login(props) {

  console.log(props.value);
  console.log('Checking');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8080/api/auth/signin', {
        username,
        password
      });


      const token = response.data.accessToken; 
      const type = response.data.tokenType;
      setToken(token);
      console.log(token)
      console.log(response.status)
      if (props.value==='admin')
        navigate('/admin', {state: {token}});
      else if (props.value==='distributor')
        navigate('/distributor_page', {state: {token}});
      else if (props.value==='theatre')
        navigate('/theatre_page', {state: {token}});

    } catch (error) {
      console.error('Error occured', error);
      alert('Invalid');
    }
  };

    return(
      <div className="container-v" >
        <div className="column-v first-content-v">
          <h1 className="animation-container animated-text" style={{color: 'black'}}>{props.value}</h1>
        </div>
      
        <div className="column-v first-content-v"
        
      
    >
        
      <div
        style={{
          // backgroundImage: `url(${ImageAdmin})`,
          backgroundColor: '#B2C3D2',
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
    </div>
  //   <div style={{width: '100vw', height:'100vh'}} className="container-v">
  //     <div className="column-v">
  //   <div className="first-content-v">Hello</div>
  // </div>
  // <div className="column-v">
  //   <div className="first-content-v">World</div>
  // </div>

  //   </div>
    );
}

export default Login;