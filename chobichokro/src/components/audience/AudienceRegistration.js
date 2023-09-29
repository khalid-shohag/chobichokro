import React, {useState} from 'react'
import {Card, CardBody, CardFooter, CardTitle} from 'reactstrap';
import {Button} from 'react-bootstrap';
import Navbar from '../navbar';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

import { toast } from 'react-toastify';


function AudienceRegistration() {

    const navigate = useNavigate()
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [verificationCode, setVerificationCode] = useState('')
    const [isVerified, setIsVerified] = useState(false)
    const [vCode, setVCode] = useState('')

    const [verificationCard, setVerificationCard] = useState(false)
    const [registrationCard, setRegistrationCard] = useState(true)

    const handleRegisterClcik = async () => {

        const formData = new FormData()
        formData.append('username', fullName)
        formData.append('email', email)
        formData.append('password', password)

        try {
            const response = await axios.post('http://localhost:8080/api/mail/send-otp', formData).then((response) => {
                console.log("OTP", response)
                setVCode(response.data.toString())
                setVerificationCard(true)
                setRegistrationCard(false)
            })
        } catch (e) {
            console.log("Error OTP", e)
        }


    }

    const handleVerification = async () => {

        const formData = new FormData()
        formData.append('username', fullName)
        formData.append('email', email)
        formData.append('password', password)
        console.log("Verification Code", vCode)
        if (verificationCode === vCode) {
            try {
                const response = await axios.post('http://localhost:8080/api/auth/signup', formData).then((response) => {
                    console.log("Response", response)
                    setVCode('')
                    toast('Audience Registration done')
                })
            } catch (e) {
                console.log("Error", e)
                toast('Error in registration process')
            }
        } else
            toast.warning('Wrong Verification Code')

        setVerificationCard(false)
        setRegistrationCard(true)
    }

    return (
        <div >
            <Navbar/>
            {registrationCard && (<div>

                <Card style={{
                    marginTop: '7%',
                    marginBottom: '5%',
                    marginLeft: '29%',
                    borderRadius: '10px',
                    boxShadow: '0 0 10px black',
                    padding: '25px',
                    backgroundColor: 'white',
                    height: 'auto',
                    width: '650px'
                }}>
                    <CardTitle style={{background: 'lavender'}}>
                        <h2 style={{marginLeft: '25%', marginTop: '10px'}}>Audience Registration</h2>
                    </CardTitle>
                    <CardBody style={{background: 'cadetblue', borderRadius: '10px', marginTop: '10px', padding: '10px'}}>

                        <form>
                            <label style={{display: 'flex', color: 'black'}}>
                                <h3> User Name </h3>


                                <input style={{
                                    background: 'beige',
                                    height: '40px',
                                    color: 'black',
                                    marginLeft: '8%',
                                    borderRadius: '5px'
                                }}
                                       type='text'
                                       placeholder='Enter Full Name'
                                       value={fullName}
                                       onChange={(e) => setFullName(e.target.value)}
                                />
                            </label>
                            <label style={{display: 'flex', color: 'black'}}>
                                <h3> Email </h3>


                                <input style={{
                                    background: 'beige',
                                    height: '40px',
                                    color: 'black',
                                    marginLeft: '18%',
                                    borderRadius: '5px'
                                }}
                                       type='text'
                                       placeholder='Enter Email'
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>
                            <label style={{display: 'flex', color: 'black'}}>
                                <h3> Password </h3>


                                <input style={{
                                    background: 'beige',
                                    height: '40px',
                                    color: 'black',
                                    marginLeft: '10%',
                                    borderRadius: '5px'
                                }}
                                       type='password'
                                       placeholder='Enter Password'
                                       value={password}
                                       onChange={(e) => setPassword(e.target.value)}
                                />
                            </label>

                            <Button onClick={handleRegisterClcik}
                                    style={{background: 'navy', color: 'white', height: '40px', marginLeft: '40%'}}>
                                Register
                            </Button>

                        </form>

                    </CardBody>
                    <CardFooter style={{background: 'lavender'}}>
                        <h2 style={{marginLeft: '25%', marginTop: '10px'}}>Already Registered?
                            <Button style={{height: '40px', background: 'transparent'}}
                                    onClick={() => navigate('/audience_login')}>
                                Log in
                            </Button>
                        </h2>

                    </CardFooter>

                </Card>

            </div>)}

            {verificationCard && (
                <div>
                    <Card style={{
                        marginTop: '7%',
                        marginBottom: '5%',
                        marginLeft: '29%',
                        borderRadius: '10px',
                        boxShadow: '0 0 10px black',
                        padding: '25px',
                        backgroundColor: 'lightblue',
                        height: 'auto',
                        width: '650px'
                    }}>

                        <CardTitle><h6>A verification code has been sent to your email. Please check!</h6></CardTitle>
                        <CardBody style={{marginTop: '20px', marginLeft: '30%'}}>
                            <input
                                type="text"
                                placeholder="Enter verification code"
                                value={verificationCode}
                                onChange={(e) => setVerificationCode(e.target.value)}
                            />

                        </CardBody>
                        <Button style={{
                            marginTop: '10px', marginLeft: '30%', borderRadius: '3px', backgroundColor: 'green',
                            height: '30px', width: 'auto'
                        }} onClick={handleVerification}>Verify</Button>


                    </Card>
                </div>
            )}


        </div>
    )
}

export default AudienceRegistration;