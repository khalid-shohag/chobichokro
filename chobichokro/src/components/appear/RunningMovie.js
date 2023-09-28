import React from "react";
import {Card, CardBody} from "reactstrap";

function RunningMovies() {

    const movie = [
        {
            "id": 0,
            "name": "Jawaan",
            "Genre": "Action Drama Thriller",
            "Director": "Atlee",
            "rating": "4",

        },
        {
            "id": 1,
            "name": "Priyotoma",
            "Genre": "Romantic Drama",
            "Director": "Himel Ashraf",
            "rating": "3",
        },
        {
            "id": 2,
            "name": "Surongo",
            "Genre": "Romantic Drama Thriller",
            "Director": "Raihan Rafi",
            "rating": "3.5",
        }
    ]

    return (
        <div>
            {movie.map(m => (

                <Card key={m.id} style={{
                    backgroundColor: 'gray',
                    height: '300px',
                    width: '300px',
                    marginRight: '10px',
                    flexDirection: 'row'
                }}>
                    <img src="" alt="Poster"/>
                    <CardBody>
                        <p>{m.Genre}</p>
                        <p>{m.Director}</p>
                        <p>{m.rating}</p>
                        <button>Tickets</button>
                        <button>Details</button>
                    </CardBody>
                </Card>


            ))}
        </div>
    );
}

export default RunningMovies;