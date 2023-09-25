import React from 'react'
import Navbar from "../navbar";
import {Card, CardBody} from "reactstrap";
import { useLocation } from 'react-router-dom';

function RunningShowList() {

    const lcoation = useLocation()
    const theatreList = lcoation.state?.theatreList || ''
    const name = lcoation.state?.movieName || ''
    


    // const theatreList = [
    //     {
    //         id: 1,
    //         name: 'Star Cineplex',
    //         Address: 'High Tech Park, Rajshahi',
    //         showTime: '3:30 pm, 8:30 pm',
    //         hall: '3'
    //     },
    //     {
    //         id: 2,
    //         name: 'RajTilak',
    //         Address: 'KataKhali, Rajshahi',
    //         showTime: '3:30 pm, 12:30 pm, 9:30 pm',
    //         hall: '1'
    //     },
    //     {
    //         id: 3,
    //         name: 'Monihar',
    //         Address: 'Jessore',
    //         showTime: '3:30 pm, 12:30 pm, 9:30 pm',
    //         hall: '2'
    //     }
    // ]
    return(
        <div>
            <Navbar />
            <div style={{marginTop: '80px'}}>
                <h1 style={{marginLeft: '38%'}}>Running Show- {name} </h1>
                {theatreList.map((rv) => {
                    return(
                        <Card key={rv.id} style={{ marginLeft: '35%', padding: '10px', fontStyle: 'italic', fontSize: '18px', marginBottom: '30px', marginTop: '2%', boxShadow: '0 0 10px black', borderRadius: '5px', height: 'auto', width: '35%', backgroundColor: 'lightcyan'}}>
                            <CardBody style={{fontSize: '25px', marginLeft: '32%'}}>
                                <h6>{rv.name}</h6>
                                {rv.address}
                                <h6>Total screen No: {rv.numberOfScreens}</h6>
                                
                            </CardBody>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}

export default RunningShowList;