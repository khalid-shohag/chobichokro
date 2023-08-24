import React from "react";
import Navbar from "../navbar";
import Login from "../Login";

const DistributorLogin = (props) => {
    return(
        <div>
            <Navbar />
            <Login value={props.value}/>
        </div>
    );
}

export default DistributorLogin;