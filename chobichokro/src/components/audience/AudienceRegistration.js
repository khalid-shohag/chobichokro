import React, { useState } from 'react'
import { Card, CardBody, CardFooter, CardTitle } from 'reactstrap';
import { Button } from 'react-bootstrap';
import Navbar from '../navbar';

function AudienceRegistration() {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [verificationCode, setVerificationCode] = useState('')
    const [isVerified, setIsVerified] = useState(false)

    const [verificationCard, setVerificationCard] = useState(false)
    const [registrationCard, setRegistrationCard] = useState(true)

    const handleRegisterClcik = () => {
        setVerificationCard(true)
        setRegistrationCard(false)
    }

    const handleVerification = () => {
        setVerificationCard(false)
        setRegistrationCard(true)
    }

    return (
        <div>
            <Navbar />
            {registrationCard && (<div>

                <Card style={{marginTop: '7%', marginBottom: '5%', marginLeft: '29%', borderRadius: '10px', boxShadow: '0 0 10px black', padding: '25px', backgroundColor: 'white', height: 'auto', width: '650px'}}>
                <CardTitle style={{background: 'lavender'}}>
                    <h2 style={{marginLeft: '25%', marginTop: '10px'}}>Audience Registration</h2>
                </CardTitle>
                <CardBody style={{background: 'cadetblue', borderRadius: '10px', marginTop: '10px'}}>

                    <form>
                        <label style={{display: 'flex', color: 'black'}}>
                         <h3> Full Name </h3>
                        
                       
                        <input style={{background: 'beige', height: '40px', color: 'black', marginLeft: '10%', borderRadius: '5px'}}
                            type='text'
                            placeholder='Enter Full Name'
                            value = {fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        </label>
                        <label style={{display: 'flex', color: 'black'}}>
                         <h3> Email </h3>
                        
                       
                        <input style={{background: 'beige', height: '40px', color: 'black', marginLeft: '18%', borderRadius: '5px'}}
                            type='text'
                            placeholder='Enter Email'
                            value = {email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        </label>
                        <label style={{display: 'flex', color: 'black'}}>
                         <h3> Password </h3>
                        
                       
                        <input style={{background: 'beige', height: '40px', color: 'black', marginLeft: '10%', borderRadius: '5px'}}
                            type='text'
                            placeholder='Enter Password'
                            value = {password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        </label>

                        <Button onClick={handleRegisterClcik} style={{background: 'navy', color: 'white', height: '40px', marginLeft: '40%'}}>
                            Register
                        </Button>
                         
                    </form>

                </CardBody>
                <CardFooter style={{background: 'lavender'}}>
                    <h2 style={{marginLeft: '25%', marginTop: '10px'}}>Already Registered?
                     <Button style={{height: '40px', background: 'transparent'}}>
                        Log in
                     </Button>
                     </h2>

                </CardFooter>
            
            </Card >

            </div>)}
            
            {verificationCard && (
                <div>
                <Card style={{marginTop: '7%', marginBottom: '5%', marginLeft: '29%', borderRadius: '10px', boxShadow: '0 0 10px black', padding: '25px', backgroundColor: 'lightblue', height: 'auto', width: '650px'}}>
                
                <CardTitle><h6>Verify</h6></CardTitle>
                    <CardBody style={{marginTop: '20px', marginLeft: '30%'}}>
                    <input
                        type="text"
                        placeholder="Enter verification code"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                    />

                    </CardBody>
                    <Button style={{marginTop: '10px', marginLeft: '30%', borderRadius: '3px', backgroundColor: 'green',
                  height: '30px', width: 'auto'}} onClick={handleVerification}>Verify</Button>
             

            </Card>
                </div>
            )}

            
        </div>
    )
}

export default AudienceRegistration;