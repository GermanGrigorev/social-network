import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='navbar'>
            <nav >
                <div><NavLink className='link' to='/profile'>Profile</NavLink></div>
                <div><NavLink className='link' to='/dialogs'>Messages</NavLink></div>
                <div><NavLink className='link' to='/news'>News</NavLink></div>
                <div><NavLink className='link' to='/music'>Music</NavLink></div>
                <div><NavLink className='link' to='/friends'>Friends</NavLink></div>
                <div><NavLink className='link' to='/settings'>Settings</NavLink></div>
            </nav>
        </div>
    );
};

export default NavBar;
