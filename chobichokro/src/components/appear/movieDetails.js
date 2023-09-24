import React, { useState, useEffect  } from 'react'

import styled from '@emotion/styled';
import ReactPlayer from 'react-player'
// import 'font-awesome/css/font-awesome.min.css'
import { Link } from "react-router-dom";
import muteImage from '../../assets/muted.png'
import unmuteImage from '../../assets/unmuted.png'
import { useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaWatchmanMonitoring, FaEye } from 'react-icons/fa';
import ticketImage from '../../assets/two-yellow-tickets_1101-56.jpg'
import Navbar from '../navbar';
import { CardBody } from 'reactstrap';
import { Card } from 'react-bootstrap';
import speakerImage from '../../assets/speaker.jpg'
import { Button } from 'bootstrap';
import TicketBooking from './TicketBooking';
import SeatBooking from '../theatre/SeatBooking';
import reelImg from '../../assets/reel.jpg'
import { ReelBook } from '../theatre/ReelBook';

const MovieDetails = (props) => {
    const [mute, setMute] = useState(true);
    const location = useLocation()
    const {value} = useParams()
    const token = location.state?.token || ''
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
    const category = location.state?.category
    const theatreId = location.state?.theatreId || ''
    const theatreName = location.state?.theatreName || ''
    const status = location.state?.status || ''

    console.log("STatus ", status)
    console.log("Theatre Name: ", theatreName)

    console.log("MOVie NAme", name)

    console.log("Category: ", category)

    const goReview = (id) => {
        console.log("Review id", id)
        return navigate('/movie/review/'+id)//<Link to={'/movie/review/'+id} />
    
    }
    const handleReviewClick = () => goReview(props.id);

    const genreString = genre.map((genreItem) => genreItem).join(' ');
    const allCasts = cast.map((cst) => cst).join(', ');
    console.log(genreString)


    //handle the book tickets button
    const [booking, getBooking] = useState(false);
    const handleBooking = () => {
        getBooking(true);
    }

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
        } catch(e) {
            console.log("Error: ", e)
        }
    }

    const [theatre, setTheatre] = useState('');
    const hanldleTheatre = (theatre) => {
        setTheatre(theatre)
    }
    const [hall, setHall] = useState('');
    const handleHall = (hall) => {
        setHall(hall);
    }

    const [show, setShow] = useState('')
    const handleShow = (show) => {
        setShow(show);
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
                
                <Card>
                    <CardBody style={{color: 'white', fontWeight: 'bold'}}>
                        {genreString}
                    </CardBody>
                    <h4 style={{color: 'red'}}>Casts</h4>
                    <CardBody style={{color: 'aqua', fontWeight: 'bold'}}>
                        {allCasts}
                        
                    </CardBody>
                    <h4>Director: {director}</h4>
                    <h5 style={{color: 'white'}}>Release Date- {releaseDate.substring(0, 10)}</h5>
                </Card>
                <Description>
                    {description}
                </Description>

                {(theatreName!='') ? (
                    <div>
                        
                    </div>
                ) : (
                    
                    <div>
                        
                        {category==='ticket' ? (
                     <BookTicket onClick={handleBooking}>
                     <img src={ticketImage} alt="ticket" style={{height: '40px', width: '40px'}} />
                     {/* <FaTicketAlt></FaTicketAlt> */}
                     <span >BOOK TICKETS</span>
                     
                 </BookTicket>
                ): (
                    <BookTicket onClick={handleReelBooking}>
                    <img src={reelImg} alt="ticket" style={{height: '40px', width: '40px'}} />
                    {/* <FaTicketAlt></FaTicketAlt> */}
                    <span >BOOK REELS</span>
                    
                    </BookTicket>
                )}
                    
                    
                <BookTicket onClick={handleReviewClick}>
                        {/* <img src={ticketImage} alt="ticket" style={{height: '40px', width: '40px'}} /> */}
                        <FaEye style={{height: '30px', width: '30px', marginRight: '10px'}}></FaEye>
                        <span >REVIEWS</span>
                    </BookTicket>
                    </div>
                ) }
                
                
            </Details>
            {(theatreName!='') ? (
                <div style={{marginTop: '150px', color: 'yellowgreen'}}>
                    <h2 style={{color: 'lavender'}}>Theatre Name: {theatreName}</h2>
                    <h2>Total Footfalls: {footFalls}</h2>
                    <h2>Total Net collection: {footFalls*100}</h2>
                    <Details>
                    <BookTicket onClick={handleReviewClick}>
                        {/* <img src={ticketImage} alt="ticket" style={{height: '40px', width: '40px'}} /> */}
                        <FaEye style={{height: '30px', width: '30px', marginRight: '10px'}}></FaEye>
                        <span >REVIEWS</span>
                    </BookTicket> 
                    </Details>
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

        {booking && (
            <div>
                <Card style={{backgroundColor: 'purple'}}>
                    <CardBody>
                        <h5>{name}</h5>
                    </CardBody>
                </Card>
                
                
                
                <h5>Theatre: {<TicketBooking onSelectedOptions = {hanldleTheatre}  name={"Theatre"} val1={"Mothihar"} val2={"Katakhali"} val3={"High-Tech_park"} />}</h5>
                <h5>Hall: {<TicketBooking onSelectedOptions = {handleHall} name={"Hall"} val1={"Hall 1"} val2={"Hall 2"} val3={"Hall 3"} />}</h5>
                <h5>Show: {<TicketBooking onSelectedOptions = {handleShow} name={"Show"} val1={"12:30 pm"} val2={"3:30 pm"} val3={"6:30 pm"} />}</h5>
                <SeatBooking theatre={theatre} hall={hall} show={show}/>

                {console.log("Theatre: ", theatre)}
                {console.log("Hall: ", hall)}
                {console.log("Show: ", show)}

            </div>
        )}
        { reelBooking && (
            <div style={{marginTop: '20px', marginLeft: '250px'}}>
                < ReelBook mmovieName={name} theatreId={theatreId} theatreName={theatreName}/>
            </div>
        )}
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
    border-radius: 10px;
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