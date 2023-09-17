import React from 'react'
import Navbar from "../navbar";
import {Card, CardBody} from "reactstrap";

function PreBooking() {

    const theatreList = [
        {
            id: 1,
            name: 'Star Cineplex',
            Address: 'High Tech Park, Rajshahi'
        },
        {
            id: 2,
            name: 'RajTilak',
            Address: 'KataKhali, Rajshahi'
        },
        {
            id: 3,
            name: 'Monihar',
            Address: 'Jessore'
        }
    ]
    return(
        <div>
            {console.log("PRE BOOKING")}
            <Navbar />
            <div style={{marginTop: '80px'}}>
                <h1>Pre Booking List </h1>
                {theatreList.map((rv) => {
                    return(
                        <Card key={rv.id} style={{padding: '10px', fontStyle: 'italic', fontSize: '18px', marginBottom: '30px', borderRadius: '5px', height: 'auto', width: '100%', backgroundColor: 'lavender'}}>
                            <CardBody>
                                <h6>{rv.name}</h6>
                                {rv.address}
                            </CardBody>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}

export default PreBooking;