// import React, { useState } from 'react';
// // import './genre'
// // import Genre from './genre';
// // import Cast from './cast';
// // import Poster from './poster';
// // import './DistributorPage.css'
// import { Card } from 'react-bootstrap';
// import { CardBody, CardHeader } from 'reactstrap';
// import ShowList from './ShowList';
// import ShowTime from './ShowTime';
// import Hall from './Hall';
// import axios from 'axios';

// const NewShow = () => {
//   const [name, setName] = useState('');
//   const [time, setTime] = useState('');
//   const [hall, setHall] = useState(0);
//   const [movieDetails, setMovieDetails] = useState({
//     movieName: '',
//     releaseDate: '',
//     genre: '',
//     trailer: ''
//   });

//   let value = '', onChange = null;
//   const [date, setDate] = useState(value || '');

//   const handleChange = (event) => {
//     const { value } = event.target;
//     setDate(value);
//     if (onChange) {
//       onChange(value);
//     }
//   };

//   const handleTime = (event) => {
//     const { value } = event.target.value;
//     setTime(value);
//     if (onChange) {
//       onChange(value);
//     }
//   };

//   const handleName = (event) => {
//     const { value } = event.target.value;
//     setName(value);
//     if (onChange) {
//       onChange(value);
//     }
//   };

//   const handleHall = (event) => {
//     const { value } = event.target.value;
//     setHall(value);
//     if (onChange) {
//       onChange(value);
//     }
//   };

  


//   const sendData =  () => {
//     console.log("DEtails");
//     console.log(name, time, hall);    

//     const formData = new FormData()
//     formData.append('movieName', name)
//     formData.append('scheduleDate', time)
//     formData.append('hallNumber', hall)

// //     try {
// //       const response = await axios.post('http://localhost:8080/api/schedule/add', 
// //       //   distributorId: "64f35e979a849b4b2960866d",
// //       //   movieName: movieDetails.movieName,
// //       //   releaseDate: "11/09/2023",
// //       //   trailer: movieDetails.trailer,
// //       //   genre: selectedGenres, // Pass the selected genres
// //       //   // image: selectedPosters,
// //       //   status: "upcoming",
// //       //   description: inputValue, // Pass the selected posters
// //       //   // ... Other data fields
// //       // }
// //       formData,
// //        {
// //         headers: {
// //           'Content-Type': 'multipart/form-data',
// //         }
// //       }
// // );

// //     console.log("Successful", response.data)
// //     console.log(name, time, hall);  // Handle success and reset the form as needed
      
// //     } catch (error) {
// //       // Handle error
// //       console.log(name, time, hall);
// //       console.error('Error sending data:', error);
// //     }
// };


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission and announce movie release.
//     // You can use Axios or fetch to send the data to the backend.
//   };

//   return (
    
//     <div >
        
      
//       <div >
//         <Card style={{backgroundColor: 'gray', marginLeft: '450px', borderRadius: '10px',
//         width: '500px', height: 'auto'}}>
//             <CardHeader>
//                 <h2>Add new Show</h2>
//             </CardHeader>
//             <CardBody style={{marginLeft: '150px'}}>
//         <form onSubmit={handleSubmit}>
//         <h3>Movie Name </h3>
//             <div>
//                 <ShowList />
//             </div>
//             {/* <div>
//                 <Genre />
//             </div> */}
//             <h3>Show Time</h3>
//             <div>
//                 < ShowTime />
//             </div>
//             <h3>Hall</h3>
           
//             <div>
//                 <Hall />
//             </div>

//             <div>
//               <form>
//                 <div>
//                   <h3>name</h3>
//               <input
//                 type="text"
//                 placeholder="Movie Name"
//                 value={name}
//                 onChange={handleName}
//                 style={{borderRadius: '7px', width: '300px'}}
//               />
//               </div>
//               <div>
//                   <h3>Time</h3>
//               <input
//                 type="datetime-local"
//                 value={time}
//                 onChange={handleTime}
//                 placeholder="Select a date"
//                 style={{borderRadius: '7px'}}
//               />
//               </div>
//               <div>
//                   <h3>Hall</h3>
//               <input
//                 type="number"
//                 placeholder="Hall no."
//                 value={hall}
//                 onChange={handleHall}
//                 style={{borderRadius: '7px', width: '300px'}}
//               />
//               </div>
//               </form>
//             </div>
            
            
            
//             {/* Other form fields for release date and genre */}
//             <button type="submit" style={{borderRadius: '3px', marginTop: '10px', backgroundColor: 'yellow'}} onClick={sendData}>Add Show</button>
//         </form>
//         </CardBody>
//       </Card>
//       </div>
      
//     </div>
//   );
// };

// export default NewShow;


import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { CardBody, CardHeader } from 'reactstrap';
import ShowList from './ShowList';
import ShowTime from './ShowTime';
import Hall from './Hall';
import axios from 'axios';

const NewShow = () => {
  const [name, setName] = useState('');
  const [time, setTime] = useState(new Date());
  const [hall, setHall] = useState(0);
  const [date, setDate] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setDate(value);
  };

  const handleTime = (event) => {
    const selectedDate = new Date(event.target.value);
    console.log(selectedDate);
    setTime(selectedDate);

  };

  const handleName = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const handleHall = (event) => {
    const { value } = event.target;
    setHall(value);
  };

  const sendData = async () => {
    console.log("Details");
    console.log(name, time, hall);

    const formData = new FormData();
    formData.append('movieName', name);
    formData.append('scheduleDate', time);
    formData.append('hallNumber', hall);

    try {
      const response = await axios.post('http://localhost:8080/api/schedule/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log("Successful", response.data);
      console.log(name, time, hall);

    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and announce movie release.
    // You can use Axios or fetch to send the data to the backend.
  };

  return (
    <div>
      <div>
        <Card style={{
          backgroundColor: 'gray',
          marginLeft: '450px',
          borderRadius: '10px',
          width: '500px',
          height: 'auto',
          marginTop: '50px',
          background: 'transparent',
          border: '15px solid yellowgreen',
          borderWidth: '15px', 
          borderStyle: 'solid',
          // backgroundColor: 'yellow',
          color: 'yellowgreen'
        }}>
          <CardHeader>
            <h2>Add new Show</h2>
          </CardHeader>
          <CardBody style={{ marginLeft: '150px' }}>
            <form onSubmit={handleSubmit}>
              <h3>Movie Name </h3>
              <div>
                <ShowList />
              </div>
              <h3>Show Time</h3>
              <div>
                < ShowTime />
              </div>
              <h3>Hall</h3>
              <div>
                <Hall />
              </div>

              {/* <div>
                <form>
                  <div>
                    <h3>name</h3>
                    <input
                      type="text"
                      placeholder="Movie Name"
                      value={name}
                      onChange={handleName}
                      style={{ borderRadius: '7px', width: '300px' }}
                    />
                  </div>
                  <div>
                    <h3>Time</h3>
                    <input
                      type="datetime-local"
                      value={time}
                      onChange={handleTime}
                      placeholder="Select a date"
                      style={{ borderRadius: '7px' }}
                    />
                  </div>
                  <div>
                    <h3>Hall</h3>
                    <input
                      type="number"
                      placeholder="Hall no."
                      value={hall}
                      onChange={handleHall}
                      style={{ borderRadius: '7px', width: '300px' }}
                    />
                  </div>
                </form>
              </div> */}

              <button type="submit" style={{
                borderRadius: '3px',
                marginTop: '10px',
                backgroundColor: 'yellow'
              }} onClick={sendData}>Add Show</button>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default NewShow;
