import React from "react";
import Navbar from "../navbar";
import '../distributor/DistributorPage.css'
import { Button, Card } from "react-bootstrap";
import { useState } from "react";
import reelImage from '../../assets/film-596009_640.jpg'
import MovieReleaseAnnouncement from "./MovieReleaseAnnouncement";
import ReleasedMovie from "./ReleasedMovie";
import Pagination from "./Pagination";
import CineVideo from '../../assets/CinemaVideo.mp4'

function DistributorPage() {

    const [viewDetails, setViewDetails] = useState(false)

    const handleView = () => {
        setViewDetails(true);
    }

    const [announce, setAnnounce] = useState(false);
    const hanldeAnnounce = () => {
        setAnnounce(true);
        setRelease(false);
    }

    const [release, setRelease] = useState(false);
    const handleRelease = () => {
        setRelease(true);
        setAnnounce(false);
    }

    return(
        <div style={{width: '100vw', height:'100vh'}}>
            <Navbar />
            
            <div className="container" >
            <video
        style={{
          position: 'absolute', // Position the video absolutely within the div
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Maintain aspect ratio and cover entire div
          zIndex: -1, // Place it behind other content
        }}
        autoPlay
        loop
        muted
      >
        <source src={CineVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
            
        <div className="column first-content" >
            
          <Card className="card-value">
            
            <Card.Body>
                <Card className="card-internal1">
                    <Card.Body>
                        <Button className="btn1" onClick={handleRelease}>Released</Button>
                    </Card.Body>
                </Card>
                <Card className="card-internal2" >
                    <Card.Body>
                        <Button className="btn2">Running</Button>
                    </Card.Body>
                </Card>
                <Card className="card-internal1">
                    <Card.Body>
                        <Button className="btn1" style={{backgroundColor: 'blue'}}>Upcoming</Button>
                    </Card.Body>
                </Card>
                <Card className="card-internal2" >
                    <Card.Body>
                        <Button className="btn2" style={{backgroundColor: 'white'}}
                        onClick={hanldeAnnounce}>Announce</Button>
                    </Card.Body>
                </Card>
            </Card.Body>
          </Card>
        </div>  
        <div className="column first-content">
            {announce && (
            
            <MovieReleaseAnnouncement />
            )}
            {release && (
            
            <ReleasedMovie handle = {handleView}/>
            )}
        </div>     
        <div className="column first-content">
            {viewDetails && (
                <Pagination name='007' body = 'James Bond' />
            )}
        </div>
    </div>
   
        </div>
    );
}

export default DistributorPage;