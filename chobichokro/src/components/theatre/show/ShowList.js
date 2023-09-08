import React, { useState } from 'react';

const ShowList = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleRemoveOption = () => {
    setSelectedOption('');
  };

  return (
    <div>
      
      <select style={{ borderRadius: '7px' }} value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option...</option>
        <option value="Jawaan">Jawaan</option>
        <option value="Sujon Majhi">Sujon Majhi</option>
        <option value="Prohelika">Prohelika</option>
        {/* Add more options as needed */}
      </select>

      {selectedOption && (
        <div>
          <h3>Movie:</h3>
          <h5 style={{color: 'white'}}>{selectedOption}</h5>
        </div>
      )}
    </div>
  );
};

export default ShowList;
