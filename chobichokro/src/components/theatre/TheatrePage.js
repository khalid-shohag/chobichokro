import React from "react";
import Navbar from "../navbar";
import '../distributor/DistributorPage.css'
import { Button, Card } from "react-bootstrap";
import { CardBody } from "reactstrap";
import './TheatrePage.css'
import SeatBooking from "./SeatBooking";
function TheatrePage() {

  return (
    <div className="container">
      <div className="row">
        {/* <div className="column">Row 1 - Column 1</div> */}
        {/* <div className="column">Row 1 - Column 2</div> */}
        <Navbar />
      </div>
      <div className="row" style={{marginTop: '100px'}}>
        <div className="column">
            <Button className="btn">
                <Card>
                    <Card.Body>
                        Running
                    </Card.Body>
                </Card>
            </Button>
        </div>
        <div className="column">
            <Button className="btn">
                <Card>
                    <Card.Body>
                        Add Show
                    </Card.Body>
                </Card>
            </Button>
        </div>
        <div className="column">
            <Button className="btn">
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
      <div className="row">
        <SeatBooking />
      </div>
    </div>
  );
}


export default TheatrePage;