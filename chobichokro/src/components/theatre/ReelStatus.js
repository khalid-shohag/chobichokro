import React, {useEffect, useState} from "react";
import { Card, Button } from "react-bootstrap";
import { CardBody } from "reactstrap";
import { FaCheck } from "react-icons/fa";
import { ToastContainer, toast } from 'react-custom-alert';
import 'react-custom-alert/dist/index.css';
import axios from "axios";

function ReelStatus(props) {

    const token = props.token
    const [reel, setReel] = useState([])


    const getAllBookedReel = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/theater/get/all_my_movie', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setReel(response.data)
        }
        catch(error) {
            console.log("Get Reel Booked Errror: ", error)
        }
    }

    useEffect(() => {
        getAllBookedReel()
    }, [])

    

    return(
        <div>
            <ToastContainer />
            {reel.map((reel) => {
                return(
                    <Card key={reel.id} style={{backgroundColor: 'yellow', marginTop: '10px', borderRadius: '7px', padding: '10px'}}>
                        <CardBody>
                            <div style={{display: 'flex'}}>
                                <div style={{flex: 1}}>
                                <h5>{reel.movie.movieName}</h5>
                                <h5 style={{color: 'green'}}>Distributor: {reel.distributorName}</h5>
                                <h3>Release Date: {reel.movie.releaseDate.substring(0, 10)}</h3>
                                <h2>Reel Status: Reached</h2>
                                </div>
                                <div style={{flex: 1}}>
                                    <h5>Now, you can add the movie show at your theatre</h5>
                                    <h3>Let's Watch</h3>
                                    <h5>&#128522;&#128522;&#128522;&#128522;</h5>
                                    <h5>&#128526;&#128526;&#128526;&#128526;</h5>
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