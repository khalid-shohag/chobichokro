import React from "react";
import Navbar from "../navbar";
import Login from "../Login";

const AdminLogin = () => {
    return(
        <div>
            <Navbar />
            <Login value={'Admin Login'}/>
        </div>
    );
}

export default AdminLogin;