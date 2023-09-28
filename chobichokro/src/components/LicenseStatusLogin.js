import React, {useState} from "react";
import Navbar from "./navbar";
import axios from "axios";
import './Login.css'
import {useNavigate} from "react-router-dom";

const bgImg = require('../assets/banner.jpg')


function Login() {

//   console.log(props.value);
    console.log('Checking');

    const [number, setNumber] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const formData = new FormData()
        // formData.append('number',number)

        try {
            const response = await axios.get(`http://localhost:8080/api/license/get/${number}`);
            console.log('Phone/Email found', response.data)


            const token = response.data.token;
            navigate('/license_status', {state: {data: response.data}});

        } catch (error) {
            console.error('Error occured', error);
            // alert('Phone/Email not found')
        }
    };

    return (
        <div>
            <Navbar/>
            <div className="container-license">
                <img src={bgImg} style={{
                    position: 'absolute', // Position the video absolutely within the div
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover', // Maintain aspect ratio and cover entire div
                    zIndex: -1,
                }}/>
                <div className="column" style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <h1 className="animation-container animated-text"
                        style={{color: 'black', background: 'transparent'}}>License Status Check</h1>
                </div>

                <div className="column-license"

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
                            // backgroundImage: `url(${ImageAdmin})`,
                            background: 'white',
                            // background: 'rgba(255, 255, 255, 0.8)',
                            padding: '20px',
                            borderRadius: '10px',
                            boxShadow: '0 0 10px black',
                            width: '400px',
                            height: '250px'
                        }}
                    >
                        <h2 style={{color: '#2A925E'}}>Status Check</h2>

                        <div style={{marginTop: '12%'}}>
                            <label style={{color: '#2A925E'}}>Phone/Email:</label>
                            {/* <input
              type="text"
              value={number}
              style={{ width: '100%', height: "50px", borderRadius: '15px', color: 'lavender', border: ''  }}
              onChange={(e) => setNumber(e.target.value)}
            /> */}
                            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)}
                                   style={{
                                       width: '100%',
                                       height: "50px",
                                       borderRadius: '15px',
                                       marginBottom: '10px',
                                       color: 'black'
                                   }}/>
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
                            Check
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;