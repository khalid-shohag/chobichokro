import React, {useEffect, useState} from "react";
import {Card} from "react-bootstrap";
import {CardBody} from "reactstrap";
import {ToastContainer} from 'react-custom-alert';
import 'react-custom-alert/dist/index.css';
import axios from "axios";
import {TheatreDataLoading} from "../appear/TheatreDataLoading";

function ReelStatus(props) {

    const token = props.token
    const [reel, setReel] = useState([])
    const [load, setLoad] = useState(true)


    const getAllBookedReel = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/theater/get/all_my_movie', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((response) => {
                setReel(response.data)
                setLoad(false)
            })


        } catch (error) {
            console.log("Get Reel Booked Errror: ", error)
            setLoad(false)
        }
    }

    useEffect(() => {
        getAllBookedReel()
    }, [])


    return (
        <div>
            <ToastContainer/>
            {load ? (
                <TheatreDataLoading value={'Reel Status'}/>
            ) : (
                <div>

                    {reel.map((reel) => {
                        return (
                            <Card key={reel.id} style={{
                                marginLeft: '23%',
                                overflowY: 'auto',
                                borderRadius: '10px',
                                boxShadow: '0 0 10px red',
                                padding: '25px',
                                backgroundColor: 'lightyellow',
                                height: 'auto',
                                width: '800px',
                                marginTop: '60px',
                            }}>
                                <CardBody>
                                    <div style={{display: 'flex'}}>
                                        <div style={{flex: 1}}>
                                            <h1 style={{color: 'crimson'}}>{reel.movie.movieName}</h1>
                                            <h2 style={{color: 'green'}}>Distributor: {reel.distributorName}</h2>
                                            <h3>Release Date: {reel.movie.releaseDate.substring(0, 10)}</h3>
                                            <h4>Reel Status: Reached</h4>
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
                </div>)}
        </div>
    );
}

export default ReelStatus;