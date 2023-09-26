import React, { useState, useEffect } from "react";
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
import axios from "axios";
import {render} from "@testing-library/react";
import 'reactjs-popup/dist/index.css';
import Popup from "reactjs-popup";
import Footer from "../Footer";
// import {delay} from "@reduxjs/toolkit/src/utils";

const theatreImg = require('../../assets/theatre-studio-01.jpg');


function TheatrePage() {

    const [ticket, setTicket] = useState(false);
    const location = useLocation();
    const token = location.state?.token || ''
    const name = location.state?.theatreName || ''
    const address = location.state?.address || ''
    const id = location.state?.id || ''

    console.log("\n\n\n\nTheatre Page: ", location.pathname)
    console.log('\n\n\nLocation state', location.state)


    console.log("Kothay token")
    console.log("Theatre DEtails: ", name, address, id)
    console.log("Token TTT: ", token)
    console.log('njfdjkn')
    
    
    const [show, setShow] = useState(false);
    const [runningShow, setRunningShow] = useState(true);
    const [upcomingShow, setUpcomingShow] = useState(false)
    const [newMovieShow, setNewMovieShow] = useState(false)
    const [reel, setReel] = useState(false)
    const [movies, setMovies] = useState([])
    
    // const [showDate, setShowDate] = useState([])
    // const [screenNo, setScreenNo] = useState([])

    const getAllTheatreMovies = async () => {
        try {
          const response = await axios.get('http://localhost:8080/api/theater/get/all_my_movie', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          setMovies(response.data)
        //   console.log("Running Movies: ", response.data)
        } catch (error) {
          console.log("Not getting Movies: ", error)
        }
    
      }

    
      useEffect(() => {
        getAllTheatreMovies().then(r => console.log("Movies: ", movies)).catch(e => console.log("Error: ", e))
      }, [])  

    console.log("Running Movies: ", movies)

    const handleTicket = () => {
        setTicket(true);
        setShow(false);
        setRunningShow(false)
        setUpcomingShow(false)
        setReel(false)
        setNewMovieShow(false)
    }
    const handleShow = () => {
        setTicket(false);
        setShow(true);
        setRunningShow(false);
        setUpcomingShow(false)
        setReel(false)
        setNewMovieShow(false)
    }
    const handleRunningShow = () => {
        setTicket(false);
        setShow(false);
        setRunningShow(true);
        setUpcomingShow(false)
        setReel(false)
        setNewMovieShow(false)
    }

    const handleUpcomingShow = () => {
        setTicket(false);
        setShow(false);
        setRunningShow(false);
        setUpcomingShow(true)
        setReel(false)
        setNewMovieShow(false)
    }

    const handleReel = () => {
        setTicket(false);
        setShow(false);
        setRunningShow(false);
        setUpcomingShow(false)
        setReel(true)
        setNewMovieShow(false)
    }

    const handleNewMovieShow = () => {
        setTicket(false);
        setShow(false);
        setRunningShow(false);
        setUpcomingShow(false)
        setReel(false)
        setNewMovieShow(true)
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

    const [book, setBook] = useState(false)
    const handleBook = () => {
        setBook(true)

    }

    const showDateSet = new Set()
    const screenNumSet = new Set()
    // const shwDate = []
    let [screenNum, setScreenNum] = useState([])
    let [showDate, setShowDate] = useState([])
    const getShowDate = async () => {
        const formData = new FormData();
        console.log('Form Date', movieName, id)
        formData.append('movieName', movieName)
        formData.append('theaterId', id) 
        let response = null
        try {
            response = await axios.get(`http://localhost:8080/api/dropdown/movie/theater?movieName=${movieName}&theaterId=${id}`)
            console.log("Show Date: ", response.data)
            // setShowDate(response.data.showtime)
            // setScreenNo(response.data.hallNumber)

            response.data.map((val) => {
                console.log("VAl", val)
                showDateSet.add(val.showtime)
                screenNumSet.add(val.hallNumber)
            })
            showDate = []
            showDateSet.forEach((val) => {
                showDate.push(val)
            })
            screenNum = []
            screenNumSet.forEach((val) => {
                screenNum.push(val)
            })

        } catch(e) {
            console.log("Error getting Schedule ID: ", e)
        }
        console.log("\n\\n\n\n\n\n\n")
        console.log(response.data)
        console.log("\n\\n\n\n\n\n\n")
        console.log("Show DATE", showDate)
        console.log('\n\n')
        console.log('HAll\n\n', screenNum)
        
    }
    useEffect(() => {
        getShowDate().then(() => {
            console.log("data fetched, now work the next part")
            setScreenNum(screenNum)
            console.log("screen number change kore felchi");
            setShowDate(showDate)

        })
    }, [movieName])


    //get Current Date
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString(undefined, options);

    const [amount, setAmount] = useState('')


        return (
            <div >
            <div className="container">
                
            <div className="row">
                
                <Navbar />
                <img src={theatreImg}  style={{ position: 'absolute', 
          top: 0,
          left: 0,
          width: '100%',
          height: 'auto',
          objectFit: 'cover', 
          zIndex: -1, }}/>
                
            </div>
            <h2 style={{color: 'yellowgreen', marginLeft: '650px', marginTop: '100px', fontWeight: 'bold', fontStyle: 'oblique'}}>{name.toUpperCase()}</h2>
            {addTheatreMoney(amount, setAmount, token)
            }
            {/*{console.log("Amount", amount)}*/}
            <div className="row" style={{marginTop: '10px'}}>
               
                
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
                    <Button className="btn"
                    onClick={handleNewMovieShow}>
                        <Card>
                            <Card.Body>
                                Buy Reel
                            </Card.Body>
                        </Card>
                    </Button>
                </div>
                <div className="column">
                    <Button className="btn" style={{backgroundColor: 'maroon'}} onClick={handleReel}>
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
                ticket &&
                <div className="row">
                    <div>
                {/* <Card style={{backgroundColor: 'purple'}}>
                    <CardBody>
                        <h5>name</h5>
                    </CardBody>
                </Card> */}




                <div style={{display: 'flex'}}>
                    <div style={{flex: 1, marginLeft: '220px'}}>
                    <h5>{<TicketBooking onSelectedOptions = {handleMovie} name={"Movie"} val = {movies} stat={'yes'}/>}</h5>
                    </div>
                    {
                        setTimeout(() => {
                            console.log("Show Date: ", showDate)
                            console.log("Screen Number: ", screenNum)
                        }, 2500)
                    }
                    <div style={{flex: 1}}>
                        <h5>{<TicketBooking onSelectedOptions = {handleHall} name={"Hall"} val = {screenNum} stat={'no'} />}</h5>
                    </div>
                    <div style={{flex: 1}}>
                        <h5> {<TicketBooking onSelectedOptions = {handleShowTime} name={"Show"} val = {showDate} stat={'no'} />}</h5>
                    </div>
                    <div style={{flex: 1}}>
                        <Button onClick={handleBook} style={{backgroundColor: 'yellowgreen'}}>
                            Book
                        </Button>

                    </div>

                 </div>

   

                 {book && (
                <SeatBooking theatre={id} theatreName={name} hall={hall} show={showTime} movie={movieName} date={showTime} token ={token}/>
                )}



            </div>

                </div>
                
            }
            {
                (show &&
                    <div className="row">
                    <NewShow token={token}/>
                </div>)
            }
            {
                (reel && <div> < ReelStatus token={token}/> </div>)
            }
            {
                (runningShow &&
                    <div className="row">
                    <RunningShow token={token} name={"Running"} status={"running_movie"} cat={'ticket'} theatreName={name} theatreId={id}/>
                </div>)
            }
            {
                (upcomingShow &&
                    <div className="row">
                    <RunningShow token={token} theatreName={name} theatreId={id} name={"Upcoming"} status={"upcoming_movie"} cat={'ticket'}/>
                </div>)
            }
            {
                (newMovieShow &&
                    <div className="row">
                    <RunningShow token={token} theatreName={name} theatreId={id} name={"Want to Buy"} status={"new_movie"} cat={'reel'}/>
                </div>)
            }

            
            
            </div>

            
            
            </div>
        );
   
   
}


export default TheatrePage;



function addTheatreMoney(amount, onAmount, token) {
    const addMoney = async (amount) => {
        try {
            let url = `http://localhost:8080/api/user/add_money?amount=${amount}`
            const response = await axios.post(url, {}, {
                headers: {
                    Authorization : `Bearer ${token}`
                }
            }).then((response) => {
                console.log("Response: ", response)
            })
        } catch (error) {
            console.log("Error: ", error)

        }
    }
    // const [amount, setAmount] = useState('')
    return(
        <Popup contentStyle={{ background: 'lavender', width: 'auto', borderRadius: '10px' }} trigger={<button style={{width: '150px', borderRadius: '5px', height: 'auto', marginTop: '10px', backgroundColor: 'lightcoral', color: 'white', fontWeight: 'bold', fontStyle: 'oblique', fontSize: '22'}}>Add Money</button>} position="right center"
            modal nested> 
            {
                close => (
                    <div>
                    <form>
                        <label>Amount</label>
                        <input style={{marginLeft: '50px', color: 'black'}} type="text" placeholder="Enter Amount"  onChange={(e) => {
                            onAmount(e.target.value)
                            
                        }} />
                    </form>
                    <button style={{backgroundColor: 'greenyellow', borderRadius: '2px', marginTop: '10px', marginLeft: '120px'}} onClick=
                        {() => {
                            addMoney(amount).then((value) => {
                                console.log("Amount: ", onAmount)
                                console.log("Value: ", value)
                            })
                            close()
                        }}>
                            Done
                            
                    </button>
                    </div>
                    
                )

            } 
            </Popup>
    );
}