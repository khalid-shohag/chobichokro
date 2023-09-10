import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import axios from "axios";
import { useEffect, useState } from "react";

function Pagination(props) {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    if (props.imageSrc) {
      // Make a GET request to fetch the image
      axios
        .get(`http://localhost:8080/api/movies/get/${props.imageSrc.replace("images//", "")}`, {
          responseType: "arraybuffer",
        })
        .then((response) => {
          const imageBlob = new Blob([response.data], { type: "image/jpeg" });
          const imageUrl = URL.createObjectURL(imageBlob);
          setImageSrc(imageUrl);
        })
        .catch((error) => {
          console.error("Error fetching image:", error);
        });
    }
  }, [props.imageSrc]);

  return(
    <div>
      <Card style={{width: '300px', height: 'auto', backgroundColor: 'white', borderRadius: '8px'}}>
        <CardHeader style={{ color: 'black', fontWeight: 'bold'}}>{props.name}</CardHeader>
        <CardBody>
          {/* console.log({props.imageSrc}); */}
        <img src={imageSrc} alt='Poster' style={{height: '200px', width: '100%'}}/>

          <div>{props.genre}</div>
          
          <div><a href={props.link} style={{color: 'darkred'}}>Trailer</a></div>
          <div>{props.status}</div>
          <div>{props.date.slice(0, 10)}</div>
          
        </CardBody>
      </Card>
    </div>
  );
}

export default Pagination;