import React from "react";
import { useState } from "react";
import axios from "axios";
import './Login.css'
import ImageAdmin from '../assets/camera-219958_1280.jpg'
import { Link, Outlet, useNavigate } from 'react-router-dom';
const bgLogin = require('../assets/login_page_bg.jpg')


function Login(props) {

  console.log(props.value);
  console.log('Checking');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [token, setToken] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData()
    formData.append("username", username)
    formData.append("password", password)
    
    try {
      const response = await axios.post('http://localhost:8080/api/auth/signin', formData
      // {
      //   username,
      //   password
      // }
      );


      const token = response.data.token; 
      const type = response.data.tokenType;
      const name = response.data.username;
      const id = response.data.id
      const address = response.data.address
      
      // setToken(token);
      console.log("Token Login- ",token)
      console.log(response.data)
      
      if (props.value==='Distributor Login' && response.data.roles[0]==='ROLE_DISTRIBUTOR')
        navigate('/distributor_page/'+response.data.id, {state: {token, name}});
      else if (props.value==='Theatre Login'  && response.data.roles[0]==='ROLE_USER')
        navigate('/theatre_page/'+response.data.id, {state: {token, name, id, address}});
      else if (props.value==='Audience Login'  && response.data.roles[0]==='ROLE_USER')
        navigate('/audience_dashboard/'+response.data.id, {state: {token}});
      else if (props.value==='Admin Login'  && response.data.roles[0]==='ROLE_ADMIN')
        navigate('/admin', {state: {token}});
      else
        alert('Invalid')

    } catch (error) {
      console.error('Error occured', error);
      alert('Invalid');
    }
  };

    return(
      <div className="container-v" >
          <img src={bgLogin} style={{ position: 'absolute', // Position the video absolutely within the div
              top: 0,
              left: 0,
              width: '100%',
              height: 'auto',
              objectFit: 'cover', // Maintain aspect ratio and cover entire div
              zIndex: -1,}}/>
        <div className="column-v first-content-v">
          <h1 className="animation-container animated-text" style={{color: 'white', background: 'transparent'}}>{props.value}</h1>
        </div>
      
        <div className="column-v first-content-v"
        
      
    >
        
      <div

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