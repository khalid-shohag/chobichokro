import React, { useState } from 'react';
import './genre'
import Genre from './genre';
import Cast from './cast';
import Poster from './poster';
import './DistributorPage.css'

const MovieReleaseAnnouncement = () => {
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
            <Genre />
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
            <Cast />
        </div>
        <div>
            <Poster />
        </div>
        
        
        {/* Other form fields for release date and genre */}
        <button type="submit" style={{borderRadius: '3px', marginTop: '10px', backgroundColor: 'yellow'}}>Announce Release</button>
      </form>
      </div>
    </div>
  );
};

export default MovieReleaseAnnouncement;
