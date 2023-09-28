import React, {useEffect, useState} from "react";
import {Card, CardBody} from 'reactstrap'
import axios from "axios";
import {DataLoading} from "../appear/DataLoading";


function TaxReports(props) {

    const [taxReports, setTaxReport] = useState([])
    const [load, setLoad] = useState(true)
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
                console.log("value", value.data)
                setTaxReport(value.data)
                setLoad(false)
            }).catch(e => console.log(e))
        } catch (e) {
            console.log(e)
            setLoad(false)
        }
    }


    useEffect(() => {
        getTaxReport()
    }, [])

    // getTaxReport().then((value) => {
    //     console.log("every details get");
    //     ok = false;
    // }).catch(e => console.log(e))

    return (
        <div>
            <h1 style={{marginLeft: '43%', marginTop: '30px'}}>Tax Reports</h1>
            {load ? (
                <DataLoading value={'Tax Reports'}/>
            ) : (


                <div>
                    {taxReports.map((tax) => {
                        return (
                            <Card key={tax.id} style={{
                                marginBottom: '3%',
                                marginLeft: '23%',
                                borderRadius: '10px',
                                boxShadow: '0 0 10px black',
                                padding: '25px',
                                backgroundColor: 'bisque ',
                                height: 'auto',
                                width: '800px',
                                marginTop: '30px'
                            }}>
                                <CardBody>
                                    <div style={{display: 'flex'}}>
                                        <div style={{flex: 1}}>
                                            <h2>Movie Name: {tax.movieName}</h2>
                                            <h3>Distributor: {tax.distributorName}</h3>


                                        </div>
                                        <div style={{flex: 1, marginLeft: '100px'}}>

                                            <h3 style={{color: 'darkred'}}>Tax. {tax.total_tax_revenue} taka</h3>
                                            <h2 style={{marginTop: '5px'}}>Total Ticket Sell: {tax.ticket_sell}</h2>
                                        </div>

                                    </div>


                                </CardBody>
                            </Card>
                        )
                    })} </div>)}
        </div>
    );
}

export default TaxReports;