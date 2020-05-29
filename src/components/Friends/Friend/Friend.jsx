import React from 'react';
import {NavLink} from "react-router-dom";
import defaultUserIcon from '../../../res/userIcon.png';
import './Friend.css'

const Friend = (props) => {
    return (
        <>
            <div className='Friend_inline Friend_padding'>
                <NavLink className='image' to={`/profile/${props.id}`}>
                    <img width='40px' src={props.photos.small || defaultUserIcon}/>
                </NavLink>
            </div>
            <div className='Friend_inline Friend_padding'>
                <div>{props.name}</div>
                <div>{props.status}</div>
            </div>
            <div>
                <button disabled={props.isFollowingInProgress} onClick={() => {
                    props.toggleFollowingFriend(props.id, !props.followed);
                }}>
                    {props.followed ? 'Unfollow' : 'Follow'}
                </button>
            </div>
        </>
    )
}

export default Friend;
