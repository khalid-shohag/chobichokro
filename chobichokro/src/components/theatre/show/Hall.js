import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Hall = (props) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [screen, setScreen] = useState(0)

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
        props.onHall(event.target.value)
    };

    const handleRemoveOption = () => {
        setSelectedOption('');
    };

    const getTotalScreenNumber = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/theater/my_theater', {
                headers: {
                    Authorization: `Bearer ${props.token}`
                }
            }).then(res => {
                console.log("Total Screen: ", JSON.stringify(res.data.numberOfScreens))
                setScreen(res.data.numberOfScreens)
                //alert("Total Screen: " + JSON.stringify(res.data.numberOfScreens))
            })
        } catch (error) {
            console.log("Error fetching data", error);
        }
    }


    useEffect(() => {
        getTotalScreenNumber();
    }, []);

    return (
        <div>

            <select style={{borderRadius: '7px', height: '40px', width: '200px'}} value={selectedOption}
                    onChange={handleSelectChange}>
                <option value="">Screen...</option>


                {(() => {
                    // Replace with your actual number
                    const options = [];

                    for (let i = 1; i <= screen; i++) {
                        options.push(
                            <option key={i} value={i}>
                                {i}
                            </option>
                        );
                    }

                    return options;
                })()}


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
