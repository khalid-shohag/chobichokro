import React from "react";
import Navbar from "../navbar";
import Login from "../Login";

const TheatreLogin = () => {
    return(
        <div>
            <Navbar />
            <Login value={'Theatre Login'}/>
        </div>
    );
}

export default TheatreLogin;