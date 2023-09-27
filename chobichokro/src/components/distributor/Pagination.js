import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import {Button} from 'react-bootstrap'
import {Link, useNavigate} from "react-router-dom";

function Pagination(props) {

  console.log('\n\n\nSTATUS\n\n\n', props.status)
 

  const navigate = useNavigate()
  const goReview = (id) => {
    console.log("Review id", id)
    return navigate('/movie/review/'+id, {state: {reviews, movieName: props.name}})//<Link to={'/movie/review/'+id} />

  }
  const goBookingList = (id) => {
    return navigate('/movie/pre-booking/hall/list/'+id, {state: {token: props.token, title: 'Pre Booking List', name: props.name, requestName: 'pending_movie_request'}})
  }
  const goRunningShowList = (id, theatreList) => {
    return navigate('/movie/running-show/list/'+id, {state: {theatreList, movieName: props.name}})
  }
  const goConfirmBookingList = (id) => {
    return navigate('/movie/confirm-booking/hall/list/'+id, {state: {token: props.token, title: 'Confirm Booking List', name: props.name, requestName: 'approve_movie_request'}})
  }


    const posterImageLink = props.imageSrc
    console.log(props.name, " ", posterImageLink)
 
    let poster = posterImageLink.replace("images//", "")

    console.log("Image Link", "images/\\posterImageLink".replace("images/\\", ""))
    if (poster.includes("images/\\")) {
      poster = posterImageLink.replace("images/\\", "")
      console.log("Poster", poster)
    }
    const posterImageUrl = `http://localhost:8080/api/movies/get/${poster}`;
    // setImageSrc(posterImageLink)
  console.log('Image URL', posterImageUrl)

  const getImage = () => {
    try{
      const response = axios.get(posterImageUrl)
    } catch (error) {
      console.log("Error getting image", Error)
    }
  }

    const genre = props.genre
    const cast = props.cast
    const director = props.director

    const genreString = genre.map((genreItem) => genreItem).join(' ');
     const castString = cast.map((cast) => cast).join(', ') || ''
    const directorString = director.map((director) => director).join(', ')
    const handleReviewClick = (reviews) =>  goReview(props.id, reviews);
    const handleBookingClick = () => goBookingList(props.id);
    const handleRunningShowClick = (theatreList) => goRunningShowList(props.id, theatreList)
    const handleConfirmBookingClick = () => goConfirmBookingList(props.id)

    const [movieAnalysis, setMovieAnalysis] = useState('')
    const [reviews, setReviews] = useState([])
    const [theatreList, setTheatreList] = useState([])

    const getMovieAnalysis = async () => {

      console.log("Movie Analysis ID: ", props.id)

      try {
        const response = await axios.get(`http://localhost:8080/api/distributor/get/analysis/${props.id}`, {
          headers: {
            Authorization: `Bearer ${props.token}`
          }}).then((response) => {
            console.log("Movie Analysis: ", response.data)
            setMovieAnalysis(response.data)
            setReviews(response.data.reviews)
            setTheatreList(response.data.theaters)
          })
      } catch(e) {
        console.log("Error fetching movie analysis", e)
      }
        
    }

    useEffect(() => {
      console.log("\n\nUSE EFFECT\n\n")
      if (props.status==='released' || props.status==='running')
        getMovieAnalysis()
    }, [props.id])

     if (props.status==='released') {
       return (


           <div>
             <Card style={{width: '600px', height: 'auto', backgroundColor: 'white', borderRadius: '8px'}}>
               <CardHeader style={{color: 'black', fontWeight: 'bold'}}>{props.name}</CardHeader>
               <CardBody>
                 {/* console.log({props.imageSrc}); */}
                 <div style={{display: 'flex'}}>
                   <div style={{flex: '1'}}>
                     <img src={posterImageUrl} alt='Poster' style={{height: '200px', width: '200px'}}/>
                   </div>
                   <div style={{flex: 1}}>
                     <h3>Genre: {genreString}</h3>
                     <h3>Casts: {castString}</h3>
                     <h3>Director: {directorString}</h3>
                     <h3>Trailer: <a href={props.link} style={{color: 'darkred'}}>Trailer</a></h3>
                     <h3>Release Date: {props.date.slice(0, 10)}</h3>

                   </div>

                 </div>

                 {/*<div>{genreString}</div>*/}
                 <div style={{
                   border: '3px solid black',
                   fontStyle: 'italic',
                   fontWeight: 'bolder',
                   color: 'rebeccapurple'
                 }}>{props.description}</div>
                 {/*<div><a href={props.link} style={{color: 'darkred'}}>Trailer</a></div>*/}
                 {/*<div>{props.status}</div>*/}
                 {/*<div>{props.date.slice(0, 10)}</div>*/}
                 <div>
                   <h3>Total Collection: {movieAnalysis.totalRevenue} bdt.</h3>
                   <h3>Total Footfalls: {movieAnalysis.totalTicket}</h3>
                   <h3>Total Screening: {movieAnalysis.totalScreening}</h3>
                   <h3>Total Theatre: {movieAnalysis.totalTheater}</h3>
                   <h3>Average Review: {movieAnalysis.averageSentiment}</h3>
                   <div style={{display: 'flex'}}> 
                     <div style={{flex: 1}}>
                       <h1>Verdict - </h1>
                     </div>
                     <div style={{
                       marginRight: '250px',
                       marginTop: '10px',
                       fontSize: '18',
                       fontWeight: 'bold',
                       color: 'darkred'
                     }}>
                       {movieAnalysis.movieVerdict}
                     </div>

                   </div>
                   <Button style={{background: 'transparent', height: '40px', marginLeft: '0px'}}
                           onClick={ () => handleReviewClick(reviews)}>Reviews</Button>

                 </div>


               </CardBody>
             </Card>
           </div>
       );
     }
     else if(props.status==='running') {
       return (


           <div>
             <Card style={{width: '600px', height: 'auto', backgroundColor: 'white', borderRadius: '8px'}}>
               <CardHeader style={{color: 'black', fontWeight: 'bold'}}>{props.name}</CardHeader>
               <CardBody>
                 {/* console.log({props.imageSrc}); */}
                 <div style={{display: 'flex'}}>
                   <div style={{flex: '1'}}>
                     <img src={posterImageUrl} alt='Poster' style={{height: '200px', width: '200px'}}/>
                   </div>
                   <div style={{flex: 1}}>
                     <h3>Genre: {genreString}</h3>
                     <h3>Casts: {castString}</h3>
                     <h3>Director: {directorString}</h3>
                     <h3>Trailer: <a href={props.link} style={{color: 'darkred'}}>Trailer</a></h3>
                     <h3>Release Date: {props.date.slice(0, 10)}</h3>

                   </div>

                 </div>

                 {/*<div>{genreString}</div>*/}
                 <div style={{
                   border: '3px solid black',
                   fontStyle: 'italic',
                   fontWeight: 'bolder',
                   color: 'rebeccapurple'
                 }}>{props.description}</div>
                 {/*<div><a href={props.link} style={{color: 'darkred'}}>Trailer</a></div>*/}
                 {/*<div>{props.status}</div>*/}
                 {/*<div>{props.date.slice(0, 10)}</div>*/}
                 <div>
                   <h3>Total Collection: {movieAnalysis.totalRevenue}bdt.</h3>
                   <h3>Total Footfalls: {movieAnalysis.totalTicket}</h3>
                   <h3>Total Screening: {movieAnalysis.totalScreening}</h3>
                   <h3>Total Theatre: {movieAnalysis.totalTheater}</h3>
                   <h3>Average Review: {movieAnalysis.averageSentiment}</h3>
                   <div style={{display: 'flex'}}>
                     <div style={{flex: 1}}>
                       <h1>Verdict - </h1>
                     </div>
                     <div style={{
                       marginRight: '250px',
                       marginTop: '10px',
                       fontSize: '18',
                       fontWeight: 'bold',
                       color: 'darkred'
                     }}>
                       Superhit
                     </div>

                   </div>
                   <Button style={{background: 'transparent', height: '40px', marginLeft: '0px'}}
                           onClick={handleReviewClick}>Reviews</Button>
                   <Button style={{background: 'transparent', height: '40px', marginLeft: '0px'}}
                           onClick={() => handleRunningShowClick(theatreList)}>Show List</Button>

                 </div>


               </CardBody>
             </Card>
           </div>
       );
     }
     else {
       return (


           <div>
             <Card style={{width: '600px', height: 'auto', backgroundColor: 'white', borderRadius: '8px'}}>
               <CardHeader style={{color: 'black', fontWeight: 'bold', marginBottom: '20px'}}>{props.name}</CardHeader>
               <CardBody>
                 {/* console.log({props.imageSrc}); */}
                 <div style={{display: 'flex'}}>
                   <div style={{flex: '1'}}>
                     <img src={posterImageUrl} alt='Poster' style={{height: '200px', width: '200px'}}/>
                   </div>
                   <div style={{flex: 1}}>
                     <h3>Genre: {genreString}</h3>
                     <h3>Casts: {castString}</h3>
                     <h3>Director: {directorString}</h3>
                     <h3>Trailer: <a href={props.link} style={{color: 'darkred'}}>Trailer</a></h3>
                     <h3>Release Date: {props.date.slice(0, 10)}</h3>

                   </div>

                 </div>

                 {/*<div>{genreString}</div>*/}
                 <div style={{
                   border: '3px solid black',
                   fontStyle: 'italic',
                   fontWeight: 'bolder',
                   color: 'rebeccapurple',
                   marginTop: '20px'
                 }}>{props.description}</div>
                 {/*<div><a href={props.link} style={{color: 'darkred'}}>Trailer</a></div>*/}
                 {/*<div>{props.status}</div>*/}
                 {/*<div>{props.date.slice(0, 10)}</div>*/}
                 <div>
                   {/*<h3>Total Collection: bdt.</h3>*/}
                   {/*<h3>Total Footfalls: </h3>*/}
                   {/*<div style={{display: 'flex'}}>*/}
                   {/*  <div style={{flex: 1}}>*/}
                   {/*    <h1>Verdict -> </h1>*/}
                   {/*  </div>*/}
                   {/*  <div style={{*/}
                   {/*    marginRight: '250px',*/}
                   {/*    marginTop: '10px',*/}
                   {/*    fontSize: '18',*/}
                   {/*    fontWeight: 'bold',*/}
                   {/*    color: 'darkred'*/}
                   {/*  }}>*/}
                   {/*    Superhit*/}
                   {/*  </div>*/}

                   </div>
                   <Button style={{background: 'transparent', height: '40px', marginTop: '20px', marginLeft: '0px'}}
                           onClick={handleBookingClick}>Pre-Booking List</Button>
                  
                  

                 {/*</div>*/}


               </CardBody>
             </Card>
           </div>
       );
  }
  }

export default Pagination;