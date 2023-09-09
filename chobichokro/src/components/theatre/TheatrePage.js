import React, { useState } from "react";
import Navbar from "../navbar";
import '../distributor/DistributorPage.css'
import { Button, Card } from "react-bootstrap";
import { CardBody } from "reactstrap";
import './TheatrePage.css'
import SeatBooking from "./SeatBooking";
import NewShow from "./show/NewShow";
import ShowList from "./show/ShowList";
import { RunningShow } from "./show/RunningShow";
function TheatrePage() {

    const [ticket, setTicket] = useState(false);
    const [show, setShow] = useState(false);
    const [runningShow, setRunningShow] = useState(true);
    const handleTicket = () => {
        setTicket(true);
        setShow(false);
        setRunningShow(false)
    }
    const handleShow = () => {
        setTicket(false);
        setShow(true);
        setRunningShow(false);
    }
    const handleRunningShow = () => {
        setTicket(false);
        setShow(false);
        setRunningShow(true);
    }

  return (
    <div className="container">
      <div className="row">
        {/* <div className="column">Row 1 - Column 1</div> */}
        {/* <div className="column">Row 1 - Column 2</div> */}
        <Navbar />
      </div>
      <div className="row" style={{marginTop: '100px'}}>
        <div className="column">
            <Button className="btn" onClick={handleRunningShow}>
                <Card>
                    <Card.Body>
                        Running
                    </Card.Body>
                </Card>
            </Button>
        </div>
        <div className="column">
            <Button className="btn"
            onClick={handleShow}>
                <Card>
                    <Card.Body>
                        Add Show
                    </Card.Body>
                </Card>
            </Button>
        </div>
        <div className="column">
            <Button className="btn"
            onClick={handleTicket}>
                <Card>
                    <Card.Body>
                        Ticket
                    </Card.Body>
                </Card>
            </Button>
        </div>
        <div className="column">
            <Button className="btn">
                <Card>
                    <Card.Body>
                        Profit
                    </Card.Body>
                </Card>
            </Button>
        </div>
        {/* <div className="column">Row 2 - Column 2</div> */}
      </div>
      {
        (ticket &&
         <div className="row">
            <SeatBooking />
        </div>)
        
      }
      {
        (show &&
            <div className="row">
               <NewShow />
           </div>)
      }
      {
        (runningShow &&
            <div className="row">
               <RunningShow />
           </div>)
      }
      
    </div>
  );
}


export default TheatrePage;