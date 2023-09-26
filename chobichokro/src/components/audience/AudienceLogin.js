import React from "react";
import Navbar from "../navbar";
import Login from "../Login";
import { useLocation } from "react-router-dom";

const AudienceLogin = (props) => {

    const location = useLocation();
    const customState = location.state
    const pathname = customState?.locationPathname || '';
    const movieDetails = customState?.movieDetails || '';

    console.log('\n\n\nPATHNAME', pathname);
    console.log("\n\n\nMovie Details", movieDetails)

    return(
        <div>
            <Navbar />

            {pathname==='' ? (
                <Login value={props.value} redirectStatus={'no'}/>
            ): (
                <Login value={props.value} redirectStatus={'yes'} pathname={pathname} category={movieDetails.category}
                id={movieDetails.id} allTheatre={movieDetails.allTheatre}/>
            )
            }
            
        </div>
    );
}

export default AudienceLogin;