import React, { useState } from "react";
import Navbar from "../navbar";
import '../distributor/DistributorPage.css'
import { Button, Card } from "react-bootstrap";
import { CardBody } from "reactstrap";
import './TheatrePage.css'
import SeatBooking from "./SeatBooking";
import NewShow from "./show/NewShow";
import ShowList from "./show/ShowList";
import { RunningShow } from "./show/RunningShow";
import { useLocation } from "react-router-dom";
import Login from "../Login";
import TheatreLogin from './TheatreLogin'
import TicketBooking from "../appear/TicketBooking";
import ReelStatus from "./ReelStatus";
const theatreImg = require('../../assets/theatre-studio-01.jpg');


function TheatrePage() {

    const [ticket, setTicket] = useState(false);
    const location = useLocation();
    
    if (localStorage.getItem('token')==null) {
        
        const accessToken = location.state?.token || '';
    
        localStorage.setItem('token', accessToken); 
    }
    const isAuthenticated = !!localStorage.getItem('token');

    const [show, setShow] = useState(false);
    const [runningShow, setRunningShow] = useState(true);
    const [upcomingShow, setUpcomingShow] = useState(false)
    const [reel, setReel] = useState(false)
    const handleTicket = () => {
        setTicket(true);
        setShow(false);
        setRunningShow(false)
        setUpcomingShow(false)
        setReel(false)
    }
    const handleShow = () => {
        setTicket(false);
        setShow(true);
        setRunningShow(false);
        setUpcomingShow(false)
        setReel(false)
    }
    const handleRunningShow = () => {
        setTicket(false);
        setShow(false);
        setRunningShow(true);
        setUpcomingShow(false)
        setReel(false)
    }

    const handleUpcomingShow = () => {
        setTicket(false);
        setShow(false);
        setRunningShow(false);
        setUpcomingShow(true)
        setReel(false)
    }

    const handleReel = () => {
        setTicket(false);
        setShow(false);
        setRunningShow(false);
        setUpcomingShow(false)
        setReel(true)
    }

    const [hall, setHall] = useState('');
    const handleHall = (hall) => {
        setHall(hall);
    }

    const [showTime, setShowTime] = useState('')
    const handleShowTime = (show) => {
        setShowTime(show);
    }
    const [movieName, setMovieName] = useState('')
    const handleMovie = (movie) => {
        setMovieName(movie);
    }

    //get Current Date
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString(undefined, options);


  if (!isAuthenticated)
    return(
        <div>
            <div>
            <Navbar />
            </div>
            <div style={{marginTop: '60px'}}>
            <Login value={'theatre'} />
            {/* <TheatreLogin /> */}
            </div>
            
        </div>
    );

    else
        return (
            <div className="container">
                
            <div className="row">
                {/* <div className="column">Row 1 - Column 1</div> */}
                {/* <div className="column">Row 1 - Column 2</div> */}
                <Navbar />
                <img src={theatreImg}  style={{ position: 'absolute', // Position the video absolutely within the div
          top: 0,
          left: 0,
          width: '100%',
          height: 'auto',
          objectFit: 'cover', // Maintain aspect ratio and cover entire div
          zIndex: -1, }}/>
                
            </div>
            
            <div className="row" style={{marginTop: '100px'}}>
            
                <div className="column">
                    <Button className="btn" onClick={handleRunningShow}>
                        <Card>
                            <Card.Body>
                                Running
                            </Card.Body>
                        </Card>
                    </Button>
                </div>
                <div className="column">
                    <Button className="btn" style={{backgroundColor: 'maroon'}}
                    onClick={handleShow}>
                        <Card>
                            <Card.Body>
                                Add Show
                            </Card.Body>
                        </Card>
                    </Button>
                </div>
                <div className="column">
                    <Button className="btn"
                    onClick={handleTicket}>
                        <Card>
                            <Card.Body>
                                Ticket
                            </Card.Body>
                        </Card>
                    </Button>
                </div>
                <div className="column">
                    <Button className="btn" style={{backgroundColor: 'maroon'}}
                    onClick={handleUpcomingShow}>
                        <Card>
                            <Card.Body>
                                Upcoming
                            </Card.Body>
                        </Card>
                    </Button>
                </div>
                <div className="column">
                    <Button className="btn" onClick={handleReel}>
                        <Card>
                            <Card.Body>
                                Reel
                            </Card.Body>
                        </Card>
                    </Button>
                </div>
                {/* <div className="column">Row 2 - Column 2</div> */}
            </div>
            {
                (ticket &&
                <div className="row">
                    <div>
                {/* <Card style={{backgroundColor: 'purple'}}>
                    <CardBody>
                        <h5>name</h5>
                    </CardBody>
                </Card> */}
                
                
                
                <h5>Theatre: </h5>
                <h5>{<TicketBooking onSelectedOptions = {handleMovie} name={"Movie"} val1={"Movie 1"} val2={"Movie 2"} val3={"Movie 3"} />}</h5>
                <h5>{<TicketBooking onSelectedOptions = {handleHall} name={"Hall"} val1={"Hall 1"} val2={"Hall 2"} val3={"Hall 3"} />}</h5>
                <h5> {<TicketBooking onSelectedOptions = {handleShowTime} name={"Show"} val1={"12:30 pm"} val2={"3:30 pm"} val3={"6:30 pm"} />}</h5>
                <SeatBooking theatre={''} hall={hall} show={showTime} movie={movieName} date={formattedDate}/>
                {console.log("Show: ", showTime)}
                {console.log("Movie: ", movieName)}

            </div>
           
                </div>)
                
            }
            {
                (show &&
                    <div className="row">
                    <NewShow />
                </div>)
            }
            {
                (reel && <div> < ReelStatus /> </div>)
            }
            {
                (runningShow &&
                    <div className="row">
                    <RunningShow name={"Running"} status={"Released"} cat={'ticket'}/>
                </div>)
            }
            {
                (upcomingShow &&
                    <div className="row">
                    <RunningShow name={"Upcoming"} status={"upcoming"} cat={'reel'}/>
                </div>)
            }
            
            </div>
        );
   
   
}


export default TheatrePage;