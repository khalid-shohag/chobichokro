import React, { useState, useEffect } from 'react';


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
            // onCastsSelect([...selectedPersons, personName]);
            // setPersonName('')
            // console.log('ALL casts: ', selectedPersons)
          }
        
    }
  };

  

  const handleAddPerson = (name) => {
    setSelectedPersons([...selectedPersons, name]);
  };

  const handleRemovePerson = (nameToRemove) => {
    const updatedPersons = selectedPersons.filter((name) => name !== nameToRemove);
    setSelectedPersons(updatedPersons);
    // onCastsSelect(updatedPersons)
    //   console.log('ALL casts: ', selectedPersons)
  };

    useEffect(() => {
        console.log('ALL casts:', selectedPersons);
        // You can also call onCastsSelect if needed with the updated selectedPersons
        onCastsSelect(selectedPersons);
    }, [selectedPersons]);




    return (
    <div>
      <h3 style={{color: 'gray', marginTop: '5px'}}>Casts</h3>
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
                <button style={{background: 'transparent', marginLeft: '7px', color: 'white', border: 'none'}} onClick={() => handleRemovePerson(personName)}>✕</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

  );
};

export default Cast;
