import React, {useState} from "react";
import axios from "axios";
import {Card, CardBody, Button} from 'reactstrap'
import {FaMailBulk, FaPhone, Fa} from "react-icons/fa";
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
            gs(false)
            console.log("Update status: ", response.data)
        }
        catch (e) {
            console.log("Error updating status", e)
        }
    }

    
    if (s===false) {
        getAllPendingReq()
        gs(true)
    }

     return(



        <div>
            <ToastContainer />
            <h1>Pending Requests</h1>
            {console.log("GET")}
            {(pendingReq.length > 0) ? (

                    <div></div>

            ) : (
                <div></div>
                )}
            { pendingReq.map((license) => {
                if (license.status === 'pending') {
                    {handleFindPending()}
                    return(
                        <Card key={license.id} style={{backgroundColor: 'pink', height: 'auto', width: '100%', marginTop: '60px'}}>
                            <CardBody>
                                <div style={{display: 'flex'}}>
                                    <div style={{flex: 1}}>
                                        <h2>License Type: {license.licenseType}</h2>
                                        <h3>{license.username}</h3>
                                        <FaPhone></FaPhone> {license.phoneNumber}
                                        <FaMailBulk></FaMailBulk> {license.email}
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

                }
                {console.log('Find Pending', findPending)}
                if (!findPending) {

                    return(

                        toast.info('No PENDING Request')
                    )
                }
            })}
        </div>
    );
}

export default LicensePending;