import React, {useEffect, useState} from "react";
import {Card, CardBody} from "reactstrap";
import styled from "@emotion/styled";
import {Link} from "react-router-dom"
import {TheatreDataLoading} from "../../appear/TheatreDataLoading";

import axios from "axios";

export function RunningShow(props) {
    const [movies, setMovies] = useState([]);

    console.log("SFDJGJSDJG")
    console.log("TOken props: ", props.token)
    console.log('\n\n\nTheatre name TEMP', props.theatreName)
    const [load, setLoad] = useState(true)

    // const navigate = useNavigate()

    const getAllMovies = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/theater/get/${props.status}`, {
                headers: {
                    Authorization: `Bearer ${props.token}`
                }
            }).then(res => {
                console.log("All Movies", res.data)
                setMovies(res.data)
                setLoad(false)
            })

        } catch (error) {
            console.log("Error fetching data", error);
            setLoad(false)
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


    return (
        <div>


            <Card style={{background: 'transparent'}}>
                <CardBody style={{marginLeft: '20px'}}>
                    <h1>{props.name}</h1>
                </CardBody>
            </Card>
            {load ? (
                <TheatreDataLoading value={props.name}/>
            ) : (
                <div>
                    <Content style={{marginLeft: '20px'}}>
                        {movies.map((movie, key) => {
                            console.log("Status", movie.status)

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
                                    (movie.status === 'running') ? (
                                        <Link to={`/movie/${movie.id}`} state={{
                                            id: movie.movieName,
                                            status: movie.status,
                                            category: props.cat,
                                            theatreId: props.theatreId,
                                            theatreName: props.theatreName,
                                            token: props.token
                                        }}>
                                            <Wrap>
                                                <img src={posterImageUrl} alt={movie.name}/>
                                            </Wrap>
                                        </Link>
                                    ) : (movie.status === 'new') ? (
                                        <Link to={`/movie/${movie.id}`} state={{
                                            id: movie.movieName,
                                            status: movie.status,
                                            category: props.cat,
                                            token: props.token
                                        }}>
                                            <Wrap>
                                                <img src={posterImageUrl} alt={movie.name}/>
                                            </Wrap>
                                        </Link>
                                    ) : (
                                        <Link to={`/movie/${movie.id}`}
                                              state={{id: movie.movieName, status: movie.status, token: props.token}}>
                                            <Wrap>
                                                <img src={posterImageUrl} alt={movie.name}/>
                                            </Wrap>
                                        </Link>
                                    )


                                );
                            }
                        })}
                    </Content></div>)}
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
    border: 10px transparent rgba(249, 249, 249, 0.1);
    box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
    rgba(0 0 0 / 73%) 0px 16px 10px -10px,
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