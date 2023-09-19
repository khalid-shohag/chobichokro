import React from "react";
import { Card, Button } from "react-bootstrap";
import { CardBody } from "reactstrap";
import { FaCheck } from "react-icons/fa";
import { ToastContainer, toast } from 'react-custom-alert';
import 'react-custom-alert/dist/index.css';

function ReelStatus() {
    const reel = [
        {
            id: 1,
            movieName: 'Jawaan',
            distributor: 'YRF',
            ReleaseDate: '07-09-2023',
            status: 'booked'
        },
        {
            id: 2,
            movieName: 'Priyotoma',
            distributor: 'Tiger Media',
            ReleaseDate: '07-09-2023',
            status: 'booked'
        }
    ]

    return(
        <div>
            <ToastContainer />
            {reel.map((reel) => {
                return(
                    <Card key={reel.id} style={{backgroundColor: 'yellow', marginTop: '10px', borderRadius: '7px', padding: '10px', }}>
                        <CardBody>
                            <div style={{display: 'flex'}}>
                                <div style={{flex: 1}}>
                                <h5>{reel.movieName}</h5>
                                <h4>{reel.distributor}</h4>
                                <h3>Release Date: {reel.ReleaseDate}</h3>
                                <h2>Reel Status: {reel.status}</h2>
                                </div>
                                <div style={{flex: 1}}>
                                <Button style={{marginLeft: '100px', height: '60px', background: 'transparent'}}
                                onClick={() => {
                                    
                                    toast.success('Reel Reached Confirm')
                                }}>
                                    <FaCheck style={{marginRight: '10px'}}></FaCheck>Reached
                                </Button>
                                </div>

                            </div>
                            
                            
                        </CardBody>
                    </Card>
                )
            })}
        </div>
    );
}

export default ReelStatus;