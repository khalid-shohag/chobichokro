import "./Footer.css"

import React from 'react'
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={ {color: "#fff", 
            marginRight: "2rem"} } />
            <div>
                <p>University of Rajshahi</p>
                <p>Rajshahi 6205, Bangladesh</p>
            </div>
          </div>
          <div className="phone">
            <h4><FaMailBulk size={20} style={ {color: "#fff", 
            marginRight: "2rem"} } />
            shohag9438@gmail.com</h4>
          
          </div>
        </div>
        <div className="right">
          <div className="social">
          <Link to="https://web.facebook.com/mdkhalidhasanshohag.1257">
          <FaFacebook size={30} style={ {color: "#fff", 
            marginRight: "2rem"}  } />
          </Link>
          
          <FaTwitter size={30} style={ {color: "#fff", 
            marginRight: "2rem"} } />
          <FaLinkedin size={30} style={ {color: "#fff", 
            marginRight: "2rem"} } />
          <Link to="https://github.com/Khalid511">
          <FaGithub size={30} style={ {color: "#fff", 
            marginRight: "2rem"} } />
          </Link>
          
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Footer