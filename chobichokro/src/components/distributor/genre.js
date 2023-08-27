import React, { useState } from 'react';

const Genre = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptionsList, setSelectedOptionsList] = useState([]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value && !selectedOptionsList.includes(event.target.value)) {
      setSelectedOptionsList([...selectedOptionsList, event.target.value]);
    }
  };

  const handleRemoveOption = (option) => {
    const updatedOptionsList = selectedOptionsList.filter((item) => item !== option);
    setSelectedOptionsList(updatedOptionsList);
  };

  return (
    <div>
      <h3>Select Genre</h3>
      <select style={{borderRadius: '7px'}} value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option...</option>
        <option value="Crime">Crime</option>
        <option value="Historical">Historical</option>
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
