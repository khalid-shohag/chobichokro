import React from "react";
import Navbar from "../navbar";
import Login from "../Login";

const DistributorLogin = () => {
    return(
        <div>
            <div><Navbar /></div>
            <Login value={'Distributor Login'} />
        </div>
    );
}

export default DistributorLogin;