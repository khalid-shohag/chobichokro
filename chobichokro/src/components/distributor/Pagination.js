import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import {Button} from 'react-bootstrap'
import {Link, useNavigate} from "react-router-dom";

function Pagination(props) {

  const navigate = useNavigate()
  const goReview = (id) => {
    console.log("Review id", id)
    return navigate('/movie/review/'+id)//<Link to={'/movie/review/'+id} />

  }
  // const [imageSrc, setImageSrc] = useState(null);

  // useEffect(() => {
    const posterImageLink = props.imageSrc
    console.log(props.name, " ", posterImageLink)
    //   if (posterImageLink) {
    //
    //     let poster = posterImageLink.replace("images//", "")
    //
    //     console.log("Image Link", "images/\\posterImageLink".replace("images/\\", ""))
    //     if (poster.includes("images/\\")) {
    //       poster = posterImageLink.replace("images/\\", "")
    //       console.log("Poster", poster)
    //     }
    //     const posterImageUrl = poster
    //     // Make a GET request to fetch the image
    //     axios
    //       .get(`http://localhost:8080/api/movies/get/${posterImageUrl}`, {
    //         responseType: "arraybuffer",
    //       })
    //       .then((response) => {
    //         const imageBlob = new Blob([response.data], { type: "image/jpeg" });
    //         const imageUrl = URL.createObjectURL(imageBlob);
    //         setImageSrc(imageUrl);
    //       })
    //       .catch((error) => {
    //         console.error("Error fetching image:", error);
    //       });
    //   }
    // }, [props.imageSrc]);

    let poster = posterImageLink.replace("images//", "")

    console.log("Image Link", "images/\\posterImageLink".replace("images/\\", ""))
    if (poster.includes("images/\\")) {
      poster = posterImageLink.replace("images/\\", "")
      console.log("Poster", poster)
    }
    const posterImageUrl = `http://localhost:8080/api/movies/get/${poster}`;
    // setImageSrc(posterImageLink)
  console.log('Image URL', posterImageUrl)

  const getImage = () => {
    try{
      const response = axios.get(posterImageUrl)
    } catch (error) {
      console.log("Error getting image", Error)
    }
  }

    const genre = props.genre
    const cast = props.cast
    const director = props.director

    const genreString = genre.map((genreItem) => genreItem).join(' ');
     const castString = cast.map((cast) => cast).join(', ') || ''
    const directorString = director.map((director) => director).join(', ')
    const handleReviewClick = () => goReview(props.id);

    return (



  <div>
          <Card style={{width: '500px', height: 'auto', backgroundColor: 'white', borderRadius: '8px'}}>
            <CardHeader style={{color: 'black', fontWeight: 'bold'}}>{props.name}</CardHeader>
            <CardBody>
              {/* console.log({props.imageSrc}); */}
              <div style={{display: 'flex'}}>
                <div style={{flex: '1'}}>
                  <img src={posterImageUrl} alt='Poster' style={{height: '200px', width: '200px'}}/>
                </div>
                <div style={{flex: 1}}>
                  <h3>Genre: {genreString}</h3>
                  <h3>Casts: {castString}</h3>
                  <h3>Director: {directorString}</h3>
                  <h3>Trailer: <a href={props.link} style={{color: 'darkred'}}>Trailer</a></h3>
                  <h3>Release Date: {props.date.slice(0, 10)}</h3>

                </div>

              </div>

              {/*<div>{genreString}</div>*/}
              <div style={{
                border: '3px solid black',
                fontStyle: 'italic',
                fontWeight: 'bolder',
                color: 'rebeccapurple'
              }}>{props.description}</div>
              {/*<div><a href={props.link} style={{color: 'darkred'}}>Trailer</a></div>*/}
              {/*<div>{props.status}</div>*/}
              {/*<div>{props.date.slice(0, 10)}</div>*/}
              <div>
                <h3>Total Collection: bdt.</h3>
                <h3>Total Footfalls: </h3>
                <div style={{display: 'flex'}}>
                  <div style={{flex: 1}}>
                    <h1>Verdict -> </h1>
                  </div>
                  <div style={{
                    marginRight: '250px',
                    marginTop: '10px',
                    fontSize: '18',
                    fontWeight: 'bold',
                    color: 'darkred'
                  }}>
                    Superhit
                  </div>

                </div>
                <Button style={{background: 'transparent', height: '40px', marginLeft: '0px'}} onClick={handleReviewClick}>Reviews</Button>

              </div>


            </CardBody>
          </Card>
        </div>
    );
  }

export default Pagination;