import React from "react";
import {Card, Col, Container, Form, Image, Row} from "react-bootstrap"
import Button from "react-bootstrap/Button";
import {FaBars, FaTimes} from 'react-icons/fa'
import { useState } from "react"
import { Link } from 'react-router-dom'
import './SystemAdmin.css'
import DropdownMenu from "../SelectedLoginUser";

import Badge from '@mui/material/Badge';
import EmailIcon from '@mui/icons-material/Email';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from 'react-avatar-edit'

import { useLocation } from "react-router-dom";
import AdminLogin from './AdminLogin'
import profileImg from '../../assets/profile.png'
import LicensePending from "./LicensePending";

const SystemAdmin = () => {

    const location = useLocation()


    // console.log("token", location.state?.token)


    if (localStorage.getItem('atoken')==null) {
        console.log("Satisfied")
          
        const accessToken = location.state?.token || '';
        console.log("Token: ", accessToken)
    
        localStorage.setItem('atoken', accessToken); 
      }
    console.log("Storage", localStorage.getItem('atoken'))
    console.log("Token: ", location.state?.token)
    const isAuthenticated = !!localStorage.getItem('atoken');

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [pendingResult, setPendingResult] = useState(false)
    const [activeResult, setActiveResult] = useState(false)

    const handlePendingClick = () => {
        setPendingResult(true)
        setActiveResult(false)
    }

    const handleActiveClick = () => {
        setPendingResult(false)
        setActiveResult(true)
    }


    const [color, setColor] = useState(false);
    const changeColor = () => {
      if(window.scrollY >= 100) {
        setColor(true);
      }
      else {
        setColor(false);
      }
    }


    window.addEventListener("scroll", changeColor);


      var newValue = 10;
      var content = `new ${newValue}`
      console.log(content)
      console.log("Auth ", isAuthenticated)

    if (!isAuthenticated) {
        return(
            <div>
                <AdminLogin />
            </div>
        );
    }
    
    else {

    return(
        // <div>


    <div>


        
     <div className={color ? "header header-bg" : "header"}>
         <div>
             <Link to='/'>

                 <h1>ছবিচক্র</h1>
             </Link>
         </div>
        <div>
            <img src={profileImg}
            alt="Profile"
            style={{height: '65px', width: '70px', borderRadius: '40px'}}
            />
            
        </div>
        <div >
            <h4>ADMIN</h4>
            
        </div>
        <div>
        
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Button style={{marginLeft: '300px', marginRight: '120px', height: '60px', background: 'magenta',
                borderColor:'rgba(0,0,0,0.2)', borderRadius:100,}}  onClick={handlePendingClick}>
                    Pending Requests
                    <Badge badgeContent={`${newValue>9 ? "9+": String(newValue)}`} color="primary" style={{ fontSize: '0.5rem', padding: '0.25rem 0.5rem' }}>
                    <EmailIcon />
                </Badge>
                </Button>  
            </li>
            <li>
                <Button style={{marginLeft: '200px', height: '60px', background: 'gray',
                borderColor:'rgba(0,0,0,0.2)', borderRadius:100,}} onClick={handleActiveClick}>
                    New Requests
                    <IconButton aria-label="notifications">
                <Badge badgeContent={`${newValue>9 ? "9+": String(newValue)}`} color="error">
                    <NotificationsIcon />
                </Badge>
                </IconButton>
                </Button>
            </li>
        </ul>
           </div>

         <DropdownMenu />
     </div>
        {console.log("Pending", pendingResult)}
        <div>
            {pendingResult && (
                <div>
                    <LicensePending token={localStorage.getItem('atoken')}/>
                </div>
            )}
        </div>

        </div>


        
    );
            }
}


export default SystemAdmin;