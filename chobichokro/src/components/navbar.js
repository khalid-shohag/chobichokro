import React from "react";
import './navbar.css'
import { FaSearch, FaUser, FaCamera, FaFilm, FaBars, FaTimes, FaVideo, FaEye } from "react-icons/fa";
import { useState } from "react";
import Hamburger from 'hamburger-react'
import DropdownMenu from "./SelectedLoginUser";
import { Link, useNavigate } from "react-router-dom";
import {configureStore} from "@reduxjs/toolkit";
import axios from "axios";


const Navbar = (props)=> {

    const [click, setClick] = useState(false);
    const navigate= useNavigate()
    const handleClick = () => setClick(!click);

    const [selectedItem, setSelectedItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Admin', 'Theatre', 'Audience'];
  const setMovies = props.setMovies;

    const goToPage = (item) => {
        setIsMenuOpen(false);

        // Navigate to corresponding routes
        switch (item) {
            case 'Admin':
                navigate('/admin_login');
                break;
            case 'Theatre':
                navigate('/theatre_login');
                break;
            case 'Audience':
                navigate('/audience_login');
                break;
            case 'Distributor':
                navigate('/distributor_login');
                break;
            default:
                break;
        }
    };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsMenuOpen(false);
    // You can implement different actions for each item click here
  };

    async function searchHandler(value){
        console.log(value);
        // alert(value)
        const url = "http://localhost:8080/api/movies/query/" + value;
        // alert(url)
        await axios.get(url).then((response) => {
            console.log(response.data);
            setMovies(response.data);
        });

    }

    return(
        <div className="header navbar" style={{backgroundColor: 'black'}}>
            <Link to='/'>
            
                <h1>ছবিচক্র</h1>
            </Link>

            
            <ul className="nav-menu">
               <li style={{display: 'flex'}}>
                <FaUser style={{marginRight: '7px', color: 'greenyellow'}}></FaUser>
                   <h4 style={{cursor: 'pointer'}} onClick={() => goToPage('Admin')}>Admin</h4>
                </li>

                <li style={{display: 'flex'}}><FaFilm style={{marginRight: '7px', color: 'greenyellow'}}></FaFilm>
                    <h4 style={{cursor: 'pointer'}} onClick={() => goToPage('Theatre')}>Theatre</h4>
                </li>
                <li style={{display: 'flex'}}><FaVideo style={{marginRight: '7px', color: 'greenyellow'}}></FaVideo>
                    <h4 style={{cursor: 'pointer'}} onClick={() => goToPage('Distributor')}>Distributor</h4>
                </li>
                <li style={{display: 'flex'}}><FaEye style={{marginRight: '7px', color: 'greenyellow'}}></FaEye>
                    <h4 style={{cursor: 'pointer'}} onClick={() => goToPage('Audience')}>Audience</h4>
                </li>
                <li>
                <input
                    id="search"
                    type="text"
                    placeholder="Search..."
                    style={{ border: 'none', outline: 'none', width: '100%', padding: '5px' }}
                />
                </li>
                <li>
                    <button
                        type="button"
                        style={{ background: 'transparent', border: 'none', outline: 'none', cursor: 'pointer' }}
                        onClick={() => {searchHandler(document.getElementById('search').value);}}
                    >
                        <FaSearch style={{ fontSize: '20px', color: 'blue' }} />
                    </button>
                </li>
                <li>
                    <DropdownMenu />
                </li>
            </ul>
            
        </div>
    );
}

export default Navbar;