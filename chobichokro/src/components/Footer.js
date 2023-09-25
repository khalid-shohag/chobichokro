import "./Footer.css"

import React from 'react'
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa'
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"
import { CardBody } from "reactstrap"

const Footer = () => {
  return (
    <Card style={{background: 'darkcyan', height: '40%'}}>
      <CardBody style={{marginLeft: '50%', fontSize: '25', fontWeight: 'bolder'}}>
        Developed By
      </CardBody>
      <CardBody style={{marginTop: '2%', marginLeft: '49%', fontSize: '30', fontWeight: 'bolder'}}>
        RU JavaSipSquad
      </CardBody>
      <CardBody style={{marginTop: '2%', marginLeft: '45%', fontSize: '30', fontWeight: 'bolder'}}>
        Md. Khalid Hasan & Kamol Paul
      </CardBody>

    </Card>
  )
}

export default Footer