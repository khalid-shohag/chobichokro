import React from 'react'
import Navbar from "../navbar";
import {Card, CardBody} from 'reactstrap'
import { useLocation } from 'react-router-dom';
function MovieReview(props) {

    const location = useLocation()
    const reviews = location.state?.reviews || ''
    const name = location.state?.movieName || ''
    // alert("Name: ", name)
    alert("Reviews: ", location.state?.reviews)
    
    return(
      <div>
          <Navbar />
          <div style={{marginTop: '80px'}}>
              <h1 style={{marginLeft: '40%'}}>All Reviews- {name} </h1>
              {reviews.map((rv) => {
                  return(
                    <Card key={rv.id} style={{marginLeft: '2%', marginRight: '3%', padding: '10px', fontStyle: 'italic', fontSize: '18px', marginBottom: '30px', borderRadius: '5px', height: 'auto',  backgroundColor: 'lavender'}}>
                        <CardBody style={{background: rv.sentimentScore > 0.5 ? 'olivedrab' :
                                          rv.sentimentScore > 0 ? 'olive' :
                                          rv.sentimentScore > -0.5 ? 'cyan' :
                                         'darkcyan'
                            }}>
                            {rv.opinion}
                            <h3>Sentimenet Score: {rv.sentimentScore}</h3>
                        </CardBody>
                    </Card>
                  );
              })}
          </div>
      </div>
    );
}

export default MovieReview