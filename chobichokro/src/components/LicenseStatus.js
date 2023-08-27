import React from "react";
import Navbar from "./navbar";
import { Button, Card } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function LicenseStatus() {

    const [userInput, setUserInput] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [isCodeSent, setIsCodeSent] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
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
            <div className="column"
        
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
                 marginTop: '100px'
               }}
             >
                <Card style={{backgroundColor: 'yellow', borderRadius: '6px', width: '300px'}}>
                    <Card.Header><h6>Company Name</h6></Card.Header>
                    <Card.Body style={{marginLeft: '90px'}}>
                        <h3>ABCD</h3>
                    </Card.Body>
                </Card>
                <Card style={{backgroundColor: 'orange', borderRadius: '6px', width: '300px', marginTop: '20px'}}>
                    <Card.Header><h6>Status</h6></Card.Header>
                    <Card.Body style={{marginLeft: '90px'}}>
                        <h3>Approved</h3>
                    </Card.Body>
                </Card>
                <Card style={{backgroundColor: 'lime', borderRadius: '6px', width: '300px', marginTop: '20px'}}>
                    <Card.Header><h6>License No.</h6></Card.Header>
                    <Card.Body style={{marginLeft: '90px'}}>
                        <h3>549825</h3>
                    </Card.Body>
                </Card>
                <Card style={{backgroundColor: 'lightBlue', borderRadius: '6px', width: '300px', marginTop: '20px'}}>
                    <Card.Header><h6>Registration</h6></Card.Header>
                    <Card.Body style={{marginLeft: '90px'}}>
                        <Button style={{cursor: 'pointer', backgroundColor: 'red', borderRadius: '3px'}}
                        onClick={handleCodeRequest}>
                            Update
                        </Button>
                    </Card.Body>
                </Card>
            </div>
            {isCodeSent && (
        <div>
            <Card style={{backgroundColor: 'lightBlue', borderRadius: '6px', width: '300px', height:'120px', marginLeft: '20px'}}>
                    <Card.Header><h6>Verify</h6></Card.Header>
                    <Card.Body style={{marginTop: '20px'}}>
                    <input
                        type="text"
                        placeholder="Enter verification code"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                    />
                    
                    </Card.Body>
                    <Button style={{marginTop: '10px', marginLeft: '50px', borderRadius: '3px', backgroundColor: 'green'}} onClick={handleVerification}>Verify</Button>
                </Card>
            
            {isVerified && (
                <div>
                    <Card style={{backgroundColor: 'gold', borderRadius: '6px', width: '300px', height:'200px', marginTop: '20px', marginLeft: '20px'}}>
                        <Card.Header>
                            <h6>Registration</h6>
                        </Card.Header>
                        <Card.Body>
                        <form >
          <div>
            <label htmlFor="username" style={{color: '#2A925E'}}>Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              style={{ width: '100%', height: "40px", borderRadius: '15px'  }}
              onChange={(e) => setUsername(e.target.value)}
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
      )}
        </div>
        </div>
    );
}

export default LicenseStatus;