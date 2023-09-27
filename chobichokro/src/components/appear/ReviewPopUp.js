import React, {useState} from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import {FaPlus} from 'react-icons/fa';

function ReviewPopUp(props) {
    const [show, setShow] = useState(false);


    const handleClose = () => {
        // alert('Close');
        // alert("You are about to close the modal. Are you sure?");

        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }
    const handlePost = async () => {
        // I need to post the review to the database
        let opinion = document.getElementById('textAreaExample').value;


        let token = props.request_token
        let movieName = props.movieName
        // alert(token)
        // alert(movieName)

        let url = `http://localhost:8080/api/user/add_review/${movieName}`
        let data = new FormData()
        data.append('opinion', opinion.toString())
        await axios.post(url, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            // alert(JSON.stringify(res.data))
        }).catch(err => {
            alert(err)
        })


        setShow(false);
    }

    return (
        <Popup contentStyle={{background: 'lavender', width: 'auto', borderRadius: '10px'}} trigger={<Button
            style={{background: 'white', marginTop: '6.5%', height: '60px', width: '150px'}}>
            <FaPlus></FaPlus> Add Review</Button>}
               modal nested>
            {
                close => (
                    <div>

                        <h3>Review</h3>
                        <div>
                    <textarea id="textAreaExample"
                              style={{
                                  width: '400px',
                                  height: "12rem",
                                  backgroundColor: 'white',
                                  borderRadius: '7px',
                                  boxShadow: '0 0 10px black'
                              }}

                              placeholder="Add description..."
                    />
                        </div>
                        <button style={{
                            backgroundColor: 'green',
                            borderRadius: '5%',
                            marginTop: '10px',
                            marginLeft: '40%',
                            border: 'none'
                        }} onClick=
                                    {() => {
                                        handlePost().then(() => {
                                            close()
                                        })

                                    }}>
                            Post Review

                        </button>
                    </div>

                )

            }
        </Popup>
    );
}

export default ReviewPopUp