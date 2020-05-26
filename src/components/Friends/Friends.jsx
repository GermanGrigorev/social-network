import React from 'react';
import './Friends.css'
import defaultUserIcon from "../../res/userIcon.png"
import {NavLink} from "react-router-dom";
import Paginator from "./Paginator/Paginator";

const Friends = (props) => {
    return (
        <div>
            <Paginator {...props}/>
            {props.friends.map((friend) => {
                //TODO FRIEND COMPONENT
                return (
                    <div key={friend.id}>
                        <NavLink to={`/profile/${friend.id}`}>
                            <img width='40px' src={friend.photos.small || defaultUserIcon}/>
                        </NavLink>
                        <div>
                            <button disabled={props.isFollowingInProgress} onClick={() => {
                                props.toggleFollowingFriend(friend.id, !friend.followed);
                            }}>
                                {friend.followed ? 'Unfollow' : 'Follow'}
                            </button>
                        </div>
                        <div>{friend.name}</div>
                        <div>{friend.status}</div>
                    </div>
                )
            })}
        </div>
    )
};

export default Friends
