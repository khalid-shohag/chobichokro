import React from "react";
import Navbar from "../navbar";
import Login from "../Login";

const TheatreLogin = (props) => {
    return(
        <div>
            <Navbar />
            <Login value={props.value}/>
        </div>
    );
}

export default TheatreLogin;