import React from "react";
import { Card, Button, CardHeader, CardBody } from "reactstrap";
import Pagination from "./Pagination";
import { useState } from "react";

function MovieList(props) {

  const passMovieDetail = () => {
    props.sentMoviesData(props.id, props.name, props.poster, props.genre, props.cast, props.director, props.trailer, props.status, props.date, props.description)
  }

  const genreString = props.genre.map((genre) => genre).join(', ')
  

  return(
    <div>
      <Button style={{marginBottom: '30px', width: '300px', borderRadius: '10px', cursor: 'pointer', backgroundColor: 'transparent'}}
      onClick={() => {
        props.handleChange();
        passMovieDetail();
      }}
    >
        <Card>
          <CardHeader>
            <h3>{props.name}</h3>
          </CardHeader>
          <CardBody>
            {genreString}
          </CardBody>
        </Card>
      </Button>

    </div>
  );
}

export default MovieList;