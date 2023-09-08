import React, { useState } from 'react';
// import './genre'
// import Genre from './genre';
// import Cast from './cast';
// import Poster from './poster';
// import './DistributorPage.css'
import { Card } from 'react-bootstrap';
import { CardBody, CardHeader } from 'reactstrap';
import ShowList from './ShowList';
import ShowTime from './ShowTime';
import Hall from './Hall';

const NewShow = () => {
  const [movieDetails, setMovieDetails] = useState({
    movieName: '',
    releaseDate: '',
    genre: '',
    trailer: ''
  });

  let value = '', onChange = null;
  const [date, setDate] = useState(value || '');

  const handleChange = (event) => {
    const { value } = event.target;
    setDate(value);
    if (onChange) {
      onChange(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and announce movie release.
    // You can use Axios or fetch to send the data to the backend.
  };

  return (
    
    <div >
        
      
      <div >
        <Card style={{backgroundColor: 'gray', marginLeft: '450px', borderRadius: '10px',
        width: '500px', height: 'auto'}}>
            <CardHeader>
                <h2>Add new Show</h2>
            </CardHeader>
            <CardBody style={{marginLeft: '150px'}}>
        <form onSubmit={handleSubmit}>
        <h3>Movie Name </h3>
            <div>
                <ShowList />
            </div>
            {/* <div>
                <Genre />
            </div> */}
            <h3>Show Time</h3>
            <div>
                < ShowTime />
            </div>
            <h3>Hall</h3>
           
            <div>
                <Hall />
            </div>
            
            
            
            {/* Other form fields for release date and genre */}
            <button type="submit" style={{borderRadius: '3px', marginTop: '10px', backgroundColor: 'yellow'}}>Add Show</button>
        </form>
        </CardBody>
      </Card>
      </div>
      
    </div>
  );
};

export default NewShow;
