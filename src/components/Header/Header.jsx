import React from 'react'
import './Header.css'
import {NavLink} from 'react-router-dom';
import logo from '../../res/logo.png'

const Header = (props) => {
    return (
        <header className='Header'>
            <img className='SiteLogo' src={logo}/>
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
