import React from "react";
import {Button, Card, CardBody, CardHeader} from "reactstrap";

function MovieList(props) {

    const passMovieDetail = () => {
        props.sentMoviesData(props.id, props.name, props.poster, props.genre, props.cast, props.director, props.trailer, props.status, props.date, props.description)
    }

    const genreString = props.genre.map((genre) => genre).join(', ')


    return (
        <div>
            <Button style={{
                marginBottom: '30px',
                width: '300px',
                borderRadius: '10px',
                cursor: 'pointer',
                backgroundColor: 'transparent',
                borderColor: 'palegoldenrod'
            }}
                    onClick={() => {
                        props.handleChange();
                        passMovieDetail();
                    }}
            >
                <Card style={{color: 'palegoldenrod'}}>
                    <CardHeader>
                        <h3 style={{fontSize: '25px'}}>{props.name}</h3>
                    </CardHeader>
                    <CardBody>
                        {genreString}
                    </CardBody>
                </Card>
            </Button>

        </div>
    );
}

export default MovieList;