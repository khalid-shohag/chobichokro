import React from "react";
import Navbar from "./navbar";
import { Button, Card } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import {useLocation, useNavigate} from 'react-router-dom'

function LicenseStatus() {

    const location = useLocation()
    const navigate = useNavigate()
    const [userInput, setUserInput] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [isCodeSent, setIsCodeSent] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [screen, setScreen] = useState('');

    const data = location.state?.data || ''
    const name = data.username
    const status = data.status
    const licenseNumber = data.licenseNumber
    const licenseType = data.licenseType
    const verification = data.verificationCode
    const address = data.address

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData()
        formData.append('username', name)
        formData.append('password', password)   
        formData.append('numberOfScreens', screen) 
        formData.append('licenseNumber', licenseNumber)
        formData.append('licenseType', licenseType) 
        formData.append('address', address)

        try {
          const response = await axios.post('http://localhost:8080/api/thater/add', formData);


          const token = response.data.token; 
          console.log('Server response:', response.data)
          navigate('/theatre_login')

        } catch (error) {
          console.error('Error occured', error);
        }
    }

    const handleCodeRequest = () => {

        setIsCodeSent(true);
    };

    const handleVerification = () => {
        setIsVerified(true);
    };

    return(
        <div>
            <Navbar />
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
                 backgroundColor: 'gray',
                 background: 'rgba(255, 255, 255, 0.8)',
                 padding: '20px',
                 borderRadius: '10px',
                 boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                 width: '371px',
                 height: '300px',
                 marginTop: '100px',
                 display: 'flex'
               }}
             >
                <div style={{flex: 1}}>
                <Card style={{backgroundColor: 'yellow', borderRadius: '6px', width: '300px'}}>
                    <Card.Header><h6>{licenseType} Name</h6></Card.Header>
                    <Card.Body style={{marginLeft: '90px'}}>
                        <h3>{name}</h3>
                    </Card.Body>
                </Card>
                <Card style={{backgroundColor: 'orange', borderRadius: '6px', width: '300px', marginTop: '20px'}}>
                    <Card.Header><h6>Status</h6></Card.Header>
                    <Card.Body style={{marginLeft: '90px'}}>
                        <h3>{status}</h3>
                    </Card.Body>
                </Card>
                <Card style={{backgroundColor: 'lime', borderRadius: '6px', width: '300px', marginTop: '20px'}}>
                    <Card.Header><h6>License No.</h6></Card.Header>
                    <Card.Body style={{marginLeft: '90px'}}>
                        <h3>{licenseNumber}</h3>
                    </Card.Body>
                </Card>
                <Card style={{backgroundColor: 'lightBlue', borderRadius: '6px', width: '300px', marginTop: '20px'}}>
                    <Card.Header><h6>Registration</h6></Card.Header>
                    {(status === 'approved') ? (
                    <Card.Body style={{marginLeft: '90px'}}>
                        <Button style={{cursor: 'pointer', backgroundColor: 'red', borderRadius: '3px', height: '30px', width: 'auto'}}
                        onClick={handleCodeRequest}>
                            Update
                        </Button>
                    </Card.Body>
                    ) : (<div></div>)}
                    
                </Card>
                </div>
            </div>
            <div style={{flex: 1}}>
            {isCodeSent && (
        
            <Card style={{backgroundColor: 'lightBlue', borderRadius: '6px', width: '300px', height:'120px', marginLeft: '120px'}}>
                    <Card.Header><h6>Verify</h6></Card.Header>
                    <Card.Body style={{marginTop: '20px'}}>
                    <input
                        type="text"
                        placeholder="Enter verification code"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                    />

                    </Card.Body>
                    <Button style={{marginTop: '10px', marginLeft: '50px', borderRadius: '3px', backgroundColor: 'green',
                  height: '30px', width: 'auto'}} onClick={handleVerification}>Verify</Button>
                </Card>
            )}
         </div>
         <div style={{flex: 1}}>
            {isVerified && (
                <div style={{flex: 1}}>
                    <Card style={{backgroundColor: 'gold', borderRadius: '6px', width: '300px', height:'200px', marginTop: '20px', marginLeft: '20px'}}>
                        <Card.Header>
                            <h6>Registration</h6>
                        </Card.Header>
                        <Card.Body>
                        <form >
          <div>
            {/* <label htmlFor="username" style={{color: '#2A925E'}}>Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              style={{ width: '100%', height: "40px", borderRadius: '15px'  }}
              onChange={(e) => setUsername(e.target.value)}
            /> */}
            <h5>User Name: {name}</h5>
          </div>
          <div >
            <label htmlFor="screen" style={{color: '#2A925E'}}>No. of Screens:</label>
            <input
              type="screen"
              id="screen"
              name="screen"
              style={{ width: '100%', height: "40px", borderRadius: '15px' }}
              onChange={(e) => setScreen(e.target.value)}
            />
          </div>
          <div >
            <label htmlFor="password" style={{color: '#2A925E'}}>Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              style={{ width: '100%', height: "40px", borderRadius: '15px' }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button
            type="submit"
            style={{
              backgroundColor: 'green',
              color: 'white',
              padding: '10px 20px',
              marginTop: '10px',
              marginLeft: '100px',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              width: '100px',
            }}
            onClick={handleSubmit}
          >
            Register
          </button>
        </form>
                        </Card.Body>
                    </Card>
                </div>
            )}

        </div>
      
        </div>
        </div>
    );
}

export default LicenseStatus;