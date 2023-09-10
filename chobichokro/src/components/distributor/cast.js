import React, { useState } from 'react';

const Cast = ({onCastsSelect}) => {
  const [personName, setPersonName] = useState('');
  const [selectedPersons, setSelectedPersons] = useState([]);

  const handleNameChange = (event) => {
    setPersonName(event.target.value);
    // setSelectedPersons([...selectedPersons, event.target.value]);
  };

  const handleAddPersonClick = () => {
    if (personName.trim() !== '') {
        if (!selectedPersons.includes(personName)) {
            setSelectedPersons([...selectedPersons, personName]);
            onCastsSelect([...selectedPersons, personName]);
          }
        
    }
  };

  

  const handleAddPerson = (name) => {
    setSelectedPersons([...selectedPersons, name]);
  };

  const handleRemovePerson = (nameToRemove) => {
    const updatedPersons = selectedPersons.filter((name) => name !== nameToRemove);
    setSelectedPersons(updatedPersons);
  };


  return (
    <div>
      <h3>Casts</h3>
      <input
        type="text"
        value={personName}
        onChange={handleNameChange}
        placeholder="Enter a cast"
        style={{borderRadius: '7px'}}
      />
      <button onClick={handleAddPersonClick} style={{borderRadius: '3px', marginLeft: '8px'}}>Add cast</button>
      {selectedPersons.length > 0 && (
        <div>
          <h3>Actors:</h3>
          <ul>
            {selectedPersons.map((personName) => (
              <li key={personName}>
                {personName}
                <button onClick={() => handleRemovePerson(personName)}>✕</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

  );
};

export default Cast;
