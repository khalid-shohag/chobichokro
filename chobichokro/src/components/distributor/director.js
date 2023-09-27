import React, {useEffect, useState} from 'react';

const Director = ({onDirectorSelect}) => {
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
                // onDirectorSelect([...selectedPersons, personName]);
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

    useEffect(() => {
        console.log('ALL casts:', selectedPersons);
        // You can also call onCastsSelect if needed with the updated selectedPersons
        onDirectorSelect(selectedPersons);
    }, [selectedPersons]);


    return (
        <div>
            <h3 style={{color: 'gray', marginTop: '5px'}}>Directors</h3>
            <input
                type="text"
                value={personName}
                onChange={handleNameChange}
                placeholder="Enter director"
                style={{borderRadius: '7px'}}
            />
            <button onClick={handleAddPersonClick} style={{borderRadius: '3px', marginLeft: '8px'}}>Add director
            </button>
            {selectedPersons.length > 0 && (
                <div>
                    <h3>Director:</h3>
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

export default Director;
