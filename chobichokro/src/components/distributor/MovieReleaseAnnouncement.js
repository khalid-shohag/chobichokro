import React, { useState } from 'react';
import './genre'
import Genre from './genre';
import Cast from './cast';
import Poster from './poster';
import './DistributorPage.css'
import axios from 'axios';
import Director from "./director";
import { render } from '@testing-library/react';

const MovieReleaseAnnouncement = (props) => {
  // const [movieDetails, setMovieDetails] = useState({
  //   movieName: '',
  //   releaseDate: '',
  //   genre: '',
  //   trailer: ''
  // });

  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Calculate the input size based on the length of the input value
    
  };


  let value = '', onChange = null;
  const [date, setDate] = useState(value || '');
  const [d, sd] = useState('')

  const handleDateChange = (event) => {
    sd(event.target.value)
    const inputDate = event.target.value;
    const parsedDate = new Date(inputDate);
    if (!isNaN(parsedDate.getTime())) {
      const day = parsedDate.getDate().toString().padStart(2, '0');
      const month = (parsedDate.getMonth() + 1).toString().padStart(2, '0');
      const year = parsedDate.getFullYear().toString();
      const formattedDate = `${day}/${month}/${year}`;
      setDate(formattedDate);
      console.log("Date: ", formattedDate);
    }

  };

  const [movieDetails, setMovieDetails] = useState({
    movieName: '',
    releaseDate: '',
    trailer: '',
  });

  const [selectedGenres, setSelectedGenres] = useState([]); // State to hold selected genres
  const [selectedPosters, setSelectedPosters] = useState([]); // State to hold selected posters
  const [selectedCasts, setSelectedCasts] = useState([]);
  const [director, setDirector] = useState([])
  const [cost, setCost] = useState(' ')

  const setTheCost = (cost) => {
    setCost(cost)
  }
  // ... Other code remains the same

  // Callback function to handle selected genres from Genre component
  const handleGenreSelect = (genres) => {
    setSelectedGenres(genres);
  };

  const handleDirectorSelect = (director) => {
    setDirector(director)
  }

  // Callback function to handle selected posters from Poster component
  const handlePosterSelect = (posters) => {
    setSelectedPosters(posters);
  };
  const handleCastSelect = (casts) => {
    setSelectedCasts(casts);
  };

  // const [sendMovieDataasJson, setSendMovieDataasJson] = useState('');

  // Send data to the backend API
  const sendMovieReleaseData = async () => {

    const formData = new FormData();
    formData.append('movieName', movieDetails.movieName);
    formData.append('genre', selectedGenres);
    formData.append('cast', selectedCasts)
    formData.append('director', director)
    formData.append('releaseDate', date)
    formData.append('trailerLink', movieDetails.trailer)
    formData.append('status', 'upcoming')
    formData.append('description', inputValue)
    // formData.append('distributorId', "68m35e979a84h9b4b296068d")
    formData.append('image', selectedPosters[0])
    formData.append('cost', cost)

    console.log("Date: ", movieDetails.releaseDate)
    console.log("Details", formData.get('movieName'))
    console.log("Date: ", date)
    console.log(movieDetails.movieName, selectedGenres, selectedCasts, director, date, movieDetails.trailer, selectedPosters, inputValue)

    // formData.append('Authentication', `Bearer ${props.token}`)

    console.log('Authentication', `Bearer ${props.token}`)

    // const axiosInstance = axios.create({
    //   baseURL: 'http://localhost:8080', // Replace with your API's base URL
    //   headers: {
    //     Authorization: `Bearer ${props.token}`,
        
    //   },
    // });


    


    // console.log('Post Values')
    // console.log(movieDetails.movieName, movieDetails.trailer, date, selectedGenres, selectedPosters);
    
    console.log("Posters", selectedPosters);
    const reader = new FileReader();
    // reader.readAsDataURL(selectedPosters[0]);
    console.log("Image File", selectedPosters[0])

    console.log("Form Data: ", formData.get('image'));
    console.log("Token: ", props.token)
    try {
      const response = await axios.post('http://localhost:8080/api/distributor/addMovie', 
      formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${props.token}`,
        }
      }
);

      // Handle success and reset the form as needed
      console.log('Data sent successfully:', response.data);
      alert("Movie Release Announced Successfully")
      
  

    } catch (error) {

      console.log("Check CMD")
      // Handle error
      console.error('Error sending data:', error);
      alert("Movie Announcement Failed")
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and announce movie release.
    // You can use Axios or fetch to send the data to the backend.
  };

  return (
    
    <div style={{position: 'relative', marginTop: '60px'}}>
        
        <div style={{marginRight: 'auto', marginLeft: '70px'}}>
            <h2>Movie Release Announcement</h2>
        </div>
      <div style={{display: 'flex', marginTop: '50px', marginLeft: '80px'}}>
      
      

        <div style={{flex: 1, marginRight: '70px'}}>
       
      <h3 style={{color: 'gray'}}>Movie Name </h3>
        <input
          type="text"
          placeholder="Movie Name"
          value={movieDetails.movieName}
          onChange={(e) => setMovieDetails({ ...movieDetails, movieName: e.target.value })}
          style={{borderRadius: '7px', width: '300px'}}
        />
        <div>
            <Genre onGenreSelect={handleGenreSelect}/>
        </div>
        <h3 style={{color: 'gray', marginTop: '5px'}}>Description</h3>
        <div>
          <textarea
          style={{ width: '400px', height: "2rem", backgroundColor: 'lightblue', borderRadius: '7px', boxShadow: '5px 5px blue, 10px 10px red' }}
          onChange={handleInputChange}
          value={inputValue}
          placeholder="Add description..."
          />

        </div>
        <h3 style={{color: 'gray', marginTop: '5px'}}>Release Date</h3>
        <div>
            <input
            type="date"
            value={d}
            onChange={handleDateChange}
            placeholder="Select a date"
            style={{borderRadius: '7px'}}
            />
        </div>
       
        </div>

      <div style={{flex: 1}}>
        <h3 style={{color: 'gray'}}>Trailer Link</h3>
        <div>
            <input
            style    = {{width: '550px', borderRadius: '7px'}}
            type="trailer"
            placeholder="Trailer"
            value={movieDetails.trailer}
            onChange={(e) => setMovieDetails({ ...movieDetails, trailer: e.target.value })}
            
            />
        </div>
        <div>
            <Cast onCastsSelect={handleCastSelect}/>
        </div>
        <div>
          <Director onDirectorSelect={handleDirectorSelect} />
        </div>
        <div>
            <Poster onPosterSelect={handlePosterSelect}/>
        </div>
        <div>
          <h3 style={{color: 'gray', marginTop: '5px'}}>Total Cost.</h3>
          <input
              style    = {{width: '180px', borderRadius: '7px'}}
              type="number"
              placeholder="Taka"
              value={cost}
              onChange={(e) => setCost(e.target.value)}

          />
        </div>
        </div>
        
        {/* Other form fields for release date and genre */}
        
      
      </div>
      <button type="submit" style={{ marginLeft: '34%',borderRadius: '3px', cursor: 'pointer', marginTop: '10%', backgroundColor: 'yellow', border: 'none'}} onClick={sendMovieReleaseData}>Announce Release</button>
    </div>
  );
};

export default MovieReleaseAnnouncement;
