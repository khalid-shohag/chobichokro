import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Content} from "reactjs-popup/dist/stories/components";
import {styled} from "@mui/system";

export const SearchShow = (props) => {

    const[movies, setMovies] = useState([])
    useEffect(()=>{
        setMovies(props.movies)
    })
    return (
        <>
            <Content>
            {movies.map((movie, key) => {
                console.log("Status", movie.status)
                if (true) {
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
        </>
    )
}
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