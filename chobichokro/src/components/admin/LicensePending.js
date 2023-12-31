import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, Card, CardBody} from 'reactstrap'
import {FaCheck, FaEnvelope, FaPhone, FaTimes} from "react-icons/fa";
import {ToastContainer, toast} from 'react-custom-alert';
import {DataLoading} from "../appear/DataLoading";

function LicensePending(props) {

    const [pendingReq, setPendingReq] = useState([])
    const [s, gs] = useState(false)
    const [findPending, setFindPending] = useState(false)
    const [load, setLoad] = useState(true)

    const handleFindPending = () => {
        setFindPending(true)
    }

    const getAllPendingReq = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/license/get/pending').then(res => {
                console.log("Pending Requests", res.data)
                setPendingReq(res.data)
                setLoad(false)
            })

        } catch (e) {
            console.log("Error fetching Pending Requests", e)
            setLoad(false)
        }

    }

    useEffect(() => {
        getAllPendingReq()
    }, [])

    const updateStatus = async (id) => {
        const formData = new FormData()
        formData.append('licenseId', id)
        formData.append('status', 'approved')
        
            await axios.put('http://localhost:8080/api/license/update_status', formData, {
                headers: {
                    Authorization: `Bearer ${props.token}`
                }
            }).then(() =>{
                getAllPendingReq().then(() =>{
                    toast.success("request approved")
                })
            })
            .catch( (e) => {
            console.log("Error updating status", e)})
    }


    return (


        <div>
            <ToastContainer/>
            <h1 style={{marginLeft: '40%', marginTop: '30px', color: 'darkred'}}>Pending Requests</h1>
            {console.log("GET")}

            {load ? (
                <DataLoading value={'Pending Requests'}/>
            ) : (


                <div>
                    {(pendingReq.length > 0) ? pendingReq.map((license) => {
                        return (
                            <Card key={license.id} style={{
                                padding: '20px',
                                marginLeft: '13%',
                                backgroundColor: 'honeydew',
                                borderRadius: '10px',
                                boxShadow: '0 0 10px black',
                                height: 'auto',
                                width: '70%',
                                marginTop: '60px'
                            }}>
                                <CardBody>
                                    <div style={{display: 'flex'}}>
                                        <div style={{flex: 1}}>
                                            <h4 style={{color: 'black'}}>License Type: {license.licenseType}</h4>
                                            <h3>{license.username}</h3>
                                            <div>
                                            <FaPhone></FaPhone> {license.phoneNumber}
                                            </div>
                                            <FaEnvelope></FaEnvelope> {license.email}
                                            <h4>Transaction No. {license.transactionNumber}</h4>
                                        </div>
                                        <div style={{flex: 1, marginLeft: '220px'}}>
                                            <Button style={{
                                                background: 'yellowgreen',
                                                marginTop: '4px',
                                                borderRadius: '50%',
                                                border: 'none'
                                            }} onClick={() => {
                                                updateStatus(license.id)
                                            }}>
                                                <FaCheck></FaCheck> Approve
                                            </Button>
                                            <Button style={{
                                                background: 'coral',
                                                marginTop: '4px',
                                                borderRadius: '50%',
                                                border: 'none'
                                            }}>
                                                <FaTimes></FaTimes> Cancel
                                            </Button>
                                        </div>

                                    </div>


                                </CardBody>
                            </Card>
                        )


                    }) : (
                        (

                            <Card style={{
                                marginTop: '150px',
                                boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                                width: '300px',
                                height: '60px',
                                borderRadius: '7px',
                                marginLeft: '400px'
                            }}>
                                <CardBody>No Pending Request</CardBody>
                            </Card>

                        )
                    )

                    }</div>)}


        </div>
    );
}

export default LicensePending;