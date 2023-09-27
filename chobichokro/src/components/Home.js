import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import './Home.css'
import RunningMovies from "./appear/RunningMovie";
import styled from "@emotion/styled";
import { useNavigate, Link } from "react-router-dom"
import { Card, CardBody } from "reactstrap";
import axios from "axios";
import { Button } from "react-bootstrap";
import { DataLoading } from "./appear/DataLoading";


//help from the github repo tfs frontend

function Home() {

    const [movies, setMovies] = useState([]);
    const navigate = useNavigate()

    const [allTheatre, setAllTheatre] = useState([])
    const [load, setLoad] = useState(true)

    

    const getAllMovies = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/movies/all").then(res => {
                console.log("All Movies", res.data)
                setMovies(res.data)
                setLoad(false)
        })
               
                  
           
        } catch (error) {
            console.log("Error fetching data", error);
        }
    };

    useEffect(() => {
        getAllMovies();
    }, []);

    // const navigateAndPassData = (id, data) => {
    //     navigate(`/movie/${id}`, {data})
    // }

    // getAllMovies();

    console.log("Movies", movies);

    // if(load) {
    //     return(
    //         <div style={{
    //             display: "flex",
    //             flexDirection: "column",
    //             alignItems: "center",
    //             justifyContent: "center",
    //             height: "100vh",
    //           }}>Loading the data {console.log("loading state")}</div>
    //     );
    // }

    return(
        <div>
        < Navbar setMovies={setMovies} />
        {load ? (
           <DataLoading value={'Home Page'}/>
        ): (
            
        
        <div style={{marginTop: '40px'}} >
        <Container>
            {/* {getAllMovies} */}
            <Card style={{backgroundColor: 'darkgreen', marginBottom: '1%', marginTop: '1%', marginLeft: '2%', marginRight: '2%', borderRadius: '5px'}}>
                <CardBody style={{marginLeft: '44%'}}>
                <h1 style={{color: 'black', }}>Trending</h1>
                </CardBody>
            </Card>
            <Content>
            {movies.map((movie, key) => {
                // Construct the poster image URL
                const posterImageLink = movie.posterImageLink; // Assuming you have a property like this in your movie object
                if (posterImageLink) {
                    let poster = posterImageLink.replace("images//", "")
                    
                console.log("Image Link", "images/\\posterImageLink".replace("images/\\", ""))
                if (poster.includes("images/\\")) {
                    poster = posterImageLink.replace("images/\\", "")
                    console.log("Poster", poster)
                }
                const posterImageUrl = `http://localhost:8080/api/movies/get/${poster}`;
                const id = movie.id
                const movieName = movie.movieName
                const description = movie.description
                const trailerLink = movie.trailerLink
                const linkMovieDetails = {
                    "id": id,
                    "name": movieName,
                    "description": description,
                    "trailer": trailerLink
                  };
                
                return (
                    // <Link to={{ pathname: `/movie/${id}`, state: {he: '1254'} }}  key = {movie.id} movieName={movie.movieName} description={movie.description} trailer={movie.trailerLink}>
                    <Link to={ `/movie/${id}`} state={{id: movie.movieName, category: 'ticket'}}>
                     {/* <Button onClick={navigateAndPassData(movie.id, linkMovieDetails)}> */}
                    <Wrap>
                        <img src={posterImageUrl} alt={movie.movieName} />
                    </Wrap>
                      {/* </Button> */}
                      </Link>
                );
            }})}
        
            </Content>
            <Card style={{backgroundColor: 'darkblue', marginBottom: '1%', marginTop: '1%', marginLeft: '2%', marginRight: '2%', borderRadius: '5px'}}>
                <CardBody style={{marginLeft: '44%'}}>
                <h1 style={{color: 'black', fontStyle: 'bolder'}}>Running</h1>
                </CardBody>
            </Card>
            <Content>
                {movies.map((movie, key) => {
                    console.log("Status", movie.status)
                    if (movie.status.includes("running")) {
                        console.log("Find one")
                        const posterImageLink = movie.posterImageLink; // Assuming you have a property like this in your movie object
                        if (posterImageLink) {
                            let poster = posterImageLink.replace("images//", "")
                            
                        console.log("Image Link", "images/\\posterImageLink".replace("images/\\", ""))
                        if (poster.includes("images/\\")) {
                            poster = posterImageLink.replace("images/\\", "")
                            console.log("Poster", poster)
                        }
                        const posterImageUrl = `http://localhost:8080/api/movies/get/${poster}`;
                    return (
                        <Link to={'/movie/'+movie.id} state={{id: movie.movieName, category: 'ticket'}}>
                            <Wrap>
                                <img src={posterImageUrl} alt={movie.name} />
                            </Wrap>
                        </Link>
                    );
                }}})}
            </Content>
            <Card style={{backgroundColor: 'yellowgreen', marginBottom: '1%', marginTop: '1%', mrginLeft: '2%', marginRight: '2%', borderRadius: '5px'}}>
                <CardBody style={{marginLeft: '44%'}}>
                <h1 style={{color: 'black'}}>Upcoming</h1>
                </CardBody>
            </Card>
            
            <Content>
                {movies.map((movie, key) => {
                    if (movie.status.includes("upcoming")) {
                        console.log("Find one")
                        const posterImageLink = movie.posterImageLink; // Assuming you have a property like this in your movie object
                        if (posterImageLink) {
                            let poster = posterImageLink.replace("images//", "")
                            
                        console.log("Image Link", "images/\\posterImageLink".replace("images/\\", ""))
                        if (poster.includes("images/\\")) {
                            poster = posterImageLink.replace("images/\\", "")
                            console.log("Poster", poster)
                        }
                        const posterImageUrl = `http://localhost:8080/api/movies/get/${poster}`;
                    return (
                        <Link to={'/movie/'+movie.id} state={{id: movie.movieName,  category: 'ticket'}}>
                            <Wrap>
                                <img src={posterImageUrl} alt={movie.name} />
                            </Wrap>
                        </Link>
                    );
                }}})}
            </Content>
            
        </Container>
        </div>
        )}
        </div>
    );
}

export default Home;

const Container = styled.div`
    margin-top: 10px;
    padding: 30px 10px 26px;
`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(7, minmax(0, 1fr)); 
`

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
    rgba(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width: 200px;
        height: 250px;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: rgba(0 0 0 / 80%) 0px 40px 58px -16px,
        rgba(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8);
    }
`