import React from "react";
import Navbar from "./navbar";
import { Card, CardBody } from "reactstrap";

export function About() {
    return(
        <div>
            <Navbar/>
            <div style={{marginTop: '10%'}}> 

           
            <h1 style={{marginLeft: '40%'}}>About Project</h1>
            <Card style={{background: 'lavender', boxShadow: '0 0 10px black', marginTop: '2%', marginLeft: '3%', marginRight: '3%', padding: '3%',
                borderRadius: '1%'}}>
            
                <CardBody>
                    
                    <h3 style={{textAlign: 'justify'}}>The Chobichokro Web App is a comprehensive platform that aims to streamline the movie distribution
                        and theatre management process within the Bangladeshi film industry. This web app will facilitate interactions among distributors, theater owners, and audiences, providing an efficient and user-friendly way to
                        manage movie releases, ticket bookings, financial transactions, and performance analysis.
                    </h3> 
                </CardBody>
            </Card>
            <Card style={{background: 'black', boxShadow: '0 0 20px seagreen', marginTop: '2%', marginLeft: '33%', marginRight: '3%', padding: '3%',
                borderRadius: '2%', width: '30%'}}>
            
                <CardBody>
                    
                   <h1 style={{marginLeft: '20%', color: 'seagreen'}}>Developed By</h1>
                   <h3 style={{marginLeft: '28%', color: 'palegoldenrod', marginTop: '1%'}}>RU JavaSipSquad</h3>
                </CardBody>
                <div style={{marginTop: '2%'}}>
                    <button style={{border: 'none',}}>
                    <CardBody style={{background: 'gold ', color: 'black', width: 'auto', borderRadius: '1%'}}>
                        < a href="https://github.com/khalid-shohag" target="blank" style={{color: 'black'}} >Md. Khalid Hasan</a>
                    </CardBody>
                    </button>
                    <button style={{marginLeft: '21%', border: 'none'}}>
                    <CardBody style={{background: 'gold ', width: 'auto'}}>
                        <a href="https://github.com/Kamol-Paul" target="blank" style={{color: 'black'}}>Kamol Kumar Paul</a>
                    </CardBody>
                    </button>
                    
                </div>
            </Card>
            </div>
        </div>
    )
}
