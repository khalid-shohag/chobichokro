import React from "react";
import {Card, CardBody, Button} from 'reactstrap'
import axios from "axios";
import {useState} from "react";

function TaxReports(props) {

    const [taxReports, setTaxReport] = useState([])
    let ok = true;
    let getTaxReport = async () => {
        try {
            let url = `http://localhost:8080/api/tax/`

            await axios.get(url, {
                headers:
                    {
                        Authorization: `Bearer ${props.token}`
                    }
            }).then((value) => {
                console.log("value" , value.data)
                setTaxReport(value.data)
            }).catch(e => console.log(e))
        }catch (e){
            console.log(e)
        }
    }

    if(ok)
    getTaxReport().then((value) => {
        console.log("every details get");
        ok = false;
    }).catch(e => console.log(e))

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
                                        
                                        <h4>Tax. {tax.total_tax_revenue}</h4>
                                        <h2 style={{marginTop: '5px'}}>Total Ticket Sell: {tax.ticket_sell}</h2>
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