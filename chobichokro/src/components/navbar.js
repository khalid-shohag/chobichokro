import React, {useState} from "react";
import './navbar.css'

import { FaSearch, FaUser, FaCamera, FaFilm, FaBars, FaTimes, FaVideo, FaEye, FaSignOutAlt } from "react-icons/fa";

import Hamburger from 'hamburger-react'

import DropdownMenu from "./SelectedLoginUser";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";


const Navbar = (props) => {

    const [click, setClick] = useState(false);
    const navigate = useNavigate()
    const handleClick = () => setClick(!click);

    const [selectedItem, setSelectedItem] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const menuItems = ['Admin', 'Theatre', 'Audience'];

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
            case 'home':
                navigate('/')
                break
            default:
                break;
        }
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsMenuOpen(false);
        // You can implement different actions for each item click here
    };

    async function handleSearch(value) {
        const url = `http://localhost:8080/api/movies/query/${value}`
        // alert(url)
        await axios.get(url).then(res => {
            console.log(res.data)
            if (res.data.length === 0) {
                toast("No movie found")
            } else {
                // props.setMovies(res.data)
                // props.setSearch(true)
                // alert("Movie found")
                // props.setSearchLoad(false)
                navigate('/search/' + value, {state: {data: res.data}})
            }


            return res.data

        }).catch(err => {
            console.log(err)
            return err;
        })
    }

    return (
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
                <li style={{display: 'flex'}}><FaSignOutAlt style={{marginRight: '7px', color: 'greenyellow'}}></FaSignOutAlt>
                    <h4 style={{cursor: 'pointer'}} onClick={() => {
                        localStorage.clear()
                        goToPage('home')
                    } }> LogOut </h4>
                </li>
                <li>
                    <input
                        id={'search'}
                        type="text"
                        placeholder="Search..."
                        style={{border: 'none', borderRadius: '10px',  color: 'white', boxShadow: '0 0 3px white', background: 'black', outline: 'none', width: '100%', padding: '5px'}}
                    />
                </li>
                <li>
                    <button
                        type="button"
                        style={{background: 'transparent', border: 'none', outline: 'none', cursor: 'pointer'}}
                        onClick={() => {
                            handleSearch(document.getElementById('search').value)
                                .then(r => console.log(r))
                        }}
                    >
                        <FaSearch style={{fontSize: '20px', color: 'blue'}}/>
                    </button>
                </li>
                <li>
                    <DropdownMenu/>
                </li>
            </ul>

        </div>
    );
}

export default Navbar;