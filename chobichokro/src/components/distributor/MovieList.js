import React from "react";
import { Card, Button, CardHeader, CardBody } from "reactstrap";
import Pagination from "./Pagination";
import { useState } from "react";

function MovieList(props) {

  

  return(
    <div>
      <Button style={{marginBottom: '30px', borderRadius: '10px', cursor: 'pointer', backgroundColor: props.colorValue}}
      onClick={props.handleChange}>
        <Card>
          <CardHeader>
            <h3>Name</h3>
          </CardHeader>
          <CardBody>
            Movie description
          </CardBody>
        </Card>
      </Button>

    </div>
  );
}

export default MovieList;