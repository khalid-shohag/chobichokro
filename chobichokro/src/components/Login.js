import React, {useState} from "react";
import axios from "axios";
import './Login.css'
import {useNavigate} from 'react-router-dom';

const bgLogin = require('../assets/login_page_bg.jpg')


function Login(props) {


  console.log(props.value);
  console.log('Checking');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [token, setToken] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (props.value==='Distributor Login')
        navigate('/license_status_check');
      else if (props.value==='Theatre Login')
        navigate('/license_status_check');
      else if (props.value==='Audience Login')
        navigate('/audience_registration');
  }

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
      const theatreName = response.data.username //Theatre response has different naming convention
      const id = response.data.id
      const address = response.data.address
      const email = response.data.email
      
      // setToken(token);
      console.log("Token Login- ",token)
      console.log("Response: ",response.data)

      if(props.redirectStatus==='yes') {
        console.log('LOCATION STATE: ', props.category, props.id, props.allTheatre)
        if (props.value==='Audience Login'  && response.data.roles[0]==='ROLE_USER') {
          localStorage.setItem('audience_name', name)
          localStorage.audienceEmail('audience_email', email)
          localStorage.setItem('audience_token', token)
          navigate(props.pathname, {state: {category: props.category, id: props.id, allTheatre: props.allTheatre, ticketBook: 'yes',
          ticketToken: token, audienceName: name, audienceEmail: email}});
        }
        else
          alert('Invalid')
        return null;
      }
      
      if (props.value==='Distributor Login' && response.data.roles[0]==='ROLE_DISTRIBUTOR')
        navigate('/distributor_page/'+response.data.id, {state: {token, name}});
      else if (props.value==='Theatre Login'  && response.data.roles[0]==='ROLE_THEATER_OWNER')
        navigate('/theatre_page/'+response.data.id, {state: {token, theatreName, id, address}});
      else if (props.value==='Audience Login'  && response.data.roles[0]==='ROLE_USER') {
        localStorage.setItem('audience_token', token)
        localStorage.setItem('audience_name', name)
        localStorage.audienceEmail('audience_email', email)
        navigate('/audience_dashboard/'+response.data.id, {state: {token, name, email}});
      }
      else if (props.value==='Admin Login'  && response.data.roles[0]==='ROLE_ADMIN')
        navigate('/admin', {state: {token}});
      else
        alert('Invalid')

    } catch (error) {
      console.error('Error occured', error);
      alert('Invalid');

    }
  }
    

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const formData = new FormData()
    //     formData.append("username", username)
    //     formData.append("password", password)

    //     try {
    //         const response = await axios.post('http://localhost:8080/api/auth/signin', formData
    //             // {
    //             //   username,
    //             //   password
    //             // }
    //         );


    //         const token = response.data.token;
    //         const type = response.data.tokenType;
    //         const name = response.data.username;
    //         const theatreName = response.data.username //Theatre response has different naming convention
    //         const id = response.data.id
    //         const address = response.data.address
    //         const email = response.data.email

    //         // setToken(token);
    //         console.log("Token Login- ", token)
    //         console.log("Response: ", response.data)

    //         if (props.redirectStatus === 'yes') {
    //             console.log('LOCATION STATE: ', props.category, props.id, props.allTheatre)
    //             if (props.value === 'Audience Login' && response.data.roles[0] === 'ROLE_USER') {
    //                 navigate(props.pathname, {
    //                     state: {
    //                         category: props.category, id: props.id, allTheatre: props.allTheatre, ticketBook: 'yes',
    //                         ticketToken: token, audienceName: name, audienceEmail: email
    //                     }
    //                 });
    //             } else
    //                 alert('Invalid')
    //             return null;
    //         }

    //         if (props.value === 'Distributor Login' && response.data.roles[0] === 'ROLE_DISTRIBUTOR')
    //             navigate('/distributor_page/' + response.data.id, {state: {token, name}});
    //         else if (props.value === 'Theatre Login' && response.data.roles[0] === 'ROLE_THEATER_OWNER')
    //             navigate('/theatre_page/' + response.data.id, {state: {token, theatreName, id, address}});
    //         else if (props.value === 'Audience Login' && response.data.roles[0] === 'ROLE_USER')
    //             navigate('/audience_dashboard/' + response.data.id, {state: {token, name, email}});
    //         else if (props.value === 'Admin Login' && response.data.roles[0] === 'ROLE_ADMIN')
    //             navigate('/admin', {state: {token}});
    //         else
    //             alert('Invalid')

    //     } catch (error) {
    //         console.error('Error occured', error);
    //         alert('Invalid');
    //     }
    // };

    return (
        <div className="container-v">
            <img src={bgLogin} style={{
                position: 'absolute', // Position the video absolutely within the div
                top: 0,
                left: 0,
                width: '100%',
                height: 'auto',
                objectFit: 'cover', // Maintain aspect ratio and cover entire div
                zIndex: -1,
            }}/>
            <div className="column-v first-content-v">
                <h1 className="animation-container animated-text"
                    style={{color: 'white', background: 'transparent'}}>{props.value}</h1>
            </div>

            <div className="column-v first-content-v"


            >

                <div>
                    <h2 style={{color: '#2A925E'}}>Login</h2>

                    <div style={{marginTop: '30px', marginBottom: '30px'}}>
                        <label htmlFor="username" style={{color: '#2A925E'}}>Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            style={{width: '100%', height: "50px", borderRadius: '15px'}}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div style={{marginTop: '30px', marginBottom: '50px'}}>
                        <label htmlFor="password" style={{color: '#2A925E'}}>Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            style={{width: '100%', height: "50px", borderRadius: '15px'}}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        style={{
                            backgroundColor: 'green',
                            color: 'white',
                            padding: '10px 20px',
                            marginLeft: '35%',
                            border: 'none',
                            borderRadius: '10px',
                            cursor: 'pointer',
                            width: '100px',
                        }}
                        onClick={handleSubmit}
                    >
                        Sign In
                    </button>
                    <label style={{display: 'flex', marginTop: '10px'}}>
                        <h3 style={{color: 'beige', flex: 1}}>Not an account? </h3>
                        <button
                            style={{
                                backgroundColor: 'maroon',
                                color: 'white',
                                width: '34%',
                                padding: '10px 20px',

                                border: 'none',
                                borderRadius: '10px',
                                cursor: 'pointer',


                            }} onClick={handleRegister}>
                            Register
                        </button>
                    </label>

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