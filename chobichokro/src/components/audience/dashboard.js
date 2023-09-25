import React, { useState } from "react";
import Navbar from "../navbar";
import { Button, Nav } from "react-bootstrap";
import './dashboard.css'

import { Card } from "react-bootstrap";
import { CardBody, CardFooter } from "reactstrap";
import { FaIcons } from "react-icons/fa";
import { FaFilm, FaStar, FaHeart, FaPen } from "react-icons/fa";
import ReviewList from "./dashList/ReviewList";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import bgImage from '../../assets/light.gif'
const profileImage = require('../../assets/avatar2.png')

function Dashboard() {

    const location = useLocation()
    const audience_name = location.state?.name || ''
    const audience_email = location.state?.email || ''

    const [review, setReview] = useState(false);

    const handleReview = () => {
        setReview(true);
    }

    return(
        <div className="scrollable-page-das" >
            
            <Navbar />
            <div className="container-das scrollable-page-das">
            <img src={bgImage} style={{
          position: 'absolute', // Position the video absolutely within the div
          top: 0,
          left: 0,
          width: '100%',
          height: 'auto',
          objectFit: 'cover', // Maintain aspect ratio and cover entire div
          zIndex: -1, // Place it behind other content
        }}/>
                <div className="column-das" style={{flexDirection: 'column'}}>
                    <div>
                    <img src={profileImage} alt='profile' style={{width: '100px', height: '100px', borderRadius: '50%'}} />
                    </div>     
                                 
                    <div style={{marginTop: '10px',  border: '15px solid gray', borderRadius: '5px'}}>
                        {audience_name}    
                    </div>
                    <div style={{marginTop: '10px', border: '1px solid black', display: 'flex', fontSize: '5'}}>
                        <FaEnvelope></FaEnvelope> <a href={audience_email}> {audience_email}</a>    
                    </div>
                    <div style={{marginTop: '10px', border: '1px solid black'}}>
                        <FaPhone></FaPhone> 662656    
                    </div>
                    <div style={{marginTop: '10px', border: '1px solid black'}}>
                        <FaStar style={{color: 'goldenrod'}}></FaStar> Customer    
                    </div>
                    
                </div>
                
                <div className="column-das start-content-das" style={{flexDirection: 'column'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Button className="btn-das" style={{backgroundColor: 'purple', color: 'white', fontSize: '20px', fontWeight: 'bold'}}>
                        <Card>
                        <FaFilm style={{height: '25px', width: '30px', color: 'black'}}></FaFilm>
                            <CardBody>
                                
                                Watched
                            </CardBody>
                            <CardFooter style={{color: 'red'}}>
                                15
                            </CardFooter>
                        </Card>
                    </Button>
                    <Button className="btn-das" style={{backgroundColor: 'black', color: 'white', fontSize: '20px', fontWeight: 'bold'}}
                        onClick={handleReview}>
                        <Card>
                            <FaPen style={{color: 'pink'}}></FaPen>
                            <CardBody>
                                Reviews
                            </CardBody>
                            <CardFooter style={{color: 'green'}}>
                                5
                            </CardFooter>
                        </Card>
                    </Button>
                    <Button className="btn-das" style={{backgroundColor: 'maroon', color: 'white', fontSize: '20px', fontWeight: 'bold'}}>
                        <Card>
                            <FaStar style={{color: 'gold'}}></FaStar>
                            <CardBody>
                                Ratings
                            </CardBody>
                            <CardFooter style={{color: 'blue'}}>
                                6
                            </CardFooter>
                        </Card>
                    </Button>
                    <Button className="btn-das" style={{backgroundColor: 'aqua', color: 'white', fontSize: '20px', fontWeight: 'bold'}}>
                        <Card>
                            <FaHeart style={{color: 'darkred'}}></FaHeart>
                            <CardBody>
                                Favorites
                            </CardBody>
                            <CardFooter style={{color: 'black'}}>
                                6
                            </CardFooter>
                        </Card>
                    </Button>
                    </div>
                    
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    {review && (
                        < ReviewList />
                    )}
                    </div>
                    
                    
                </div>
                
            </div>
        </div>
    );
}

export default Dashboard;