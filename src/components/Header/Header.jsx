import React from 'react'
import './Header.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className='header'>
            <img src='http://www.pngmart.com/files/3/Sunshine-PNG-Transparent.png'/>
            <div className='LoginBlock'>
                {props.isAuth && ( //TODO сделать красиво
                    <div>
                        {props.login}
                        <br />
                        <button onClick={props.logout}>Logout</button>
                    </div>
                )}
                {!props.isAuth && <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;
