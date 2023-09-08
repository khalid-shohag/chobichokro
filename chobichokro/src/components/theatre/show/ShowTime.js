import React, { useState } from 'react';

const ShowTime = () => {
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
      
      <select style={{borderRadius: '7px', height: '40px', width: '200px'}} value={selectedOption} onChange={handleSelectChange}>
        <option value="">Time...</option>
        <option value="8:30 am">8:30 am</option>
        <option value="12:30 pm">12:30 pm</option>
        <option value="3:30 pm">3:30 pm</option>
        <option value="6:30 pm">6:30 pm</option>
        <option value="9:30 pm">9:30 pm</option>
        
        {/* Add more options as needed */}
      </select>

      {selectedOptionsList.length > 0 && (
        <div>
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

export default ShowTime;
