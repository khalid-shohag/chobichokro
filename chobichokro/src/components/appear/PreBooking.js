import React, {useEffect, useState} from 'react'
import Navbar from "../navbar";
import {Card, CardBody} from "reactstrap";
import {useLocation} from 'react-router-dom';
import axios from 'axios';
import {Button} from 'react-bootstrap';

function PreBooking() {

    const location = useLocation()
    const token = location.state?.token || ''
    const [pendingBooking, setPendingBooking] = useState([])
    const name = location.state?.name || ''

    const getPendingBooking = async () => {

        try {
            const response = await axios.get(`http://localhost:8080/api/distributor/pending_movie_request/${name}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setPendingBooking(response.data.body)
            console.log("Pending Booking: ", response.data.body)
        } catch (error) {
            console.log("Error fetching data", error);
        }

    }

    useEffect(() => {
        getPendingBooking();
    }, []);

    const approvePendingBooking = async (id) => {
        try {
            const response = axios.post(`http://localhost:8080/api/distributor/accept_pending_request/${id}`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((response) => {
                console.log("Response: ", response)
            })
            alert("Booking Approved")
        } catch (error) {
            console.log("Error fetching data", error);
        }
    }


    return (
        <div>
            {console.log("PRE BOOKING")}
            <Navbar/>
            <div style={{marginTop: '80px'}}>
                <h1 style={{marginLeft: '40%'}}>Pre Booking List </h1>
                {pendingBooking.map((rv) => {
                    return (
                        <Card key={rv.id} style={{
                            marginTop: '2%',
                            boxShadow: '0 0 10px seagreen',
                            padding: '10px',
                            marginLeft: '32%',
                            fontStyle: 'italic',
                            fontSize: '18px',
                            marginBottom: '30px',
                            borderRadius: '5px',
                            height: 'auto',
                            width: '35%',
                            backgroundColor: 'lavender'
                        }}>
                            <CardBody>
                                <div style={{display: 'flex'}}>
                                    <div style={{flex: 1}}>
                                        <h6>Movie- {rv.movie.movieName}</h6>
                                        <h5>Theatre- {rv.theater.name}</h5>
                                        <h5>Address- {rv.theater.address}</h5>
                                        <h5>Total screen- {rv.theater.numberOfScreens}</h5>

                                    </div>
                                    <div style={{flex: 1}}>
                                        <Button style={{background: 'seagreen', borderRadius: '50%', border: 'none'}}
                                                onClick={() => approvePendingBooking(rv.id)}>
                                            Approve
                                        </Button>
                                    </div>
                                </div>

                            </CardBody>

                        </Card>
                    );
                })}
            </div>
        </div>
    );
}

export default PreBooking;