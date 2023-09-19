import React from 'react'
import './SeatBooking.css';
import { Card } from 'react-bootstrap';
import { CardBody, CardFooter, CardHeader } from 'reactstrap';
import { useState } from 'react';
import Reciept from '../appear/receipt';
import PDFViewer from '@react-pdf/renderer';



class SeatBooking extends React.Component {



  
 
    constructor() {
      super();
        this.state = {
          receipt: false,
        seat: [
          ['A01','A02','A03', 'A04', 'A05', 'A06', 'A07', 'A08', 'A09', 'A10', 'A11','A12','A13', 'A14', 'A15', 'A16', 'A17', 'A18', 'A19', 'A20'],
          ['B01','B02','B03', 'B04', 'B05', 'B06', 'B07', 'B08', 'B09', 'B10', 'B11','B12','B13', 'B14', 'B15', 'B16', 'B17', 'B18', 'B19', 'B20'],
          ['C01','C02','C03', 'C04', 'C05', 'C06', 'C07', 'C08', 'C09', 'C10', 'C11','C12','C13', 'C14', 'C15', 'C16', 'C17', 'C18', 'C19', 'C20'],
          ['D01','D02','D03', 'D04', 'D05', 'D06', 'D07', 'D08', 'D09', 'D10', 'D11','D12','D13', 'D14', 'D15', 'D16', 'D17', 'D18', 'D19', 'D20'],
          ['E01','E02','E03', 'E04', 'E05', 'E06', 'E07', 'E08', 'E09', 'E10', 'E11','E12','E13', 'E14', 'E15', 'E16', 'E17', 'E18', 'E19', 'E20'],
          ['F01','F02','F03', 'F04', 'F05', 'F06', 'F07', 'F08', 'F09', 'F10', 'F11','F12','F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20'],
          ['G01','G02','G03', 'G04', 'G05', 'G06', 'G07', 'G08', 'G09', 'G10', 'G11','G12','G13', 'G14', 'G15', 'G16', 'G17', 'G18', 'G19', 'G20'],
        ],
        seatAvailable: [
            ['A01','A02','A03', 'A04', 'A05', 'A06', 'A07', 'A08', 'A09', 'A10', 'A11','A12','A13', 'A14', 'A15', 'A16', 'A17', 'A18', 'A19', 'A20'],
            ['B01','B02','B03', 'B04', 'B05', 'B06', 'B07', 'B08', 'B09', 'B10', 'B11','B12','B13', 'B14', 'B15', 'B16', 'B17', 'B18', 'B19', 'B20'],
            ['C01','C02','C03', 'C04', 'C05', 'C06', 'C07', 'C08', 'C09', 'C10', 'C11','C12','C13', 'C14', 'C15', 'C16', 'C17', 'C18', 'C19', 'C20'],
            ['D01','D02','D03', 'D04', 'D05', 'D06', 'D07', 'D08', 'D09', 'D10', 'D11','D12','D13', 'D14', 'D15', 'D16', 'D17', 'D18', 'D19', 'D20'],
            ['E01','E02','E03', 'E04', 'E05', 'E06', 'E07', 'E08', 'E09', 'E10', 'E11','E12','E13', 'E14', 'E15', 'E16', 'E17', 'E18', 'E19', 'E20'],
            ['F01','F02','F03', 'F04', 'F05', 'F06', 'F07', 'F08', 'F09', 'F10', 'F11','F12','F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20'],
            ['G01','G02','G03', 'G04', 'G05', 'G06', 'G07', 'G08', 'G09', 'G10', 'G11','G12','G13', 'G14', 'G15', 'G16', 'G17', 'G18', 'G19', 'G20'],
        ],
        seatReserved: [],
        seatUnavailable: ['A12', 'B13', 'C14'],
        reservationCount: 0,
      }
    }

    
    
    handleReservationSubmit = () => {
        // Log the reservationCount value to the console
        console.log(`Total Reservations: ${this.state.reservationCount}`);
        console.log("Reserved Seats", this.state.seatReserved)
        this.setState({
          receipt: true
        })

        console.log("Reciept: ", this.state.receipt)
        // return <Reciept />
      };
    
    onClickData(seat) {
      if(this.state.seatReserved.indexOf(seat) > -1 ) {
        this.setState({
          seatAvailable: this.state.seatAvailable.concat(seat),
          seatReserved: this.state.seatReserved.filter(res => res !== seat),
          reservationCount: this.state.reservationCount - 1,
          
        })
      } else {
        this.setState({
          seatReserved: this.state.seatReserved.concat(seat),
          seatAvailable: this.state.seatAvailable.filter(res => res !== seat),
          reservationCount: this.state.reservationCount + 1,
        })
      }
    }
    
    render() {
      
      const theatre = this.props.theatre
      const hall = this.props.hall
      const showTime = this.props.show
      const movieName = this.props.movie
      const date = this.props.date
      
      return (
        <div style={{marginLeft: '120px'}}>
          <Card style={{backgroundColor: 'transparent', borderRadius: '5px'}}>
            <CardHeader style={{color: 'white'}}>
                <label >
                    <input type='radio' style={{backgroundColor: 'yellowgreen'}}>
                    </input>
                    Available
                </label>
                <label style={{marginLeft: '20px'}}>
                    <input type='radio' style={{backgroundColor: 'lightcoral'}}>
                    </input>
                    Booked
                </label>
                <label style={{marginLeft: '20px'}}>
                    <input type='radio' style={{backgroundColor: 'green'}}>
                    </input>
                    Selected
                </label>
                <h4 style={{color: 'gray'}}>Total selected Seats: {this.state.reservationCount}</h4>
                
            </CardHeader>
            <CardBody>
                <DrawGrid 
                seat = { this.state.seat }
                available = { this.state.seatAvailable }
                reserved = { this.state.seatReserved }
                unavailable = {this.state.seatUnavailable}
                onClickData = { this.onClickData.bind(this) }
                />
            </CardBody>
            <CardFooter>
                <button style={{marginLeft: '550px', cursor: 'pointer', backgroundColor: 'gold', borderColor: 'gold'}}
                onClick={this.handleReservationSubmit}>Submit</button>
                {/* <Reciept /> */}
                
            </CardFooter>
          </Card>
          {
                  this.state.receipt && (
                  // <div><a href='/movie/reciept'>Open Receipt</a></div>
                  <Reciept movie={movieName} date={date}  theatre={theatre} hall={hall} showTime={showTime} seats={this.state.seatReserved} />
                  )
               }
        </div>
      )
    }
    
      
  }

  export default SeatBooking
  
  class DrawGrid extends React.Component {

    render() {
      return (
         <div className="container">
          <table className="grid">
            <tbody>
              { this.props.seat.map((numList,i) => (
                <tr key={i}>
                { numList.map ( seat_no =>
                  <td 
                    className={this.props.unavailable.indexOf(seat_no) > -1? 'unavailable': this.props.reserved.indexOf(seat_no) > -1? 'reserved': 'available'}
                    key={seat_no} onClick = {e => this.onClickSeat(seat_no)}>{seat_no} 
                  </td>
                )}
                </tr>
              ))
              }
            </tbody>
          </table>
          
          {/* <AvailableList available = { this.props.available } />
          <ReservedList reserved = { this.props.reserved } /> */}
         </div>
      )
    }
    
    
    onClickSeat(seat) {
      this.props.onClickData(seat);
    }
  }
