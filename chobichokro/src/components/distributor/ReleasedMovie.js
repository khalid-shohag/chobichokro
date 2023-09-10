import React, { Component } from "react";
import { Button, Media } from "reactstrap";
import MovieList from "./MovieList";
import Pagination from "./Pagination";
import { useState } from "react";


function ReleasedMovie(props) {

  const [pageNo, setPageNo] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(4); // Display up to 5 movies per page

  const incrementPageNo = () => {
    if (pageNo < 15) {
      setPageNo(pageNo + 1);
      setStartIndex(startIndex + 5);
      setEndIndex(endIndex + 5);
    }
  };

  const decrementPageNo = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
      setStartIndex(startIndex - 5);
      setEndIndex(endIndex - 5);
    }
  };

  const renderMovieLists = () => {
    const movieLists = [];

    for (let i = startIndex; i <= endIndex && i < props.allMovies.length; i++) {
      const movie = props.allMovies[i];
      movieLists.push(
        <MovieList
          key={i}
          colorValue={i % 2 === 0 ? "aqua" : "lime"}
          handleChange={props.handle}
          sentMoviesData = {props.sentMoviesData}
          name={movie.movieName} // Use the movieName property from your JSON data
          genre={movie.genre} // Use the description property from your JSON data
          poster = {movie.posterImageLink}
          trailer = {movie.trailerLink}
          date = {movie.releaseDate}
          status = {movie.status}
        />
      
      );
      console.log(movie.movieName);
    }
    return movieLists;
  };

    return(
        <div>
           
            {renderMovieLists()}
            <div>
                Page {pageNo}
                <Button onClick={decrementPageNo} style={{marginLeft: '10px'}}>prev</Button>
                <Button onClick={incrementPageNo} style={{marginLeft: '10px'}}>next</Button>
            </div>
            
        </div>
    );

}

export default ReleasedMovie;