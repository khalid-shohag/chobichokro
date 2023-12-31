import React, {useEffect, useState} from "react";
import axios from "axios";
import {Card, CardBody} from 'reactstrap'
import {FaEnvelope, FaPhone} from "react-icons/fa";
import {ToastContainer} from 'react-custom-alert';
import {DataLoading} from "../appear/DataLoading";

function LicenseApproved(props) {

    const [pendingReq, setPendingReq] = useState([])
    const [s, gs] = useState(false)
    const [findPending, setFindPending] = useState(false)
    const [load, setLoad] = useState(true)

    const handleFindPending = () => {
        setFindPending(true)
    }

    const getAllPendingReq = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/license/get/approved').then(response => {
                setPendingReq(response.data)
                console.log("Data: ", response.data)
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


    // if (s===false) {
    //     getAllPendingReq()
    //     gs(true)
    // }

    return (


        <div>
            <ToastContainer/>
            <h1 style={{marginLeft: '40%', marginTop: '30px'}}>Approved License</h1>
            {console.log("GET")}
            {load ? (
                <DataLoading value={'Approved Requests'}/>
            ) : (


                <div>
                    {(pendingReq.length > 0) ? (pendingReq.map((license) => {
                        if (license.status === 'approved') {
                            {
                                if (!findPending) {
                                    handleFindPending()
                                }
                            }
                            return (
                                <Card key={license.id} style={{
                                    marginLeft: '23%',
                                    borderRadius: '10px',
                                    boxShadow: '0 0 10px black',
                                    padding: '25px',
                                    backgroundColor: 'lightblue',
                                    height: 'auto',
                                    width: '800px',
                                    marginTop: '60px'
                                }}>
                                    <CardBody>
                                        <div style={{display: 'flex'}}>
                                            <div style={{flex: 1}}>
                                                <h3>License Type: {license.licenseType}</h3>
                                                <h3>Name: {license.username}</h3>
                                                <FaPhone></FaPhone> {license.phoneNumber}

                                            </div>
                                            <div style={{flex: 1, marginLeft: '100px'}}>
                                                <FaEnvelope style={{marginLeft: '10px'}}></FaEnvelope> {license.email}
                                                <h4>Transaction No. {license.transactionNumber}</h4>
                                                <h2 style={{marginTop: '5px'}}>License No. {license.licenseNumber}</h2>
                                            </div>

                                        </div>


                                    </CardBody>
                                </Card>
                            )

                        }

                    })) : (
                        <Card style={{
                            marginTop: '150px',
                            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                            width: '300px',
                            height: '60px',
                            borderRadius: '7px',
                            marginLeft: '400px'
                        }}>
                            <CardBody>No Approved Request</CardBody>
                        </Card>
                    )

                    } </div>)}


        </div>
    );
}

export default LicenseApproved;