import React, { useState } from "react";
import { Button } from "reactstrap";
import MovieList from "./MovieList";
import Pagination from "./Pagination";

function ReleasedMovie(props) {
  const [pageNo, setPageNo] = useState(1);
  const moviesPerPage = 5;
  const startIndex = (pageNo - 1) * moviesPerPage;

  const renderMovieLists = () => {
    const movieLists = [];
    let moviesRendered = 0;

    for (let i = 0; i < props.allMovies.length; i++) {
      const movie = props.allMovies[i];

      if (movie.status === props.stat) {
        movieLists.push(
          <MovieList
            key={i}
            colorValue={i % 2 === 0 ? "aqua" : "lime"}
            handleChange={props.handle}
            sentMoviesData={props.sentMoviesData}
            name={movie.movieName}
            genre={movie.genre}
            cast={movie.cast}
            director={movie.director}
            poster={movie.posterImageLink}
            trailer={movie.trailerLink}
            date={movie.releaseDate}
            status={movie.status}
            description={movie.description}

          />
        );

        moviesRendered++;

        // Check if we have rendered enough movies for this page
        if (moviesRendered >= moviesPerPage) {
          break;
        }
      }
    }

    return movieLists;
  };

  const incrementPageNo = () => {
    if (startIndex + moviesPerPage < props.allMovies.length) {
      setPageNo(pageNo + 1);
    }
  };

  const decrementPageNo = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  return (
    <div>
      {renderMovieLists()}
      <div>
        Page {pageNo}
        <Button onClick={decrementPageNo} style={{ marginLeft: '10px' }}>prev</Button>
        <Button onClick={incrementPageNo} style={{ marginLeft: '10px' }}>next</Button>
      </div>
    </div>
  );
}

export default ReleasedMovie;
