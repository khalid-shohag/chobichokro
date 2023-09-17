import React from "react";
import { Card, Button, CardHeader, CardBody } from "reactstrap";
import Pagination from "./Pagination";
import { useState } from "react";

function MovieList(props) {

  const passMovieDetail = () => {
    props.sentMoviesData(props.name, props.poster, props.genre, props.cast, props.director, props.trailer, props.status, props.date, props.description)
  }
  

  return(
    <div>
      <Button style={{marginBottom: '30px', width: '300px', borderRadius: '10px', cursor: 'pointer', backgroundColor: props.colorValue}}
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
            {props.genre}
          </CardBody>
        </Card>
      </Button>

    </div>
  );
}

export default MovieList;