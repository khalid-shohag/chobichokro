import React from "react";
import Navbar from "./navbar";
import { Card } from "react-bootstrap";
function LicenseStatus() {
    return(
        <div>
            <Navbar />
            <div className="column"
        
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                
            }}
            >
                <div
               
               style={{
                 // backgroundImage: `url(${ImageAdmin})`,
                 backgroundColor: 'gray',
                 background: 'rgba(255, 255, 255, 0.8)',
                 padding: '20px',
                 borderRadius: '10px',
                 boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                 width: '371px',
                 height: '220px',
                 marginTop: '100px'
               }}
             >
                <Card style={{backgroundColor: 'yellow', borderRadius: '6px', width: '300px'}}>
                    <Card.Header><h6>Company Name</h6></Card.Header>
                    <Card.Body style={{marginLeft: '90px'}}>
                        <h3>ABCD</h3>
                    </Card.Body>
                </Card>
                <Card style={{backgroundColor: 'orange', borderRadius: '6px', width: '300px', marginTop: '20px'}}>
                    <Card.Header><h6>Status</h6></Card.Header>
                    <Card.Body style={{marginLeft: '90px'}}>
                        <h3>Approved</h3>
                    </Card.Body>
                </Card>
                <Card style={{backgroundColor: 'lime', borderRadius: '6px', width: '300px', marginTop: '20px'}}>
                    <Card.Header><h6>License No.</h6></Card.Header>
                    <Card.Body style={{marginLeft: '90px'}}>
                        <h3>549825</h3>
                    </Card.Body>
                </Card>
            </div>
        </div>
        </div>
    );
}

export default LicenseStatus;