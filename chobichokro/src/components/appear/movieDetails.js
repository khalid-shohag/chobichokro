import React, { useState, useEffect  } from 'react'
import { Button } from 'reactstrap';
// import Modal from 'react-bootstrap/Modal';
import styled from '@emotion/styled';
import ReactPlayer from 'react-player'
// import 'font-awesome/css/font-awesome.min.css'
import { Link } from "react-router-dom";
import muteImage from '../../assets/muted.png'
import unmuteImage from '../../assets/unmuted.png'
import { useLocation, useNavigate } from 'react-router-dom';
import { useParams, NavLink } from 'react-router-dom';
import axios from 'axios';
import { FaWatchmanMonitoring, FaEye, FaEnvelope, FaPlus } from 'react-icons/fa';
import ticketImage from '../../assets/two-yellow-tickets_1101-56.jpg'
import Navbar from '../navbar';
import { CardBody } from 'reactstrap';
import { Card } from 'react-bootstrap';
import speakerImage from '../../assets/speaker.jpg'

import TicketBooking from './TicketBooking';
import SeatBooking from '../theatre/SeatBooking';
import reelImg from '../../assets/reel.jpg'
import { ReelBook } from '../theatre/ReelBook';
import Footer from '../Footer';
import 'reactjs-popup/dist/index.css';
import Popup from "reactjs-popup";
import ReviewPopUp from './ReviewPopUp';

