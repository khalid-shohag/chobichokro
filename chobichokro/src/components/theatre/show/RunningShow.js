import React from "react";
import { Card, Button, CardHeader, CardBody } from "reactstrap";
import { useState } from "react";
import posterImage from '../../../assets/aqua-film-reel.jpg'

export function  RunningShow() {
    const numberOfTimes = 5;

  const runningList = () => {
    const movieLists = [];
    for (let i = 0; i < 4; i++) {
      let colors = 'aqua';
     i%2 === 0 ? colors = 'aqua' : colors = 'lime'
        
      movieLists.push(<ShowCard key={i} colorValue = 'yellow'/>);
    }
    return movieLists;
  };

    return(
        <div style={{display: 'flex'}}>
           
            {runningList()}
            {/* <div>
                
                <Button onClick={decrementPageNo} style={{marginLeft: '10px'}}>prev</Button>
                <Button onClick={incrementPageNo} style={{marginLeft: '10px'}}>next</Button>
            </div> */}
            
        </div>
    );
}

export function ShowCard() {

  

  return(
    <div style={{ position: "relative", marginBottom: "30px", width: "50%", marginLeft: '10px' }}>
      {/* Image */}
      <img src={posterImage} alt="Poster" style={{ width: "350px", height: "300px", borderRadius: '10px' }} />

      {/* Overlay content */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "80%",
          height: "80%",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card style={{ backgroundColor: "transparent", border: "none" }}>
          <CardHeader>
            <h3>Name</h3>
          </CardHeader>
          <CardBody>
            <div style={{display: 'flex'}}>
                <div>
                    Genre
                </div>
                <div style={{marginLeft: '120px'}}>
                    Rating
                </div>
                
            </div>
            <div style={{marginTop: '120px'}}>
                <Button>Get Tickets</Button>
            </div>
            
          </CardBody>
        </Card>
      </div>
    </div>

    
  );
}
