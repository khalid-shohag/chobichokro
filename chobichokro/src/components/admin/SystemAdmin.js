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
import LicenseApproved from "./LicenseApproved";
import Navbar from "../navbar";
import '../distributor/DistributorPage.css'
import { CardBody } from "reactstrap";
import TaxReports from "./TaxReports";
import Footer from "../Footer";

const SystemAdmin = () => {

    const location = useLocation()
    const token = location.state?.token || '';


    // console.log("token", location.state?.token)

    console.log("Token: ", location.state?.token)
   

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [pendingResult, setPendingResult] = useState(true)
    const [activeResult, setActiveResult] = useState(false)
    const [tax, setTax] = useState(false)

    const handlePendingClick = () => {
        setPendingResult(true)
        setActiveResult(false)
        setTax(false)
    }

    const handleActiveClick = () => {
        setPendingResult(false)
        setActiveResult(true)
        setTax(false)
    }

    const handleTax = () => {
        setPendingResult(false)
        setActiveResult(false)
        setTax(true)
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
      

    
  

    return(
        // <div>


    <div>


        <Navbar />   
     
        {console.log("Pending", pendingResult)}
        <div style={{marginTop: '90px', marginLeft: '390px'}}>
            <Card style={{ display: 'flex', height: '60px', borderRadius: '10px', width: '700px', fontWeight: 'bold', fontSize: '18', boxShadow: 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'}}>
                <CardBody style={{padding: '10px', marginLeft: '50px', cursor: 'pointer'}} onClick={handlePendingClick}>
                    Pending Requests 
                </CardBody>
                <CardBody style={{padding: '10px', marginLeft: '50px', cursor: 'pointer'}} onClick={handleActiveClick}>
                    Approved Requests 
                </CardBody>
                <CardBody style={{padding: '10px', marginLeft: '50px', cursor: 'pointer'}} onClick={handleTax}>
                    Tax Reports 
                </CardBody>
            </Card>
        </div>

        {pendingResult && <LicensePending />}
        {activeResult && <LicenseApproved />}
        {tax && <TaxReports token = {token} />}
     
        </div>
        
    );
            
}


export default SystemAdmin;