const MovieDetails = (props) => {
    const [mute, setMute] = useState(true);
    const location = useLocation()
    const {value} = useParams()
    const token = location.state?.token || ''
    const theatreMovieName = location.state?.id || ''
    const navigate = useNavigate()

    console.log("TOken Theatre", token)
    console.log('Ayuujnxfdn', `Bearer ${token}`)

    console.log("Values: ",location.state.id)

    const [movie, setMovie] = useState(null);
    useEffect(() => {
        const getMovie = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/movies/get/movie/${location.state.id}`);
                setMovie(response.data);
            } catch (error) {
                console.log("Errors: ", error);
            }
        };

        getMovie();
    }, [location.state.id]);



    

    // const category = location.state?.category || 'ticket'
   
    const name = movie?.movieName || ''; 
    const id = movie?.id || '';
    const description = movie?.description || '';
    const trailerLink = movie?.trailerLink || '';
    const genre = movie?.genre || []
    const cast = movie?.cast || []
    const director = movie?.director || ''
    const releaseDate = movie?.releaseDate || ''
    const movieStatus = movie?.status || ''
    const category = location.state?.category
    const theatreId = location.state?.theatreId || ''
    const theatreName = location.state?.theatreName || ''
    const status = location.state?.status || ''
    // const allTheatre = location.state?.allTheatre || []
    const ticketBook = location.state?.ticketBook || []

    const [allTheatre, setAllTheatre] = useState([])
    //Extract Theatre List for a particular movie
    const getAllTheatre = async() => {
    console.log("\n\n\nI am at GETTHE\n\n\n")
    console.log('Name: ', theatreMovieName)
        const formData = new FormData()
        formData.append('movieName', theatreMovieName)
        console.log("Form Data", formData.get('movieName'))
        console.log("-------------------------------------------------------")

        console.log( "movie name", theatreMovieName)
        console.log("-------------------------------------------------------")
        let url = `http://localhost:8080/api/audience/get_theater_list?movieName=${theatreMovieName}`
        try {

            const response = await axios.get(`http://localhost:8080/api/audience/get_theater_list?movieName=${theatreMovieName}`).then((response) => {

                    console.log("All Theatre RP", response)
                    setAllTheatre(response.data)
                })
            console.log('Theatre response', response)
        }
         catch(e) {
            console.log("Error data fetching theatre", e)
        }
    }

    useEffect(() => {   
        getAllTheatre().then((value) => {
            console.log(value)
            console.log("All Theatre", allTheatre)
        })
    }, [])

    // Audiencce Login redirect info 
    const ticketToken = location.state?.ticketToken
    const audienceName = location.state?.audienceName
    const audienceEmail = location.state?.audienceEmail

    console.log('\n\n\nREDIRECT', audienceName, audienceEmail)

    console.log("All theatre Details", allTheatre)
    console.log("\n\n\nMovie Name Theatre: \n\n\n", theatreMovieName)

    console.log("STatus ", status)
    console.log("\n\nTheatre Name: ", theatreName)

    console.log("MOVie NAme", name, id)

    console.log("Category: ", category)

    const goReview = (id) => {
        console.log("Review id", id)
        return navigate('/movie/review/'+id)//<Link to={'/movie/review/'+id} />
    
    }
    const handleReviewClick = () => goReview(id);

    const [addReview, setAddReview] = useState(false)

    const handleAddReview = () => {
        // const movieDetails = {
        //     category: 'ticket',
        //     id: theatreMovieName,
        //     theatreName: theatreName,
        //     status: status,
        //     allTheatre: allTheatre
        // };
    
        // const customState = {
        //     locationPathname: location.pathname,
        //     movieDetails: movieDetails,
        // };
    
        setAddReview(true)
        
        // navigate('/audience_login', { state: customState });
    }

    const genreString = genre.map((genreItem) => genreItem).join(' ');
    const allCasts = cast.map((cst) => cst).join(', ');
    console.log(genreString)


    //handle the book tickets button
    const [booking, getBooking] = useState(false);
    const handleBooking = () => {

        const movieDetails = {
            category: 'ticket',
            id: theatreMovieName,
            theatreName: theatreName,
            status: status,
            allTheatre: allTheatre
        };
    
        const customState = {
            locationPathname: location.pathname,
            movieDetails: movieDetails,
        };
    
        getBooking(true);
        
        navigate('/audience_login', { state: customState });
        console.log("get back from login")
    
        // Assuming getBooking is some action you want to dispatch
        
    
    }

    useEffect(() => {
        if(ticketBook==='yes')
            getBooking(true)
    }, [])

    const [reelBooking, setReelBooking] = useState(false)
    const handleReelBooking = async () => {
        console.log('Clicked')
        setReelBooking(true);
        getBooking(false)

        console.log('AXN', `Bearer ${token}`)

        
        
        try{
            const response = await axios.post(`http://localhost:8080/api/theater/want_to_buy/${name}`,{}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    
                }
                
            })
            console.log('Successfull ', response.data)
            // alert('Successfully added to your cart')
        } catch(e) {
            console.log("Error: ", e)
            // alert(`Network Error, can't add to your cart`)
        }
    }

    const [theatre, setTheatre] = useState('');
    const hanldleTheatre = async (theatre) => {
        console.log("Theatre: ", theatre)
        setTheatre(theatre)
        const formData = new FormData()
        formData.append('movieName', theatreMovieName)
        formData.append('theaterId', theatre)
        // alert("Theatre: "+theatre)

        let url = `http://localhost:8080/api/audience/get_showtime_list?movieName=${theatreMovieName}&theaterId=${theatre}`
        try {
            await axios.get(url).then((response) => {
                setShow(response.data)
                // alert("Show: "+response.data)
                setShowDate(response.data)
            }).catch(e => console.log(e))
        }catch (e) {
            console.log("Error: ", e)
        }
    }
    const [hall, setHall] = useState('');
    const handleHall =async (hall) => {

        setHall(hall);
        // alert("Hall: "+hall)
        let data = new FormData();
        data.append('movieName', theatreMovieName);
        data.append('theaterId', theatre);
        data.append('date', show);
        data.append('hallNumber', hall);
        //http://localhost:8080/api/audience/get_schedule_id?movieName=string&theaterId=string&date=string&hallNumber=0
        let url = `http://localhost:8080/api/audience/get_schedule_id?movieName=${theatreMovieName}&theaterId=${theatre}&date=${show}&hallNumber=${hall}`
        const response = await axios.get(url).then((value) => {
            console.log("Schedule ID: ", value.data)
            setScheduleId(value.data)
            // alert("Schedule ID: "+value.data)
        }).catch(e => console.log(e))


    }

    const [show, setShow] = useState('')
    const handleShow = async (show) => {
        setShow(show);
        let data = new FormData();
        data.append('movieName', theatreMovieName);
        data.append('theaterId', theatre);
        data.append('date', show);
        let url = `http://localhost:8080/api/audience/get_hall_list?movieName=${theatreMovieName}&theaterId=${theatre}&date=${show}`
        const response = await axios.get(url).then((value) => {
            console.log("Hall: ", value.data)
            setScreenNum(value.data)
            // alert("Hall: "+value.data)
        })


    }


    const [footFalls, setFootFalls] = useState(0)

    const getTheatreMovieAnalysis = async(theatreName, myMovie) => {
        console.log("kmaol" , myMovie)
        if (theatreName != '') {
            console.log(theatreName)
            console.log(myMovie)
        try {
            let url = `http://localhost:8080/api/theater/get/analysis/${myMovie}`
            console.log(url)
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    
                }
            }).then((value) => {
                console.log("data value")
                console.log(value)
                setFootFalls(value.data.body)
            })
            // response.then()
           
        } catch(e) {
            console.log("Error: ", e)
        }
    }
    }

    useEffect( () => {
        console.log("GET TGE EFFE", name)
        
            getTheatreMovieAnalysis(theatreName, name)
        
    }, [])


    const showDateSet = new Set()
    const screenNumSet = new Set()

    let [screenNum, setScreenNum] = useState([])
    let [showDate, setShowDate] = useState([])
    const getShowDate = async () => {
        const formData = new FormData();
        console.log('Form Date', id, theatre)
        formData.append('movieName', id)
        formData.append('theaterId', theatre) 
        let response = null
        try {
            response = await axios.get(`http://localhost:8080/api/dropdown/movie/theater?movieName=${theatreMovieName}&theaterId=${theatre}`)
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
    }, [id])

    const [book, setBook] = useState(false)
    const [scheduleId , setScheduleId] = useState('')
    const handleBook = async () => {
       // alert("booked button clicked")
        setBook(true)

    }



    // const name = movie.movieName
    // const id = movie.id
    // const description = movie.description
    // const trailerLink = movie.trailerLink
    // console.log("name", name)
    
    return (
        <div>
            <Navbar />
        <Container style={{marginTop: '65px'}}>
            <Details>
                <h1>
                    {name}
                </h1>
                
                <Card style={{background: 'white', borderRadius: '5px'}}>
                    <CardBody style={{fontWeight: 'bold'}}>
                        {genreString}
                    </CardBody>
                    <h4 style={{color: 'red'}}>Casts</h4>
                    <CardBody style={{color: 'seagreen', fontWeight: 'bold'}}>
                        {allCasts}
                        
                    </CardBody>
                    <h3>Director: {director}</h3>
                    <h5 >Release Date- {releaseDate.substring(0, 10)}</h5>
                </Card>
                <Description>
                    {description}
                </Description>

                {(theatreName!='') ? (
                    <div>
                        
                    </div>
                ) : (
                    
                    <div>
                        
                        {category==='ticket' ? ( <div>
                     <BookTicket onClick={handleBooking}>
                     <img src={ticketImage} alt="ticket" style={{height: '40px', width: '40px'}} />
                     {/* <FaTicketAlt></FaTicketAlt> */}
                     <span >BOOK TICKETS</span>
                     
                 </BookTicket>
                 <div style={{display: 'flex'}}>
                    <BookTicket onClick={handleReviewClick}>
                    {/* <img src={ticketImage} alt="ticket" style={{height: '40px', width: '40px'}} /> */}
                    <FaEye style={{height: '30px', width: '30px', marginRight: '10px'}}></FaEye>
                    <span >REVIEWS</span>
                
                    </BookTicket>
                    {/* <BookTicket onClick={handleAddReview} style={{marginLeft: '1%'}}> */}
                    {/* <img src={ticketImage} alt="ticket" style={{height: '40px', width: '40px'}} /> */}
                    {/* <FaEye style={{height: '30px', width: '30px', marginRight: '10px', marginLeft: '3%'}}></FaEye> */}
                    {/* <FaPlus style={{height: '30px', width: '30px', marginRight: '10px'}}></FaPlus>
                    <span >ADD REVIEWS</span>
                
                    </BookTicket> */}
                    <ReviewPopUp movieName={name} request_token={ticketToken}/>
                    </div>
                    </div>
                ): (category==='reel') ? (
                    <BookTicket onClick={handleReelBooking}>
                    <img src={reelImg} alt="ticket" style={{height: '40px', width: '40px'}} />
                    {/* <FaTicketAlt></FaTicketAlt> */}
                    <span >BOOK REELS</span>
                    
                    </BookTicket>
                ): (<div></div>)}
                    
                    
                
                    </div>
                ) }
                
                
            </Details>
            {( theatreName!='' && movieStatus==='running' ) ? (
                <div style={{marginTop: '150px', color: 'yellowgreen'}}>
                    <h2 style={{color: 'lavender'}}>Theatre Name: {theatreName}</h2>
                    <h2>Total Footfalls: {footFalls}</h2>
                    <h2>Total Net collection: {footFalls*100}</h2>
                    
                </div>
            ): (
                <Trailer>
                <MovieTrailerPlayer>
                    <ReactPlayer id='MovieTrailer' url={trailerLink} playing={true}  loop={true} poster={true} muted={mute} controls={false} width='100%' height='100%' />
                   { console.log("Trailer: ",trailerLink)}
                    <UnMute onClick={() => setMute(!mute)}>
                        <img src={speakerImage} alt="mute" style={{height: '25px', width: '30px', borderRadius: '25px'}}/>
                    </UnMute>
                </MovieTrailerPlayer>
               </Trailer>
            )}
            
        </Container>

        {addReview && (<AddAudienceReview />)}

        {booking && (
            <div style={{background: 'darkkhaki'}}>
                <Card style={{backgroundColor: 'navy'}}>
                    <CardBody>
                    {audienceName!=='' ? (
                    <div style={{display: 'flex', justifyContent: 'space-around', color: 'white'}}>
                        <h3>Audience Name: {audienceName}</h3>
                        <h3><FaEnvelope></FaEnvelope> {audienceEmail}</h3>
                    </div>
                ): (
                    <h1>
                        {name}
                    </h1>
                )}
                    </CardBody>
                </Card>

               

                
                
                
                {/* <h5>Hall: {<TicketBooking onSelectedOptions = {handleHall} name={"Hall"} val1={"Hall 1"} val2={"Hall 2"} val3={"Hall 3"} />}</h5>
                <h5>Show: {<TicketBooking onSelectedOptions = {handleShow} name={"Show"} val1={"12:30 pm"} val2={"3:30 pm"} val3={"6:30 pm"} />}</h5>
                <SeatBooking theatre={theatre} hall={hall} show={show}/> */}
                <div style={{display: 'flex'}}>
                <div style={{flex: 1, marginLeft: '220px'}}>
                    <h5>{<TicketBooking onSelectedOptions = {hanldleTheatre} name={"Theatre"} val = {allTheatre} stat={'yes'}/>}</h5>
                    </div>
                    {/* {
                        setTimeout(() => {
                            console.log("Show Date: ", showDate)
                            console.log("Screen Number: ", screenNum)
                        }, 2500)
                    } */}
                    <div style={{flex: 1}}>
                        <h5> {<TicketBooking onSelectedOptions = {handleShow} name={"Show"} val = {showDate} stat={'no'} />}</h5>
                    </div>

                    <div style={{flex: 1}}>
                        <h5>{<TicketBooking onSelectedOptions = {handleHall} name={"Hall"} val = {screenNum} stat={'no'} />}</h5>
                    </div>
                    
                    <div style={{flex: 1}}>
                        <Button onClick={handleBook} style={{backgroundColor: 'yellowgreen'}}>
                            Book
                        </Button>

                    </div>
                </div>

                {console.log("Theatre: ", theatre)}
                {console.log("Hall: ", hall)}
                {console.log("Show: ", show)}

            </div>
        )}

                {book && (
                <SeatBooking theatre={theatre} hall={hall} show={show} movie={theatreMovieName} date={show} token ={ticketToken} scheduleId={scheduleId}/>
                )}
        {/* { reelBooking && (
            <div style={{marginTop: '20px', marginLeft: '250px'}}>
                < ReelBook mmovieName={name} theatreId={theatreId} theatreName={theatreName}/>
            </div>
        )} */}

          

        </div>
    )
}

