import React from 'react'
import './SeatBooking.css';
import {Card} from 'react-bootstrap';
import {CardBody, CardFooter, CardHeader} from 'reactstrap';
import Reciept from '../appear/receipt';
import axios from "axios";
import {toast} from 'react-toastify';


class SeatBooking extends React.Component {

    hasGot = 0;
    scheduleIdName = ""
    token_token = ""


    constructor(props) {
        console.log(JSON.stringify(props))

        super(props);
        this.token_token = this.props.token
        console.log(this.token_token, "is the token")
        this.state = {
            receipt: false,
            seat: [
                ['A01', 'A02', 'A03', 'A04', 'A05', 'A06', 'A07', 'A08', 'A09', 'A10', 'A11', 'A12', 'A13', 'A14', 'A15', 'A16', 'A17', 'A18', 'A19', 'A20'],
                ['B01', 'B02', 'B03', 'B04', 'B05', 'B06', 'B07', 'B08', 'B09', 'B10', 'B11', 'B12', 'B13', 'B14', 'B15', 'B16', 'B17', 'B18', 'B19', 'B20'],
                ['C01', 'C02', 'C03', 'C04', 'C05', 'C06', 'C07', 'C08', 'C09', 'C10', 'C11', 'C12', 'C13', 'C14', 'C15', 'C16', 'C17', 'C18', 'C19', 'C20'],
                ['D01', 'D02', 'D03', 'D04', 'D05', 'D06', 'D07', 'D08', 'D09', 'D10', 'D11', 'D12', 'D13', 'D14', 'D15', 'D16', 'D17', 'D18', 'D19', 'D20'],
                ['E01', 'E02', 'E03', 'E04', 'E05', 'E06', 'E07', 'E08', 'E09', 'E10', 'E11', 'E12', 'E13', 'E14', 'E15', 'E16', 'E17', 'E18', 'E19', 'E20'],
                ['F01', 'F02', 'F03', 'F04', 'F05', 'F06', 'F07', 'F08', 'F09', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20'],
                ['G01', 'G02', 'G03', 'G04', 'G05', 'G06', 'G07', 'G08', 'G09', 'G10', 'G11', 'G12', 'G13', 'G14', 'G15', 'G16', 'G17', 'G18', 'G19', 'G20'],
            ],
            seatAvailable: [
                ['A01', 'A02', 'A03', 'A04', 'A05', 'A06', 'A07', 'A08', 'A09', 'A10', 'A11', 'A12', 'A13', 'A14', 'A15', 'A16', 'A17', 'A18', 'A19', 'A20'],
                ['B01', 'B02', 'B03', 'B04', 'B05', 'B06', 'B07', 'B08', 'B09', 'B10', 'B11', 'B12', 'B13', 'B14', 'B15', 'B16', 'B17', 'B18', 'B19', 'B20'],
                ['C01', 'C02', 'C03', 'C04', 'C05', 'C06', 'C07', 'C08', 'C09', 'C10', 'C11', 'C12', 'C13', 'C14', 'C15', 'C16', 'C17', 'C18', 'C19', 'C20'],
                ['D01', 'D02', 'D03', 'D04', 'D05', 'D06', 'D07', 'D08', 'D09', 'D10', 'D11', 'D12', 'D13', 'D14', 'D15', 'D16', 'D17', 'D18', 'D19', 'D20'],
                ['E01', 'E02', 'E03', 'E04', 'E05', 'E06', 'E07', 'E08', 'E09', 'E10', 'E11', 'E12', 'E13', 'E14', 'E15', 'E16', 'E17', 'E18', 'E19', 'E20'],
                ['F01', 'F02', 'F03', 'F04', 'F05', 'F06', 'F07', 'F08', 'F09', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20'],
                ['G01', 'G02', 'G03', 'G04', 'G05', 'G06', 'G07', 'G08', 'G09', 'G10', 'G11', 'G12', 'G13', 'G14', 'G15', 'G16', 'G17', 'G18', 'G19', 'G20'],
            ],
            seatReserved: [],
            seatUnavailable: [],
            reservationCount: 0,
        }
    }

    get_available_seats = async (props) => {
        const theatre = props.theatre
        const hall = props.hall
        const movieName = props.movie
        const date = props.date
        const token = "Bearer " + props.token;
        if (this.props.scheduleId != null) {
            this.scheduleIdName = this.props.scheduleId
            const load_toast = toast.loading("Pleasing Wait... ticket for the schedule is loading")
            this.get_seat().then(() => {
                toast.update(load_toast, {
                    render: `Tickets are ready. Select and book the ticket`,
                    type: "success",
                    isLoading: false,
                    autoClose: 100
                })
            }).catch(() => {
                toast.update(load_toast, {
                    render: `Please try again.`,
                    type: "error",
                    isLoading: false,
                    autoClose: 100
                })

            })
            return null;
        }


        let url_ = `http://localhost:8080/api/audience/get_schedule_id?movieName=${movieName}&theaterId=${theatre}&date=${date}&hallNumber=${hall}`

        await axios.get(url_).then(async value => {
            this.scheduleIdName = value.data

            const load_toast = toast.loading("Pleasing Wait... ticket for the schedule is loading")
            this.get_seat().then(() => {
                toast.update(load_toast, {
                    render: `Tickets are ready. Select and book the ticket`,
                    type: "success",
                    isLoading: false,
                    autoClose: 5000
                })
            }).catch(() => {
                toast.update(load_toast, {
                    render: `Please try again.`,
                    type: "error",
                    isLoading: false,
                    autoClose: 5000
                })

            })


        }).catch(e => console.log(e))
    }

    get_seat = async () => {
        let url = `http://localhost:8080/api/ticket/${this.scheduleIdName}`
        await axios.get(url).then(response => {
            // alert(JSON.stringify(response))
            let available = []
            let booked = []
            response.data.map((ticket) => {
                // console.log("TICKET", ticket)
                // console.log("BOOKED", ticket.booked)
                if (ticket.booked) booked.push(ticket.seatNumber)
                else available.push(ticket.seatNumber)
            })

            this.setState({
                seatAvailable: available,
                seatUnavailable: booked
            })
        }).catch(e => {
            toast(e)
        })
    }

    book_seat = async (url, seats, paymentId, token) => {
        // let token = "Bearer " + this.props.token
        let n = seats.length
        let formData = new FormData();
        formData.append("paymentId", paymentId);
        formData.append("seatNumbers", seats)
        console.log(seats, url, paymentId)
        console.log(token);
        const toast_load = toast.loading("Your request is being processed.")

        await axios.post(url, formData,
            {
                headers: {
                    Authorization: token
                }
            }).then((value) => {
            toast.update(toast_load, {
                render: `Seat booked successfully. Enjoy the movie on time.`,
                type: "success",
                isLoading: false,
                autoClose: 5000
            })

        }).catch((err) => {
            toast.update(toast_load, {render: `${err.response.data}`, type: "error", isLoading: false, autoClose: 5000})

        })


    }
    handleReservationSubmit = async () => {
        // Log the reservationCount value to the console
        console.log(`Total Reservations: ${this.state.reservationCount}`);
        console.log("Reserved Seats", this.state.seatReserved)
        let seats = this.state.seatReserved

        let n = seats.length

        function generateRandomString() {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';

            for (let i = 0; i < characters.length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                result += characters.charAt(randomIndex);
            }

            return result;
        }

        // generate a random number for payment
        let paymentId = generateRandomString();
        let url = `http://localhost:8080/api/user/book_multiple/${this.scheduleIdName}`
        const token = "Bearer " + this.token_token;

        await this.book_seat(url, seats, paymentId, token).then((value) => {
            this.setState({
                receipt: true
            })
        })
    };

    onClickData(seat) {
        if (this.state.seatReserved.indexOf(seat) > -1) {
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

    componentDidMount() {
        let seats_data = this.get_available_seats(this.props)

        // console.log(seats_data.then((value) => {
        //     this.setState({
        //         seatAvailable: value.available,
        //         seatUnavailable: value.booked
        //     })
        // }))
        console.log('Got ', this.seatUnavailable)
        this.hasGot = 1
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.date === prevProps.date && this.props.show === prevProps.show && this.props.hall === prevProps.hall) {
            return;
        }
        console.log("props " + JSON.stringify(prevProps))
        console.log("state " + JSON.stringify(prevState))

        let seats_data = this.get_available_seats(this.props)

        // console.log(seats_data.then((value) => {
        //     this.setState({
        //         seatAvailable: value.available,
        //         seatUnavailable: value.booked
        //     })
        // }))
        console.log('Got ', this.seatUnavailable)
        this.hasGot = 1
    }


    render() {

        const theatre = this.props.theatre
        const hall = this.props.hall
        const showTime = this.props.show
        const movieName = this.props.movie
        const date = this.props.date
        const token = this.props.token
        const theatreName = this.props.theatreName
        console.log(this.props)


        return (
            <div style={{backgroundColor: this.props.bgColor,}}>

                <Card style={{marginLeft: '120px', borderRadius: '5px'}}>
                    <CardHeader style={{color: 'white'}}>
                        <label>
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
                            seat={this.state.seat}
                            available={this.state.seatAvailable}
                            reserved={this.state.seatReserved}
                            unavailable={this.state.seatUnavailable}
                            onClickData={this.onClickData.bind(this)}
                        />
                    </CardBody>
                    <CardFooter>
                        <button style={{
                            marginLeft: '550px', cursor: 'pointer', backgroundColor: '#00A86B', border: 'none',
                            height: '70px', width: '90px', borderRadius: '10px',
                        }}
                                onClick={this.handleReservationSubmit}>Submit
                        </button>
                        {' '}
                        {this.state.receipt ? (this.state.reservationCount > 0 ? (
                            <Reciept audience_name={this.props.audience_name} movie={movieName} date={date}
                                     theatre={theatreName} hall={hall} showTime={showTime}
                                     seats={this.state.seatReserved} theatreName={theatre}/>
                        ) : (<div>
                            {toast('Select a seat first')}
                        </div>)) : (<div>

                        </div>)}
                        {/* {
                            this.state.seatReserved>0 ? ( this.state.receipt && (
                        <Reciept audience_name={this.props.audience_name} movie={movieName} date={date} theatre={theatreName} hall={hall} showTime={showTime}
                        seats={this.state.seatReserved} theatreName={theatre}/> )) : (<div></div>)
                    
                } */}
                        {/* <Reciept /> */}

                    </CardFooter>
                </Card>

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
                    {this.props.seat.map((numList, i) => (
                        <tr key={i}>
                            {numList.map(seat_no =>
                                <td
                                    className={this.props.unavailable.indexOf(seat_no) > -1 ? 'unavailable' : this.props.reserved.indexOf(seat_no) > -1 ? 'reserved' : 'available'}
                                    key={seat_no} onClick={e => this.onClickSeat(seat_no)}>{seat_no}
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
