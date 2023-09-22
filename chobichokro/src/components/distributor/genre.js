import React, { useState } from 'react';

const Genre = ({ onGenreSelect }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptionsList, setSelectedOptionsList] = useState([]);

  const handleSelectChange = (event) => {
    const selectedGenre = event.target.value;
    setSelectedOption(selectedGenre);
    if (selectedGenre && !selectedOptionsList.includes(selectedGenre)) {
      setSelectedOptionsList([...selectedOptionsList, selectedGenre]);
      onGenreSelect([...selectedOptionsList, selectedGenre]); // Callback to parent component
    }
  };


  const handleRemoveOption = (option) => {
    const updatedOptionsList = selectedOptionsList.filter((item) => item !== option);
    setSelectedOptionsList(updatedOptionsList);
  };

  return (
    <div>
      <h3 style={{color: 'gray', marginTop: '5px'}}>Select Genre</h3>
      <select style={{borderRadius: '7px'}} value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option...</option>
        <option value="Crime">Crime</option>
        <option value="Thriller">Thriller</option>
        <option value="Historical">Historical</option>
        <option value="Biography">Biography</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Romance">Romance</option>
        <option value="Science fiction">Science fiction</option>
        <option value="Horror">Horror</option>
        <option value="Drama">Drama</option>
        <option value="Comedy">Comedy</option>
        <option value="Adventure">Adventure</option>
        <option value="Action">Action</option>

        {/* Add more options as needed */}
      </select>

      {selectedOptionsList.length > 0 && (
        <div>
          <h3>Selected Options:</h3>
          <ul>
            {selectedOptionsList.map((option) => (
              <li key={option}>
                {option} <button onClick={() => handleRemoveOption(option)}>✕</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Genre;
