import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";

function Pagination(props) {
  return(
    <div>
      <Card style={{width: 'auto', height: 'auto', backgroundColor: 'white', borderRadius: '8px'}}>
        <CardHeader>{props.name}</CardHeader>
        <CardBody>{props.body}</CardBody>
      </Card>
    </div>
  );
}

export default Pagination;