import React from "react";
import {Card, Col, Container, Form, Image, Row} from "react-bootstrap"
import Button from "react-bootstrap/Button";
import {FaBars, FaTimes} from 'react-icons/fa'
import { useState } from "react"
import { Link } from 'react-router-dom'
import './SystemAdmin.css'

import Badge from '@mui/material/Badge';
import EmailIcon from '@mui/icons-material/Email';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from 'react-avatar-edit'





const SystemAdmin = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

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

      
    return(
        // <div>



        
     <div className={color ? "header header-bg" : "header"}>
        <div>
            <img className="avatar"
            alt="Profile"
            />
        </div>
        <div style={{alignContent: 'center'}}>
            <h4>Name</h4>
            
        </div>
        <div>
        
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Button style={{marginLeft: '300px', marginRight: '120px', height: '60px', background: 'magenta',
                borderColor:'rgba(0,0,0,0.2)', borderRadius:100,}}  onClick={() => {
                alert('clicked')
                }}>
                    Pending Requests
                    <Badge badgeContent={`${newValue>9 ? "9+": String(newValue)}`} color="primary" style={{ fontSize: '0.5rem', padding: '0.25rem 0.5rem' }}>
                    <EmailIcon />
                </Badge>
                </Button>  
            </li>
            <li>
                <Button style={{marginLeft: '200px', height: '60px', background: 'gray',
                borderColor:'rgba(0,0,0,0.2)', borderRadius:100,}} onClick={() => {
                alert('clicked')
                }}>
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

        </div>
        
        
    );
}


export default SystemAdmin;