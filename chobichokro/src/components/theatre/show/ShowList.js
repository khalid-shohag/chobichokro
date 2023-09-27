import React, {useEffect, useState} from 'react';
import axios from "axios";

const ShowList = ({token, onMovieName}) => {
    const [selectedOption, setSelectedOption] = useState('');
    // const token = props.token
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
        onMovieName(event.target.value)
    };

    const handleRemoveOption = () => {
        setSelectedOption('');
    };

    const [movies, setMovies] = useState([])

    const getAllTheatreMovies = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/theater/get/all_my_movie', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setMovies(response.data)
        } catch (error) {
            console.log("Not getting Movies: ", error)
        }

    }

    useEffect(() => {
        getAllTheatreMovies()
    }, [])


    return (
        <div>

            <select style={{borderRadius: '7px'}} value={selectedOption} onChange={handleSelectChange}>
                <option value="">Select a movie...</option>
                {movies.map((mv) => {
                    return (
                        <option key={mv.movie.id} value={mv.movie.movieName}>{mv.movie.movieName}</option>
                    )
                })}
                {/*<option value="Jawaan">Jawaan</option>*/}
                {/*<option value="Sujon Majhi">Sujon Majhi</option>*/}
                {/*<option value="Prohelika">Prohelika</option>*/}
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
