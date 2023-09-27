import React from "react";
import {CardBody} from "reactstrap";
import {Card} from "react-bootstrap";
import {FaStar} from "react-icons/fa";

function ReviewList() {

    const movieList = [
        {
            "id": 0,
            "name": 'Jawaan',
            "review": "A mass spectacle and much more than that I went in to see a mass movie featuring SRK in an unprecedented, larger-than-life role. Little did I know that I would be in for much more. Atlee has not only met but surpassed all expectations, while RCE VFX studio has set a new benchmark in Indian cinema. Despite its 160-minute runtime, the movie breezed by like a gentle gust of wind.This movie will took you to old Bollywood where it fearlessly held up a mirror to the establishment and urged the audience to demand more from those in positions of power. SRK during the 3rd act almost breaks the fourth wall and speaks to his fans, through his art. Some might think this is not what they signed up for, and it's too political however Jawan is urging you to demand excellence from your elected representatives, regardless of their affiliations. As fas as, action is concerned, not counting the last Vijay-SRK combat scene which was typical Atlee no-attempt-to-hide-cable action scene, this movie boasts action set pieces that could rival Hollywood. One car chase scene gave me vibes of Fast and Furious, while another one of Taken with its fast cuts. Additionally, a border skirmish mission scene is expertly edited with lengthy shots.Overall, this movie needs to be watched in Big Screen.",
            "date": "11 September, 2023",
            "Theatre": "Matihar",
            "Hall": "2",
            "poster": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FJawan_%2528film%2529&psig=AOvVaw3yVzg00H-6QctLW1VhM5ni&ust=1694675495527000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMj-uKiEp4EDFQAAAAAdAAAAABAE",
            "rating": "4"
        },

        {
            "id": 1,
            "name": "Titanic",
            "review": "James Cameron's Titanic is a masterpiece and a tour de force of filmmaking Titanic is world famous. The film that broke every box office record on release and wore the box office champion crown for many years(until it was overtaken by Jim Cameron's Avatar) is special because not only does it showcase the Titanic disaster in all its glory the film is a technical achievement of the highest order. The sinking sequence is astonishing and it feels like you are watching the actual ship sink. The characters and actors are amazing and even with a large running length you never dare look at the watch. James Cameron is a master director and Titanic is his stamp of authority.",
            "date": "16 August, 2018",
            "poster": "E:\\series\\titanic-movie-poster-1997-EJWP0H.jpg",
            "rating": "4.2",
        }
    ]

    return (


        <div>

            {movieList.map(movie => (
                <Card style={{
                    backgroundColor: '#E9DCC9',
                    boxShadow: '0 0 10px white',
                    marginTop: '10px',
                    marginBottom: '10px',
                    borderRadius: '5px'
                }}>
                    <CardBody>
                        <div key={movie.id}>
                            <h2>{movie.name}</h2>
                            <img src={movie.poster} alt={movie.name}/>
                            <p style={{color: 'darkred', fontWeight: 'bold'}}>Review</p>
                            <p style={{border: '3px solid black', fontWeight: 'bold'}}>{movie.review}</p>
                            <p style={{color: 'black'}}>Date: {movie.date}</p>
                            <p style={{color: 'black'}}>Theatre: {movie.Theatre}</p>
                            <p style={{color: 'black'}}>Hall: {movie.Hall}</p>
                            {movie.rating}<FaStar style={{color: 'red'}}></FaStar>
                        </div>
                    </CardBody>
                </Card>
            ))}


        </div>
    );
}

export default ReviewList;