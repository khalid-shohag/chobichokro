import React, { useState } from 'react';

const Hall = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleRemoveOption = () => {
    setSelectedOption('');
  };

  return (
    <div>
      
      <select style={{borderRadius: '7px', height: '40px', width: '200px'}} value={selectedOption} onChange={handleSelectChange}>
        <option value="">Screen...</option>
        <option value="Hall 1">Hall 1</option>
        <option value="Hall 2">Hall 2</option>
        <option value="Hall 3">Hall 3</option>
       
        
        {/* Add more options as needed */}
      </select>

      {selectedOption && (
        <div>
          <h3>Screen:</h3>
          <h5 style={{color: 'white'}}>{selectedOption}</h5>
        </div>
      )}
    
    </div>
  );
};

export default Hall;
