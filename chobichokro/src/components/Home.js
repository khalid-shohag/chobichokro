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

    const movieData = [
        {
            id:1,
            name:"Weathering With You",
            lang: "English",
            duration: 114,
            desc: "Set during a period of exceptionally rainy weather, high-school boy Hodaka Morishima runs away from his troubled rural home to Tokyo and befriends an orphan girl who can manipulate the weather.",
            poster: "https://m.media-amazon.com/images/M/MV5BNzE4ZDEzOGUtYWFjNC00ODczLTljOGQtZGNjNzhjNjdjNjgzXkEyXkFqcGdeQXVyNzE5ODMwNzI@._V1_FMjpg_UX1000_.jpg",
            trailer: "https://www.youtube.com/watch?v=ps8qwWG8Uio",
        },
        {
            id: 2,
            name: "Your Name",
            lang: "English",
            duration: 112,
            desc: "Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person.",
            poster: "https://m.media-amazon.com/images/M/MV5BNGYyNmI3M2YtNzYzZS00OTViLTkxYjAtZDIyZmE1Y2U1ZmQ2XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
            trailer: "https://www.youtube.com/watch?v=3KR8_igDs1Y",
        },
        {
            id: 3,
            name: "A Silent Voice",
            lang: "English",
            duration: 129,
            desc: "When a grade school student with impaired hearing is bullied mercilessly, she transfers to another school. Years later, one of her former tormentors sets out to make amends.",
            poster: "https://m.media-amazon.com/images/M/MV5BZGRkOGMxYTUtZTBhYS00NzI3LWEzMDQtOWRhMmNjNjJjMzM4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
            trailer: "https://www.youtube.com/watch?v=nfK6UgLra7g",
        },
        {
            id: 4,
            name: "How to Train Your Dragon 2",
            lang: "English",
            duration: 102,
            desc: "Hiccup and Toothless are faced with the threat of Drago, a dragon trapper, bent on capturing and dominating over all dragons. However, they are determined to defeat him and restore peace on Berk.",
            poster: "https://m.media-amazon.com/images/M/MV5BMzMwMTAwODczN15BMl5BanBnXkFtZTgwMDk2NDA4MTE@._V1_.jpg",
            trailer: "https://www.youtube.com/watch?v=wyZOaBxgYTo",
        },
        {
            id: 5,
            name: "Death Note",
            lang: "English",
            duration: "NA",
            desc: "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.",
            poster: "https://m.media-amazon.com/images/M/MV5BODkzMjhjYTQtYmQyOS00NmZlLTg3Y2UtYjkzN2JkNmRjY2FhXkEyXkFqcGdeQXVyNTM4MDQ5MDc@._V1_FMjpg_UX1000_.jpg",
            trailer: "https://www.youtube.com/watch?v=NlJZ-YgAt-c",
        },
        {
            id: 6,
            name: "Coco",
            lang: "English",
            duration: 105,
            desc: "Miguel pursues his love for singing in spite of his family's ban on music. He stumbles into the Land of the Dead, where he learns about his great-great-grandfather who was a legendary singer.",
            poster: "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_.jpg",
            trailer: "https://www.youtube.com/watch?v=Rvr68u6k5sI",
        },
        {
            id: 7,
            name: "A Whisker Away",
            lang: "English",
            duration: 104,
            desc: "Secretly in love with her classmate Kento, Miyo takes the help of a mysterious mask and transforms into a cat to get closer to him. However, trouble ensues when she begins to lose herself.",
            poster: "https://m.media-amazon.com/images/M/MV5BNDI5ODBhYzMtNDc4Yi00NjEwLWJiZWUtMGE2Mzc4MGVjN2E0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
            trailer: "https://www.youtube.com/watch?v=nZ3SUUtymJw",
        },
        {
            id: 8,
            name: "Rio",
            lang: "English",
            duration: 96,
            desc: "When Blu, a domesticated macaw from small-town Minnesota, meets the fiercely independent Jewel, he takes off on an adventure to Rio de Janeiro with the bird of his dreams.",
            poster: "https://m.media-amazon.com/images/M/MV5BMTU2MDY3MzAzMl5BMl5BanBnXkFtZTcwMTg0NjM5NA@@._V1_FMjpg_UX1000_.jpg",
            trailer: "https://www.youtube.com/watch?v=P1GRO31ve5Q",
        },
    ]

    const upcomingMovie = [
        {
            id:1,
            name:"Weathering With You",
            lang: "English",
            duration: 114,
            desc: "Set during a period of exceptionally rainy weather, high-school boy Hodaka Morishima runs away from his troubled rural home to Tokyo and befriends an orphan girl who can manipulate the weather.",
            poster: "https://m.media-amazon.com/images/M/MV5BNzE4ZDEzOGUtYWFjNC00ODczLTljOGQtZGNjNzhjNjdjNjgzXkEyXkFqcGdeQXVyNzE5ODMwNzI@._V1_FMjpg_UX1000_.jpg",
            trailer: "https://www.youtube.com/watch?v=ps8qwWG8Uio",
        },
        {
            id: 2,
            name: "Your Name",
            lang: "English",
            duration: 112,
            desc: "Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person.",
            poster: "https://m.media-amazon.com/images/M/MV5BNGYyNmI3M2YtNzYzZS00OTViLTkxYjAtZDIyZmE1Y2U1ZmQ2XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
            trailer: "https://www.youtube.com/watch?v=3KR8_igDs1Y",
        },
        {
            id: 3,
            name: "A Silent Voice",
            lang: "English",
            duration: 129,
            desc: "When a grade school student with impaired hearing is bullied mercilessly, she transfers to another school. Years later, one of her former tormentors sets out to make amends.",
            poster: "https://m.media-amazon.com/images/M/MV5BZGRkOGMxYTUtZTBhYS00NzI3LWEzMDQtOWRhMmNjNjJjMzM4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
            trailer: "https://www.youtube.com/watch?v=nfK6UgLra7g",
        },
        {
            id: 4,
            name: "How to Train Your Dragon 2",
            lang: "English",
            duration: 102,
            desc: "Hiccup and Toothless are faced with the threat of Drago, a dragon trapper, bent on capturing and dominating over all dragons. However, they are determined to defeat him and restore peace on Berk.",
            poster: "https://m.media-amazon.com/images/M/MV5BMzMwMTAwODczN15BMl5BanBnXkFtZTgwMDk2NDA4MTE@._V1_.jpg",
            trailer: "https://www.youtube.com/watch?v=wyZOaBxgYTo",
        },
        {
            id: 5,
            name: "Death Note",
            lang: "English",
            duration: "NA",
            desc: "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.",
            poster: "https://m.media-amazon.com/images/M/MV5BODkzMjhjYTQtYmQyOS00NmZlLTg3Y2UtYjkzN2JkNmRjY2FhXkEyXkFqcGdeQXVyNTM4MDQ5MDc@._V1_FMjpg_UX1000_.jpg",
            trailer: "https://www.youtube.com/watch?v=NlJZ-YgAt-c",
        },
        {
            id: 6,
            name: "Coco",
            lang: "English",
            duration: 105,
            desc: "Miguel pursues his love for singing in spite of his family's ban on music. He stumbles into the Land of the Dead, where he learns about his great-great-grandfather who was a legendary singer.",
            poster: "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_.jpg",
            trailer: "https://www.youtube.com/watch?v=Rvr68u6k5sI",
        },
        {
            id: 7,
            name: "A Whisker Away",
            lang: "English",
            duration: 104,
            desc: "Secretly in love with her classmate Kento, Miyo takes the help of a mysterious mask and transforms into a cat to get closer to him. However, trouble ensues when she begins to lose herself.",
            poster: "https://m.media-amazon.com/images/M/MV5BNDI5ODBhYzMtNDc4Yi00NjEwLWJiZWUtMGE2Mzc4MGVjN2E0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
            trailer: "https://www.youtube.com/watch?v=nZ3SUUtymJw",
        },
        {
            id: 8,
            name: "Rio",
            lang: "English",
            duration: 96,
            desc: "When Blu, a domesticated macaw from small-town Minnesota, meets the fiercely independent Jewel, he takes off on an adventure to Rio de Janeiro with the bird of his dreams.",
            poster: "https://m.media-amazon.com/images/M/MV5BMTU2MDY3MzAzMl5BMl5BanBnXkFtZTcwMTg0NjM5NA@@._V1_FMjpg_UX1000_.jpg",
            trailer: "https://www.youtube.com/watch?v=P1GRO31ve5Q",
        },
    ]

    return(

        <Container>
            {/* {getAllMovies} */}
            <Card style={{backgroundColor: 'darkred'}}>
                <CardBody>
                <h4>Trending</h4>
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
                <h4>Running</h4>
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
                <h4>Upcoming</h4>
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