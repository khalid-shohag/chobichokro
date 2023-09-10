import React, { useState } from 'react';
import './genre'
import Genre from './genre';
import Cast from './cast';
import Poster from './poster';
import './DistributorPage.css'
import axios from 'axios';

const MovieReleaseAnnouncement = () => {
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

  const handleChange = (event) => {
    const { value } = event.target;
    setDate(value);
    if (onChange) {
      onChange(value);
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
  // ... Other code remains the same

  // Callback function to handle selected genres from Genre component
  const handleGenreSelect = (genres) => {
    setSelectedGenres(genres);
  };

  // Callback function to handle selected posters from Poster component
  const handlePosterSelect = (posters) => {
    setSelectedPosters(posters);
  };
  const handleCastSelect = (casts) => {
    setSelectedCasts(casts);
  };

  // Send data to the backend API
  const sendMovieReleaseData = async () => {
    console.log('Post Values')
    console.log(movieDetails.movieName, movieDetails.trailer, date, selectedGenres, selectedPosters);
    console.log(selectedCasts);
    try {
      const response = await axios.post('localhost:8080/api/movies/add', {
        movieName: movieDetails.movieName,
        releaseDate: date,
        trailer: movieDetails.trailer,
        genre: selectedGenres, // Pass the selected genres
        posters: selectedPosters,
        status: "upcoming",
        description: inputValue, // Pass the selected posters
        // ... Other data fields
      });

      // Handle success and reset the form as needed
      console.log('Data sent successfully:', response.data);
      setMovieDetails({
        movieName: '',
        releaseDate: '',
        trailer: '',
      });
      setSelectedGenres([]);
      setSelectedPosters([]);
      // ... Reset other form fields as needed

    } catch (error) {
      // Handle error
      console.error('Error sending data:', error);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and announce movie release.
    // You can use Axios or fetch to send the data to the backend.
  };

  return (
    
    <div className='announce-movie'>
        
      
      <div >
        
      <div style={{marginRight: 'auto'}}>
            <h2>Movie Release Announcement</h2>
        </div>

      <form onSubmit={handleSubmit}>
      <h3>Movie Name </h3>
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
        <h3>Description</h3>
        <div>
          <textarea
          style={{ width: '400px', height: "2rem" }}
          onChange={handleInputChange}
          value={inputValue}
          placeholder="Add description..."
          />

        </div>
        <h3>Release Date</h3>
        <div>
            <input
            type="date"
            value={date}
            onChange={handleChange}
            placeholder="Select a date"
            style={{borderRadius: '7px'}}
            />
        </div>
        <h3>Trailer Link</h3>
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
            <Poster onPosterSelect={handlePosterSelect}/>
        </div>
        
        
        {/* Other form fields for release date and genre */}
        <button type="submit" style={{borderRadius: '3px', marginTop: '10px', backgroundColor: 'yellow'}} onClick={sendMovieReleaseData}>Announce Release</button>
      </form>
      </div>
    </div>
  );
};

export default MovieReleaseAnnouncement;
