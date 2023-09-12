import React from "react";
import Navbar from "../navbar";
import '../distributor/DistributorPage.css'
import { Button, Card } from "react-bootstrap";
import { useState } from "react";
import reelImage from '../../assets/film-596009_640.jpg'
import MovieReleaseAnnouncement from "./MovieReleaseAnnouncement";
import ReleasedMovie from "./ReleasedMovie";
import Pagination from "./Pagination";
import CineVideo from '../../assets/CinemaVideo.mp4'
import { useLocation } from "react-router-dom";
import axios from "axios";

function DistributorPage() {
    const location = useLocation();
    const accessToken = location.state?.token || ''; 
    const [movies, setMovies] = useState([]);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [imageSrc, setImageSrc] = useState('');
    const [genre, setGenre] = useState('');
    const [link, setLink] = useState('');
    const [status, setStatus] = useState('');
    const [date, setDate] = useState('');

    const handleMovieDetail = (name, imageSrc, genre, link, status, date, description) => {
      // Do something with the data received from the child
      console.log("Data received from child:");
      setName(name);
      setGenre(genre);
      setImageSrc(imageSrc);
      setDescription(description);
      setLink(link);
      setStatus(status);
      setDate(date);
    };
  


    const axiosInstance = axios.create({
        baseURL: 'http://localhost:8080', // Replace with your API's base URL
        headers: {
          Authorization: `Bearer ${accessToken}`,
          
        },
      });
      
      console.log(accessToken);

    const getAllMovies = async () => {
        try {
          const response = await axiosInstance.get('/api/movies/all');
          
          // Handle the response data here, e.g., set it in your component state.
          setMovies(response.data);
          console.log('All Movies:', response.data);
        } catch (error) {
          // Handle any errors that occur during the request
          console.log('fix the errors');
          console.error('fix the errors Error fetching movies:', error);
        }
      };
      

    const [viewDetails, setViewDetails] = useState(false)

    const [running, setRunning] = useState(false);
    const [announce, setAnnounce] = useState(false);
    const handleView = () => {
        setViewDetails(true);
    }

    
    const hanldeAnnounce = () => {
        setAnnounce(true);
        setRelease(false);
        setViewDetails(false);
        setRunning(false);
    }

    const [release, setRelease] = useState(false);
    const handleRelease = () => {
        setRelease(true);
        setAnnounce(false);
        setRunning(false);
        getAllMovies();
    }

    
    const handleRunning = () => {
      setRelease(false);
      setAnnounce(false);
      setRunning(true);
      getAllMovies();
    }

    return(
        <div style={{width: '100vw', height:'100vh'}}>
            <Navbar />
            
            <div className="container-dis" >
            <video
        style={{
          position: 'absolute', // Position the video absolutely within the div
          top: 0,
          left: 0,
          width: '100%',
          height: 'auto',
          objectFit: 'cover', // Maintain aspect ratio and cover entire div
          zIndex: -1, // Place it behind other content
        }}
        autoPlay
        loop
        muted
      >
        <source src={CineVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
            
        <div className="column2-dis first-content-dis " >
            
          <Card className="card-value-dis">
            
            <Card.Body>
                <Card className="card-internal1-dis">
                    <Card.Body>
                        <button className="btn1-dis" onClick={handleRelease}>Released</button>
                    </Card.Body>
                </Card>
                <Card className="card-internal2-dis" >
                    <Card.Body>
                        <button className="btn2-dis" onClick={handleRunning}>Running</button>
                    </Card.Body>
                </Card>
                <Card className="card-internal1-dis">
                    <Card.Body>
                        <button className="btn1-dis" style={{backgroundColor: 'blue'}}>Upcoming</button>
                    </Card.Body>
                </Card>
                <Card className="card-internal2-dis" >
                    <Card.Body>
                        <button className="btn2-dis" style={{backgroundColor: 'white'}}
                        onClick={hanldeAnnounce}>Announce</button>
                    </Card.Body>
                </Card>
            </Card.Body>
          </Card>
        </div>  
        <div className="column-dis first-content-dis" >
            {announce && (
            
            <MovieReleaseAnnouncement />
            )}
            {release && (
            
            <ReleasedMovie handle = {handleView} stat={'marketout'} sentMoviesData = {handleMovieDetail} allMovies = {movies}/>
            )}
            {running && (
            
            <ReleasedMovie handle = {handleView} stat={'upcoming'} sentMoviesData = {handleMovieDetail} allMovies = {movies}/>
            )}
        </div>     
        <div className="column-dis first-content-dis">
          
            {viewDetails && (
              //  console.log('val not getting'),
              //  console.log(name, genre, link, status, date),
                <Pagination name={name} imageSrc={imageSrc} genre={genre} link={link} status = {status} date={date} description={description} />
            )}
        </div>
    </div>
   
        </div>
    );
}

export default DistributorPage;