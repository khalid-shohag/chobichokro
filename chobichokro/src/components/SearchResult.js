import React from "react";
import {useLocation} from "react-router";
import styled from "@emotion/styled";
import Navbar from "./navbar";
import {DataLoading} from "./appear/DataLoading";
import {Card, CardBody} from "reactstrap";
import {Link} from "react-router-dom";

export function SearchResult() {

    const location = useLocation()
    const movies = location.state?.data || []
    // const searchLoad = location.state?.searchLoad || false
    const searchLoad = false

    return (
        <div style={{background: 'black', height: '100vw'}}>
            <Navbar/>
            <Container>
                <Card style={{
                    backgroundColor: 'darkgreen',
                    marginBottom: '1%',
                    marginTop: '5%',
                    marginLeft: '2%',
                    marginRight: '2%',
                    borderRadius: '5px',

                }}>
                    <CardBody style={{marginLeft: '44%'}}>
                        <h1 style={{color: 'black',}}>Search Result</h1>
                    </CardBody>
                </Card>
                <div>
                    {searchLoad ? (<div style={{justifyContent: "center",}}>
                        <DataLoading value={'Search results'}/>
                    </div>) : (<Content >


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
                                    <Link to={`/movie/${id}`} state={{id: movie.movieName, category: 'ticket'}}>
                                        {/* <Button onClick={navigateAndPassData(movie.id, linkMovieDetails)}> */}
                                        <Wrap>
                                            <img src={posterImageUrl} alt={movie.movieName}/>
                                        </Wrap>
                                        {/* </Button> */}
                                    </Link>
                                );
                            }
                        })}
                    </Content>)}

                </div>
            </Container>
        </div>
    )
}

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