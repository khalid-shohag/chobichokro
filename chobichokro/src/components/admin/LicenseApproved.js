import React, {useEffect, useState} from "react";
import axios from "axios";
import {Card, CardBody, Button} from 'reactstrap'
import {FaEnvelope, FaPhone, Fa} from "react-icons/fa";
import { ToastContainer, toast } from 'react-custom-alert';
function LicenseApproved(props) {

    const [pendingReq, setPendingReq] = useState([])
    const [s, gs] = useState(false)
    const [findPending, setFindPending] = useState(false)

    const handleFindPending = () => {
        setFindPending(true)
    }

    const getAllPendingReq = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/license/get/approved')
            setPendingReq(response.data)
            console.log("Data: ", response.data)
        } catch (e) {
            console.log("Error fetching Pending Requests", e)
        }

    }

    useEffect(() => {
        getAllPendingReq()
    }, [])


    
    // if (s===false) {
    //     getAllPendingReq()
    //     gs(true)
    // }

     return(



        <div>
            <ToastContainer />
            <h1>Approved License</h1>
            {console.log("GET")}
           
            { (pendingReq.length>0) ? (pendingReq.map((license) => {
                if (license.status === 'approved') {
                    {if (!findPending)  {
                        handleFindPending()
                    }}
                    return(
                        <Card key={license.id} style={{borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', padding: '25px', backgroundColor: 'lightblue', height: 'auto', width: '100%', marginTop: '60px'}}>
                            <CardBody>
                                <div style={{display: 'flex'}}>
                                    <div style={{flex: 1}}>
                                        <h2>License Type: {license.licenseType}</h2>
                                        <h3>Name: {license.username}</h3>
                                        <FaPhone></FaPhone> {license.phoneNumber}
                                        <FaEnvelope style={{marginLeft :'10px'}}></FaEnvelope> {license.email}
                                        <h4>Transaction No. {license.transactionNumber}</h4>
                                    </div>
                                    <div style={{flex: 1}}>
                                        <h2 style={{marginTop: '25px'}}>License No. {license.licenseNumber}</h2>
                                    </div>

                                </div>


                            </CardBody>
                        </Card>
                        )

                }
                
            })) : (
                <Card style={{marginTop: '150px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', width: '300px', height: '60px', borderRadius: '7px', marginLeft: '400px'}}>
                    <CardBody>No Approved Request</CardBody>
                </Card>
            )
            
            }
           
            
           
            
        </div>
    );
}

export default LicenseApproved;