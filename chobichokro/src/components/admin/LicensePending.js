import React, {useEffect, useState} from "react";
import axios from "axios";
import {Card, CardBody, Button} from 'reactstrap'
import {FaEnvelope, FaPhone, Fa} from "react-icons/fa";
import { ToastContainer, toast } from 'react-custom-alert';
function LicensePending(props) {

    const [pendingReq, setPendingReq] = useState([])
    const [s, gs] = useState(false)
    const [findPending, setFindPending] = useState(false)

    const handleFindPending = () => {
        setFindPending(true)
    }

    const getAllPendingReq = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/license/get/pending')
            setPendingReq(response.data)
            console.log("Data: ", response.data)
        } catch (e) {
            console.log("Error fetching Pending Requests", e)
        }

    }

    useEffect(() => {
        getAllPendingReq()
    }, [])

    const updateStatus = async(id) => {
        const formData = new FormData()
        formData.append('licenseId', id)
        formData.append('status', 'approved')
        try {
            const response = await axios.put('http://localhost:8080/api/license/update_status', formData, {
                headers: {
                    Authorization: `Bearer ${props.token}`
                }
            })
            // getAllPendingReq()
            // gs(false)
            console.log("Update status: ", response.data)
        }
        catch (e) {
            console.log("Error updating status", e)
        }
    }

    
    // if (s===false) {
    //     getAllPendingReq()
    //     gs(true)
    // }

     return(



        <div>
            <ToastContainer />
            <h1>Pending Requests</h1>
            {console.log("GET")}
           
            { (pendingReq.length> 0) ? pendingReq.map((license) => {
                    return(
                        <Card key={license.id} style={{backgroundColor: 'pink', height: 'auto', width: '100%', marginTop: '60px'}}>
                            <CardBody>
                                <div style={{display: 'flex'}}>
                                    <div style={{flex: 1}}>
                                        <h2>License Type: {license.licenseType}</h2>
                                        <h3>{license.username}</h3>
                                        <FaPhone></FaPhone> {license.phoneNumber}
                                        <FaEnvelope style={{marginLeft :'10px'}}></FaEnvelope> {license.email}
                                        <h4>Transaction No. {license.transactionNumber}</h4>
                                    </div>
                                    <div style={{flex: 1}}>
                                        <Button style={{background: 'transparent'}} onClick ={ () => {
                                            updateStatus(license.id)
                                        }}>
                                            Approve
                                        </Button>
                                        <Button style={{background: 'transparent'}}>
                                            Cancel
                                        </Button>
                                    </div>

                                </div>


                            </CardBody>
                        </Card>
                        )

                
                
            }) : (
                (
                  
                   <Card style={{marginTop: '150px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', width: '300px', height: '60px', borderRadius: '7px', marginLeft: '400px'}}>
                        <CardBody>No Pending Request</CardBody>
                   </Card>
                    
                )
            )
            
            }
            
            
        </div>
    );
}

export default LicensePending;