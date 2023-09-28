import React, {useEffect, useState} from 'react';
import {Card} from 'react-bootstrap';
import {CardBody, CardHeader} from 'reactstrap';
import ShowList from './ShowList';
import ShowTime from './ShowTime';
import Hall from './Hall';
import axios from 'axios';
import {TheatreDataLoading} from '../../appear/TheatreDataLoading';
import { toast } from 'react-toastify';

const NewShow = (props) => {
    const [name, setName] = useState('');
    const [time, setTime] = useState(new Date());
    const [hall, setHall] = useState('');
    const [date, setDate] = useState('');
    const [showTime, setShowTime] = useState([]);
    const [movieName, setMovieName] = useState('');
    const [load, setLoad] = useState(true)
    const [buttonClcik, setButtonClick] = useState(false)

    const [idTheatre, setIdTheatre] = useState('');

    const getTheatreId = async () => {

        try {
            const response = await axios.get("http://localhost:8080/api/theater/my_theater", {
                headers: {
                    Authorization: `Bearer ${props.token}`
                }
            }).then(res => {
                console.log("Theatre ID: ", res.data.id)
                setIdTheatre(res.data.id);
                // props.setLoad(false)
                setLoad(false)
            })

        } catch (error) {
            console.log("Error fetching data", error);
        }
    };

    useEffect(() => {
        getTheatreId();

    }, []);

    const onSelectShowTime = (time) => {
        setShowTime(time);
    }
    const onSelectMovieName = (name) => {
        setMovieName(name);
    }
    const onSelectHall = (hall) => {
        setHall(hall);
    }

    const handleChange = (event) => {
        const {value} = event.target;
        setDate(value);
    };

    const handleTime = (event) => {
        const selectedDate = new Date(event.target.value);
        console.log(selectedDate);
        setTime(selectedDate);

    };

    const handleName = (event) => {
        const {value} = event.target;
        setName(value);
    };

    const handleHall = (event) => {
        const {value} = event.target;
        setHall(value);
    };

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleStartDateChange = (event) => {
        const inputDate = event.target.value;
        setStartDate(inputDate)
        // setStartDate(usableDate(inputDate));
        console.log("Date: ", startDate);


    };

    const handleEndDateChange = (event) => {
        const inputDate = event.target.value;

        setEndDate(inputDate)
        // setEndDate(usableDate(inputDate));
        console.log("Date: ", endDate);

    }

    const sendData = () => {
        console.log("Details");
        console.log(name, time, hall);
        console.log("theatre: ", idTheatre);
        setButtonClick(true)
        console.log("Button Click: ", buttonClcik)
        // alert(load)

        makeSchedule(startDate, endDate, showTime, movieName, hall, idTheatre, props.token)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission and announce movie release.
        // You can use Axios or fetch to send the data to the backend.
    };

    return (
        <div style={{display: 'flex'}}>
            <div>
                <Card style={{
                    background: 'gray',
                    marginLeft: '450px',
                    borderRadius: '10px',
                    width: '500px',
                    height: 'auto',
                    marginTop: '50px',
                    // background: 'transparent',
                    border: '10px solid yellowgreen',
                    borderWidth: '15px',
                    borderStyle: 'solid',
                    // backgroundColor: 'yellow',
                    color: 'yellowgreen'
                }}>
                    <CardHeader>
                        <h2>Add new Show</h2>
                    </CardHeader>
                    <CardBody style={{marginLeft: '150px'}}>

                        <h3>Movie Name </h3>
                        <div>
                            <ShowList onMovieName={onSelectMovieName} token={props.token}/>
                        </div>
                        <h3>Start Date </h3>
                        <div>
                            <input
                                type="date"
                                value={startDate}
                                onChange={handleStartDateChange}
                                placeholder="Select a date"
                                style={{borderRadius: '7px'}}
                            />
                            <p style={{color: 'white'}}>Start Date: {startDate}</p>
                        </div>
                        <h3>End Date </h3>
                        <div>
                            <input
                                type="date"
                                value={endDate}
                                onChange={handleEndDateChange}
                                placeholder="Select a date"
                                style={{borderRadius: '7px'}}
                            />
                            <p style={{color: 'white'}}>End Date: {endDate}</p>
                        </div>
                        <h3>Show Time</h3>
                        <div>
                            < ShowTime onShowTime={onSelectShowTime}/>
                        </div>
                        <h3>Hall</h3>
                        <div>
                            <Hall onHall={onSelectHall} token={props.token}/>
                        </div>

                        <button type="submit" style={{
                            borderRadius: '3px',
                            marginTop: '10px',
                            border: 'none',
                            backgroundColor: '#5cb85c',
                            marginLeft: '17%',
                            height: '40px',
                            width: '100px',
                        }} onClick={sendData}>Add Show
                        </button>

                    </CardBody>
                </Card>
            </div>
            <div style={{marginLeft: '6%'}}>
                {/* {buttonClcik? (alert("Button Click: ")): (<div></div>)} */}
                {buttonClcik ? (load ? (<TheatreDataLoading value='Add Show'/>) : (<div></div>)) : (<div></div>)}
            </div>
        </div>
    );
};

export default NewShow;

function usableDate(inputDate) {
    const parsedDate = new Date(inputDate);
    if (!isNaN(parsedDate.getTime())) {
        const day = parsedDate.getDate().toString().padStart(2, '0');
        const month = (parsedDate.getMonth() + 1).toString().padStart(2, '0');
        const year = parsedDate.getFullYear().toString();
        return `${day}/${month}/${year}`;
    }
}

function parseDate(dateString) {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day); // Month is 0-based
}

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}


async function makeSchedule(sDate, eDate, time, movieName, hall, theaterId, token) {
    console.log("Making Schedule");
    const startDate = parseDate(sDate);
    const endDate = parseDate(eDate);
    console.log("Start Date: ", startDate);
    console.log("End Date: ", endDate);

    // const dates = [];

    // console.log("Current Date: ", currentDate)
    console.log("Condition: ", startDate <= endDate)
    console.log("Time: ", time)
    console.log("Time Length: ", time.length)
    console.log("Movie Name: ", movieName)
    console.log("Hall: ", hall)
    let success = true

    for (let i = 0; i < time.length; i++) {
        console.log("Time: ", time[i])

        let currentDate = new Date(startDate);
        while (currentDate <= endDate) {
            console.log("ALl date: ", usableDate(currentDate) + " " + time[i])
            const formData = new FormData();
            formData.append('scheduleId', generateRandomString(23));
            formData.append('movieName', movieName);
            formData.append('theaterId', theaterId)
            formData.append('scheduleDate', usableDate(currentDate) + " " + time[i])
            formData.append('hallNumber', parseInt(hall));

            try {
                const response = await axios.post('http://localhost:8080/api/schedule/add', formData, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }

                }).then((response) => {
                    console.log("Successful", response.data)
                    console.log("ALl date: ", usableDate(currentDate) + " " + time[i])
                })
                
                // currentDate.setDate(currentDate.getDate() + 1);
            } catch (error) {
                console.log("Error: ", error)
                success = false
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }
        // dates.push(formatDate(currentDate));
        // console.log("1")


    }
    if (success)
        toast('Successfully schedule added')
    else
        toast('Error adding schedule')
}