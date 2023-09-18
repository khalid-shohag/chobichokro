import React, {useState} from "react";
import axios from "axios";
import {Card, CardBody, Button} from 'reactstrap'
import {FaMailBulk, FaPhone} from "react-icons/fa";

function LicensePending() {

    const [pendingReq, setPendingReq] = useState([])
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
        formData.append('status', 'activated')
        try {
            const response = await axios.put('http://localhost:8080/api/license/update_status', formData)
            getAllPendingReq()
            console.log("Update status: ", id)
        }
        catch (e) {
            console.log("Error updating status", e)
        }
    }

    const [s, gs] = useState(false)
    if (s===false) {
        getAllPendingReq()
        gs(true)
    }

     return(



        <div>

            <h1>Pending Requests</h1>
            {console.log("GET")}
            {pendingReq.map((license) => {
                if (license.status === 'pending') {
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
            })}
        </div>
    );
}

export default LicensePending;