import React, {useState} from 'react';

const TicketBooking = (props) => {
    const [selectedOption, setSelectedOption] = useState('');

    const movies = props.val
    const status = props.stat
    const allTheatre = props.val
    console.log("Movies Ticket: ", movies)
    console.log('\n\n\nSTatus\n\n\n', allTheatre)

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
        props.onSelectedOptions(event.target.value);
    };

//   const handleRemoveOption = () => {
//     setSelectedOption('');
//   };

    if (status === 'no') {
        return (
            <select style={{
                borderRadius: '7px',
                height: '40px',
                width: '200px',
                marginTop: '15px',
                marginBottom: '15px',
                marginLeft: '15px',
                marginRight: '70px'
            }} value={selectedOption} onChange={handleSelectChange}>
                <option value="">{props.name}...</option>
                {movies.map((mv) => {

                    console.log("\n\n\nMVVVVV\n\n", mv)

                    return (
                        <option key={mv} value={mv}> {mv} </option>
                    )
                })}
            </select>
        )
    } else {
        return (
            <select
                style={{
                    borderRadius: '7px',
                    height: '40px',
                    width: '200px',
                    marginTop: '15px',
                    marginBottom: '15px',
                    marginLeft: '15px',
                    marginRight: '70px'
                }}
                value={selectedOption}
                onChange={handleSelectChange}
            >
                <option value="">{props.name}...</option>

                {props.name === 'Theatre' ? (
                    movies.map((mv) => (
                        <option key={mv.id} value={mv.id}>
                            {mv.name}
                        </option>
                    ))
                ) : (
                    movies.map((mv) => (
                        <option key={mv.movie.id} value={mv.movie.movieName}>
                            {mv.movie.movieName}
                        </option>
                    ))
                )}
            </select>
        );

    }

    // return (
    //   // <div>

    //     <select style={{borderRadius: '7px', height: '40px', width: '200px', marginTop: '15px', marginBottom: '15px', marginLeft: '15px', marginRight: '70px'}} value={selectedOption} onChange={handleSelectChange}>
    //       <option value="">{props.name}...</option>
    //      { status === 'no' ? (
    //       <div>
    //         {movies.map((mv) => {

    //         return(
    //             <option key={mv} value={mv}>{mv}</option>
    //         )
    //     })}
    //       </div>
    //      ): (<select>
    //         {movies.map((mv) => {

    //         return(
    //             <option key={mv.movie.id} value={mv.movie.movieName}>{mv.movie.movieName}</option>
    //     )
    // })}
    //  </select>)}

    //    </select>
    // <option value={`${props.val1}`}>{props.val1}</option>
    // <option value={`${props.val2}`}>{props.val2}</option>
    // <option value={`${props.val3}`}>{props.val3}</option>


    // );

    {/* {selectedOption && (
        <div>
          <h3>{props.name}:</h3>
          <h5 style={{color: 'white'}}>{selectedOption}</h5>
        </div>
      )} */
    }

    {/* </div> */
    }
//   );
};

export default TicketBooking;