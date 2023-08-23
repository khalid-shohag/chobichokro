import React from "react";
import './navbar.css'
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Hamburger from 'hamburger-react'
import DropdownMenu from "./SelectedLoginUser";

const Navbar = ()=> {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [selectedItem, setSelectedItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Admin', 'Theatre', 'Audience'];

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsMenuOpen(false);
    // You can implement different actions for each item click here
  };

    return(
        <div className="header">
            <h1>ছবিচক্র</h1>
            

            
            <ul className="nav-menu">
               <li>
                <h4>Running</h4>
                </li> 
                <li><h4>Upcoming</h4></li>
                <li>
                <input
                    type="text"
                    placeholder="Search..."
                    style={{ border: 'none', outline: 'none', width: '100%', padding: '5px' }}
                />
                </li>
                <li>
                    <button
                        type="button"
                        style={{ background: 'transparent', border: 'none', outline: 'none', cursor: 'pointer' }}
                        onClick={() => {alert('Searched')}}
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