import React, { useState } from 'react';

const TicketBooking = (props) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    props.onSelectedOptions(event.target.value);
  };

//   const handleRemoveOption = () => {
//     setSelectedOption('');
//   };

  return (
    // <div>
      
      <select style={{borderRadius: '7px', height: '40px', width: '200px', marginTop: '15px', marginBottom: '15px', marginLeft: '15px', marginRight: '70px'}} value={selectedOption} onChange={handleSelectChange}>
        <option value="">{props.name}...</option>
        <option value={`${props.val1}`}>{props.val1}</option>
        <option value={`${props.val2}`}>{props.val2}</option>
        <option value={`${props.val3}`}>{props.val3}</option>
       
        
        {/* Add more options as needed */}
      </select>
  );

      {/* {selectedOption && (
        <div>
          <h3>{props.name}:</h3>
          <h5 style={{color: 'white'}}>{selectedOption}</h5>
        </div>
      )} */}
    
    {/* </div> */}
//   );
};

export default TicketBooking;
