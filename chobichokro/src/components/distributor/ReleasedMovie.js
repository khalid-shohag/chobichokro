// import React, { useState } from "react";
// import { Button } from "reactstrap";
// import MovieList from "./MovieList";
// import Pagination from "./Pagination";
//
// function ReleasedMovie(props) {
//   const [pageNo, setPageNo] = useState(1);
//   const moviesPerPage = 5;
//   const [startIndex, setStartIndex] = useState(0);
//   const [tempIndex, setTempIndex] = useState(0)
//
//   const renderMovieLists = () => {
//     const movieLists = [];
//     let moviesRendered = 0;
//
//     for (let i = startIndex; i < props.allMovies.length; i++) {
//       const movie = props.allMovies[i];
//
//       if (movie.status === props.stat) {
//         console.log(movie.movieName, " ", movie.status)
//         movieLists.push(
//           <MovieList
//             key={i}
//             colorValue={i % 2 === 0 ? "aqua" : "lime"}
//             handleChange={props.handle}
//             sentMoviesData={props.sentMoviesData}
//             id = {movie.id}
//             name={movie.movieName}
//             genre={movie.genre}
//             cast={movie.cast}
//             director={movie.director}
//             poster={movie.posterImageLink}
//             trailer={movie.trailerLink}
//             date={movie.releaseDate}
//             status={movie.status}
//             description={movie.description}
//
//           />
//         );
//
//         moviesRendered++;
//
//         // Check if we have rendered enough movies for this page
//         if (moviesRendered >= moviesPerPage) {
//           setTempIndex(i)
//           break;
//         }
//       }
//     }
//
//     return movieLists;
//   };
//
//   const incrementPageNo = () => {
//     if (startIndex + moviesPerPage < props.allMovies.length) {
//       const newStartIndex = tempIndex + moviesPerPage;
//       setStartIndex(newStartIndex)
//       setPageNo(pageNo + 1);
//       console("Start Index: ", startIndex)
//     }
//   };
//
//   const decrementPageNo = () => {
//     if (pageNo > 1) {
//       const newStartIndex = tempIndex - moviesPerPage;
//       setStartIndex(newStartIndex)
//       setPageNo(pageNo - 1);
//     }
//   };
//
//   return (
//     <div>
//       {renderMovieLists(0)}
//       <div>
//         Page {pageNo}
//         <Button onClick={decrementPageNo} style={{ marginLeft: '10px' }}>prev</Button>
//         <Button onClick={incrementPageNo} style={{ marginLeft: '10px' }}>next</Button>
//       </div>
//     </div>
//   );
// }
//
// export default ReleasedMovie;
//
//
//

import React, { useState } from "react";
import { Button } from "reactstrap";
import MovieList from "./MovieList";

function ReleasedMovie(props) {
  const [pageNo, setPageNo] = useState(1);
  const moviesPerPage = 5;
  const [startIndex, setStartIndex] = useState(0);

  const renderMovieLists = () => {
    const movieLists = [];
    let moviesRendered = 0;

    for (let i = startIndex; i < props.allMovies.length; i++) {
      const movie = props.allMovies[i];

      if (movie.status === props.stat) {
        movieLists.push(
            <MovieList
                key={i}
                colorValue={i % 2 === 0 ? "aqua" : "lime"}
                handleChange={props.handle}
                sentMoviesData={props.sentMoviesData}
                id={movie.id}
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
      // Initialize moviesRendered
      let moviesRendered = 0;

      // Find the index after the loop
      let newStartIndex = startIndex;
      let i = startIndex;
      while (i < props.allMovies.length && moviesRendered < moviesPerPage) {
        const movie = props.allMovies[i];
        if (movie.status === props.stat) {
          moviesRendered++;
        }
        i++;
      }
      newStartIndex = i;

      setStartIndex(newStartIndex);
      setPageNo(pageNo + 1);
      console.log("Start Index: ", newStartIndex);
    }
  };

  const decrementPageNo = () => {
    if (pageNo > 1) {
      // Initialize moviesRendered
      let moviesRendered = 0;

      // Find the index before the loop
      let newStartIndex = startIndex;
      let i = startIndex;
      while (i > 0 && moviesRendered < moviesPerPage) {
        i--;
        const movie = props.allMovies[i];
        if (movie.status === props.stat) {
          moviesRendered++;
        }
      }
      newStartIndex = i;

      setStartIndex(newStartIndex);
      setPageNo(pageNo - 1);
      console.log("Start Index: ", newStartIndex);
    }
  };

  return (
      <div>
        {renderMovieLists()}
        <div style={{marginLeft: '100px', color: 'white'}}>
          Page {pageNo}
          <Button onClick={decrementPageNo} style={{ marginLeft: '10px', height: '40px', width: '45px', backgroundColor: 'lavender' }}>prev</Button>
          <Button onClick={incrementPageNo} style={{ marginLeft: '10px', height: '40px', width: '45px', backgroundColor: 'lavender' }}>next</Button>
        </div>
      </div>
  );
}

export default ReleasedMovie;
