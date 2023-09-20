import React from "react";
import { Card, Button, CardHeader, CardBody } from "reactstrap";
import { useState, useEffect } from "react";
import posterImage from '../../../assets/aqua-film-reel.jpg'
import styled from "@emotion/styled";
import { useNavigate, Link } from "react-router-dom"

import axios from "axios";

export function  RunningShow(props) {
  const [movies, setMovies] = useState([]);
  // const navigate = useNavigate()

    const getAllMovies = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/movies/all");
            setMovies(response.data);
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

//   getAllMovies();

  console.log("Movies", movies);

  // const [bookCategory, setBookCategory] = useState('')
  // if (props.category=='reel')
  //   setBookCategory('reel')
  // else
  //   setBookCategory('ticket')

 
  return(
    <div>
      <Card style={{background: 'transparent'}}>
                <CardBody>
                <h1>{props.name}</h1>
                </CardBody>
            </Card>
            <Content>
                {movies.map((movie, key) => {
                    console.log("Status", movie.status)
                    if (movie.status.includes(props.status)) {
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
                        <Link to={ `/movie/${movie.id}`} state={{id: movie.movieName, category: props.cat}}>
                            <Wrap>
                                <img src={posterImageUrl} alt={movie.name} />
                            </Wrap>
                        </Link>
                    );
                }}})}
            </Content>
    </div>
  );
}


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