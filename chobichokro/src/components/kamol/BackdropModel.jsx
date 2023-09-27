import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import { Button } from 'reactstrap';
import axios from "axios";
import { FaPlus } from 'react-icons/fa';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export function BackdropModel(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        // alert('Close');
        alert("You are about to close the modal. Are you sure?");

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
        let url = `http://localhost:8080/api/user/add_review/${movieName}`
        let data = new FormData()
        data.append('opinion', opinion.toString())
        await axios.post(url, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            alert(JSON.stringify(res.data))
        }).catch(err => {
            alert(err)
        })



        setShow(false);
    }

    // return (
    //     <>
    //         <Button variant="primary"  style={{marginTop: '5%', background: 'white', color: 'black', height: '60px', width: '35%'}} onClick={handleShow}>
    //            <FaPlus></FaPlus> Add Review
    //         </Button>

    //         <Modal show={show} onHide={handleClose}>
    //             <Modal.Header closeButton>
    //                 <Modal.Title>Add Review</Modal.Title>
    //             </Modal.Header>

    //             <Modal.Body>
    //                 <div className="form-outline">
    //                     <textarea className="form-control" id="textAreaExample" rows="6"></textarea>
    //                     <label className="form-label" htmlFor="textAreaExample">Message</label>
    //                 </div>
    //             </Modal.Body>

    //             <Modal.Footer>
    //                 <Button variant="danger" onClick={handleClose}>
    //                     Close
    //                 </Button>

    //                 <Button variant="success" onClick={handlePost}>
    //                     Post Review
    //                 </Button>
    //             </Modal.Footer>
    //         </Modal>
    //     </>
    // );

    return (
        <Popup contentStyle={{ background: 'lavender', width: 'auto', borderRadius: '10px' }} trigger={<Button >Add Review</Button>}
        modal nested> 
        {
            close => (
                <div>
                <form>
                    <label>Amount</label>
                    <input style={{marginLeft: '50px', color: 'black'}} type="text" placeholder="Enter Amount"  
                     />
                </form>
                <button style={{backgroundColor: 'greenyellow', borderRadius: '2px', marginTop: '10px', marginLeft: '120px'}} onClick=
                    {() => {
                        
                        close()
                    }}>
                        Post Review
                        
                </button>
                </div>
                
            )
    
        } 
        </Popup>
      );
}
