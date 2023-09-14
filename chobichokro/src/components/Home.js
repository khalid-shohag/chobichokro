import React, { useState } from "react";
import Navbar from "./navbar";
import './Home.css'
import RunningMovies from "./appear/RunningMovie";
import styled from "@emotion/styled";
import { Link } from "react-router-dom"
import { Card, CardBody } from "reactstrap";
import axios from "axios";

//help from the github repo tfs frontend

function Home() {

    const [movies, setMovies] = useState([]);

    const getAllMovies = async() => {
        try{
            const response = await axios.get('http://localhost:8080/api/movies/all')
            setMovies(response.data)
        } catch (error) {
            console.log("Error fetching data", error)
        }
        
    }

    getAllMovies();

    console.log("Movies", movies);

    return(
        <div>
        < Navbar />
        <div style={{marginTop: '40px'}} >
        <Container>
            {/* {getAllMovies} */}
            <Card style={{backgroundColor: 'darkred'}}>
                <CardBody>
                <h1 style={{color: 'black'}}>Trending</h1>
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
                return (
                    <Link to={`/movie/${movie.id}`} key={key}>
                    <Wrap>
                        <img src={posterImageUrl} alt={movie.movieName} />
                    </Wrap>
                    </Link>
                );
            }})}
        
            </Content>
            <Card style={{backgroundColor: 'black'}}>
                <CardBody>
                <h1>Running</h1>
                </CardBody>
            </Card>
            <Content>
                {movies.map((movie, key) => {
                    console.log("Status", movie.status)
                    if (movie.status.includes("Released")) {
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
                        <Link to={'/movie/'+movie.id} key={key}>
                            <Wrap>
                                <img src={posterImageUrl} alt={movie.name} />
                            </Wrap>
                        </Link>
                    );
                }}})}
            </Content>
            <Card style={{backgroundColor: 'gray'}}>
                <CardBody>
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
                        <Link to={'/movie/'+movie.id}>
                            <Wrap>
                                <img src={posterImageUrl} alt={movie.name} />
                            </Wrap>
                        </Link>
                    );
                }}})}
            </Content>
            
        </Container>
        </div>
        </div>
    

        // <div className="scrollable-page-h">
        //     <Navbar />
        //     <div className="container-h scrollable-page-h">
        //         {/* <div className="column-h"> */}
        //         <div className="row-h fc-h">
        //             <RunningMovies />

        //         </div>
        //         {/* <div className="row-h fc-h">
        //             Hello

        //         </div> */}
        //         {/* <div className="row-h fc-h">
        //             World

        //         </div> */}
        //         </div>
                
        //     {/* </div> */}
        // </div>
    );
}

export default Home;

const Container = styled.div`
    margin-top: 10px;
    padding: 30px 0px 26px;
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