import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from "../Assets/logo3.svg";
import "../Styles/Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = () => {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

  return (
    <div className='navbar'>
        <div className='leftside'>
            <img className='logo' src={Logo}/>
            <button className='hamburger' onClick={toggleNavbar}>
                <MenuIcon fontSize='large'/>
            </button>
        </div>
        <div className='rightside' id={openLinks ? "open" : "closed"}>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/properties">Properties</Link>
            <Link className='link' to="/about">About Us</Link>
            <Link className='link' to="/contact">Contact Us</Link>
        </div>
        
    </div>
  )
}
