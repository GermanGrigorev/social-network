import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='navbar'>
            <nav >
                <div><NavLink className='NavBar-NavLink' to='/profile'>Profile</NavLink></div>
                <div><NavLink className='NavBar-NavLink' to='/dialogs'>Messages</NavLink></div>
                <div><NavLink className='NavBar-NavLink' to='/news'>News</NavLink></div>
                <div><NavLink className='NavBar-NavLink' to='/music'>Music</NavLink></div>
                <div><NavLink className='NavBar-NavLink' to='/friends'>Friends</NavLink></div>
                <div><NavLink className='NavBar-NavLink' to='/settings'>Settings</NavLink></div>
            </nav>
        </div>
    );
};

export default NavBar;
