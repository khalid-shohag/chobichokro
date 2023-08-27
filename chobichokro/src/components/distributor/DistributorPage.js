import React from "react";
import Navbar from "../navbar";
import '../distributor/DistributorPage.css'
import { Button, Card } from "react-bootstrap";
import { useState } from "react";
import reelImage from '../../assets/film-596009_640.jpg'
import MovieReleaseAnnouncement from "./MovieReleaseAnnouncement";

function DistributorPage() {

    const [announce, setAnnounce] = useState(false);
    const hanldeAnnounce = () => {
        setAnnounce(true);
    }

    return(
        <div style={{backgroundColor: 'gray', width: '100vw', height:'100vh'}}>
            <Navbar />
            <div className="container">
        <div className="column first-content" >
          <Card className="card-value">
            
            <Card.Body>
                <Card className="card-internal1">
                    <Card.Body>
                        <Button className="btn1">Released</Button>
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
        </div>     
    </div>
        </div>
    );
}

export default DistributorPage;