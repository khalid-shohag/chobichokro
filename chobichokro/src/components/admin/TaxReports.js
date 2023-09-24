import React from "react";
import {Card, CardBody, Button} from 'reactstrap'

function TaxReports() {

    const taxReports = [ 
        {
            id: 1,
            movieName: "Movie 1",
            distributorName: "Distributor 1",
            tax: 1000,
            ticketSell: 100,
        },
        {
            id: 2,
            movieName: "Movie 2",
            distributorName: "Distributor 2",
            tax: 1800,
            ticketSell: 150,
        },
        {
            id: 3,
            movieName: "Movie 3",
            distributorName: "Distributor 2",
            tax: 1500,
            ticketSell: 120,
        },
    ]

    return(
        <div>
            <h1 style={{marginLeft: '630px', marginTop: '30px'}}>Tax Reports</h1>
            {taxReports.map((tax) => {
                return(
                    <Card key={tax.id} style={{ marginBottom: '20px', marginLeft: '340px', borderRadius: '10px', boxShadow: '0 0 10px black', padding: '25px', backgroundColor: 'bisque ', height: 'auto', width: '800px', marginTop: '30px'}}>
                            <CardBody>
                                <div style={{display: 'flex'}}>
                                    <div style={{flex: 1}}>
                                        <h2>Movie Name: {tax.movieName}</h2>
                                        <h3>Distributor: {tax.distributorName}</h3>
                                        
                                        
                                    </div>
                                    <div style={{flex: 1, marginLeft: '100px'}}>
                                        
                                        <h4>Tax. {tax.tax}</h4>
                                        <h2 style={{marginTop: '5px'}}>Total Ticket Sell: {tax.ticketSell}</h2>
                                    </div>

                                </div>


                            </CardBody>
                        </Card>
                )
            })}
        </div>
    );
}

export default TaxReports;