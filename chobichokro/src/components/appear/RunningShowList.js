import React from 'react'
import Navbar from "../navbar";
import {Card, CardBody} from "reactstrap";

function RunningShowList() {

    const theatreList = [
        {
            id: 1,
            name: 'Star Cineplex',
            Address: 'High Tech Park, Rajshahi',
            showTime: '3:30 pm, 8:30 pm',
            hall: '3'
        },
        {
            id: 2,
            name: 'RajTilak',
            Address: 'KataKhali, Rajshahi',
            showTime: '3:30 pm, 12:30 pm, 9:30 pm',
            hall: '1'
        },
        {
            id: 3,
            name: 'Monihar',
            Address: 'Jessore',
            showTime: '3:30 pm, 12:30 pm, 9:30 pm',
            hall: '2'
        }
    ]
    return(
        <div>
            <Navbar />
            <div style={{marginTop: '80px'}}>
                <h1>Running Show </h1>
                {theatreList.map((rv) => {
                    return(
                        <Card key={rv.id} style={{padding: '10px', fontStyle: 'italic', fontSize: '18px', marginBottom: '30px', borderRadius: '5px', height: 'auto', width: '100%', backgroundColor: 'lavender'}}>
                            <CardBody>
                                <h6>{rv.name}</h6>
                                {rv.Address}
                                <h6>Show Time: {rv.showTime}</h6>
                                <h3>Hall number: {rv.hall}</h3>
                            </CardBody>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}

export default RunningShowList;