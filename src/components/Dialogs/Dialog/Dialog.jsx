import React from 'react';
import './Dialog.css'
import {NavLink} from 'react-router-dom';

const Dialog = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div >
            <NavLink to={path} className='Dialog-NavLink'>
                {props.name}
            </NavLink>
        </div>
    )
}

export default Dialog
