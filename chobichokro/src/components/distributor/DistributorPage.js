import React, {useState} from "react";
import Navbar from "../navbar";
import '../distributor/DistributorPage.css'
import {Card} from "react-bootstrap";
import MovieReleaseAnnouncement from "./MovieReleaseAnnouncement";
import ReleasedMovie from "./ReleasedMovie";
import Pagination from "./Pagination";
import CineVideo from '../../assets/CinemaVideo.mp4'
import {useLocation} from "react-router-dom";
import axios from "axios";

function DistributorPage() {
    const location = useLocation();
    const accessToken = location.state?.token || '';
    const username = location.state?.name || '';
    console.log("Pre", accessToken)
    // if (localStorage.getItem('dtoken')==null) {
    //   console.log("Satisfied")

    //   const accessToken = location.state?.token || '';
    //   console.log("Token: ", accessToken)

    //   localStorage.setItem('dtoken', accessToken); 
    // }
    // console.log("Storage", localStorage.getItem('dtoken'))
    // console.log("Token: ", location.state?.token)
    // const isAuthenticated = !!localStorage.getItem('dtoken');
    const [movies, setMovies] = useState([]);
    const [runningMovie, setRunningMovie] = useState([]);
    const [upcomingMovie, setUpcomingMovie] = useState([]);
    const [releasedMovie, setReleasedMovie] = useState([]);


    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [imageSrc, setImageSrc] = useState('');
    const [genre, setGenre] = useState('');
    const [link, setLink] = useState('');
    const [status, setStatus] = useState('');
    const [date, setDate] = useState('');
    const [viewDetails, setViewDetails] = useState(false)
    const [cast, setCast] = useState('')
    const [director, setDirector] = useState('')
    const [id, setId] = useState('')

    const [running, setRunning] = useState(false);
    const [announce, setAnnounce] = useState(false);
    const [release, setRelease] = useState(false);
    const [upcoming, setUpcoming] = useState(false)

    // console.log("Auth: ", isAuthenticated)
    // if (isAuthenticated=='') {
    //   return(
    //     <div>
    //       {/* <DistributorLogin /> */}
    //       <div>
    //         <Navbar />
    //       </div>
    //       <div style={{marginTop: '60px'}}>
    //         <Login value={"Distributor Login"} />
    //       </div>
    //     </div>
    //   )
    // }

    // else {


    const handleMovieDetail = (id, name, imageSrc, genre, cast, director, link, status, date, description) => {
        // Do something with the data received from the child
        console.log("Data received from child:");
        setId(id);
        setName(name);
        setGenre(genre);
        setImageSrc(imageSrc);
        setDescription(description);
        setLink(link);
        setStatus(status);
        setDate(date);
        setCast(cast);
        setDirector(director);
    };


    const token = location.state?.token || ''
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:8080', // Replace with your API's base URL
        headers: {
            Authorization: `Bearer ${accessToken}`,

        },
    });

    console.log(token);

    const getReleasedMovies = async () => {
        try {
            const response = await axiosInstance.get('/api/distributor/get/released_movie').then((response) => {
                console.log(response.data);
                setReleasedMovie(response.data)
            });
        } catch (e) {
            console.log("Error fetching Released Movies", e)
        }
    }

    const getRunningMovies = async () => {
        try {
            const response = await axiosInstance.get('/api/distributor/get/running_movie');

            // Handle the response data here, e.g., set it in your component state.
            setRunningMovie(response.data);
            console.log('All Movies:', response.data);
        } catch (error) {
            // Handle any errors that occur during the request
            console.log('fix the errors');
            console.error('fix the errors Error fetching movies:', error);
        }
    };

    const getUpcomingMovies = async () => {
        try {
            const response = await axiosInstance.get('/api/distributor/get/upcoming_movie').then((response) => {
                console.log(response.data) ;

            // Handle the response data here, e.g., set it in your component state.
            setUpcomingMovie(response.data);
            console.log('All Movies:', response.data);
            })
        } catch (error) {
            // Handle any errors that occur during the request
            console.log('fix the errors');
            console.error('fix the errors Error fetching movies:', error);
        }
    };


    const handleView = () => {
        setViewDetails(true);
    }

    const handleUpcoming = () => {
        setRelease(false);
        setViewDetails(false)
        setUpcoming(true)
        setAnnounce(false)
        setRunning(false)
        getUpcomingMovies()
    }

    const hanldeAnnounce = () => {
        setAnnounce(true);
        setRelease(false);
        setViewDetails(false);
        setUpcoming(false)
        setRunning(false);
    }


    const handleRelease = () => {
        setRelease(true);
        setAnnounce(false);
        setRunning(false);
        setViewDetails(false);
        setUpcoming(false)
        getReleasedMovies();
        // getAllMovies();
    }


    const handleRunning = () => {
        setRelease(false);
        setAnnounce(false);
        setRunning(true);
        setViewDetails(false);
        setUpcoming(false)
        console.log("Running")
        getRunningMovies();
    }

    return (
        <div style={{width: '100vw', height: '100vh'}}>
            <Navbar/>

            <div className="container-dis">
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
                    <source src={CineVideo} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>

                <div className="column2-dis first-content-dis ">


                    <Card className="card-value-dis">
                        <h1 style={{color: 'GrayText', fontStyle: 'oblique'}}>{username}</h1>
                        {console.log('Name: ', username)}
                        <Card.Body>
                            <Card className="card-internal1-dis">
                                <Card.Body>
                                    <button className="btn1-dis" onClick={handleRelease}>Released</button>
                                </Card.Body>
                            </Card>
                            <Card className="card-internal2-dis">
                                <Card.Body>
                                    <button className="btn2-dis" onClick={handleRunning}>Running</button>
                                </Card.Body>
                            </Card>
                            <Card className="card-internal1-dis">
                                <Card.Body>
                                    <button className="btn1-dis" style={{backgroundColor: 'blue'}}
                                            onClick={handleUpcoming}>Upcoming
                                    </button>
                                </Card.Body>
                            </Card>
                            <Card className="card-internal2-dis">
                                <Card.Body>
                                    <button className="btn2-dis" style={{backgroundColor: 'white'}}
                                            onClick={hanldeAnnounce}>Announce
                                    </button>
                                </Card.Body>
                            </Card>
                        </Card.Body>
                    </Card>
                </div>

                <div className="column-dis">
                    {release && (

                        <ReleasedMovie handle={handleView} stat={'released'} sentMoviesData={handleMovieDetail}
                                       allMovies={releasedMovie}/>
                    )}
                    {running && (

                        <ReleasedMovie handle={handleView} stat={'running'} sentMoviesData={handleMovieDetail}
                                       allMovies={runningMovie}/>
                    )}
                    {upcoming && (

                        <ReleasedMovie handle={handleView} stat={'upcoming'} sentMoviesData={handleMovieDetail}
                                       allMovies={upcomingMovie}/>
                    )}
                </div>
                <div className="column-dis">
                    {announce && (

                        <MovieReleaseAnnouncement token={accessToken}/>
                    )}
                </div>


                <div className="column-dis first-content-dis">

                    {viewDetails && (
                        //  console.log('val not getting'),
                        //  console.log(name, genre, link, status, date),
                        <Pagination token={token} id={id} name={name} imageSrc={imageSrc} genre={genre} cast={cast}
                                    director={director} link={link} status={status} date={date}
                                    description={description}/>
                    )}
                </div>
            </div>

        </div>
    );
    // }
}

export default DistributorPage;