export default MovieDetails

const Container = styled.div`
    display: flex;
    margin-top: 20px;
    height: 100%;
    width: 100%;
    background: #0c111b;
    border-radius: 3px;
    overflow: hidden;

    @media (max-width: 900px) {
        flex-direction: column-reverse;
    }
`

const Details = styled.div`
    width: 40%;
    padding: 0px 36px 0px;

    @media (max-width: 900px) {
        width: 100%;
    }
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249, 0.6);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    width: 80%;
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249, 0.8);

    @media (max-width: 900px) {
        width: 100%;
    }
`

const BookTicket = styled.button`
    margin-top: 30px;
    margin-bottom: 30px;
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px; 
    display: flex;
    align-items: center;
    height: 56px;
    background: white;
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(249, 249, 249);
    }
`

const Trailer = styled.div`
    width: 60%;

    @media (max-width: 900px) {
        width: 100%;
    }
`

const MovieTrailerPlayer = styled.div`
    
    position: relative;
    padding-top: 56.25%;
    
    #MovieTrailer {
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
    }
`

const UnMute = styled.button`
    border-radius: 50%;
    padding: 8px 8px;
    background: white;
    position: absolute;
    left:5px;
    bottom:5px;

    &: hover {
        background: rgb(249, 249, 249);
    }
`




export function AddAudienceReview() {
  return (
    <Popup contentStyle={{ background: 'lavender', width: 'auto', borderRadius: '10px' }} trigger={<button >Review</button>}
    modal nested> 
    {
        close => (
            <div>
            <form>
                <label>Amount</label>
                <input style={{marginLeft: '50px', color: 'black'}} type="text" placeholder="Enter Amount"  
                 />
            </form>
            <button style={{backgroundColor: 'greenyellow', borderRadius: '2px', marginTop: '10px', marginLeft: '120px'}} onClick=
                {() => {
                    
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

