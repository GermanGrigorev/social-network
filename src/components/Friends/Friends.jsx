import React from 'react';
import './Friends.css'
import defaultUserIcon from "../../res/userIcon.png"
import {NavLink} from "react-router-dom";

let Friends = (props) => {
    let drawPages = () => {
        let pages = [];
        let length = Math.ceil(props.totalUsersCount / props.pageSize);
        for (let i = 1; i <= 10; i += 1) {
            pages.push(
                <span className={i === props.currentPage ? 'selector-page_selected' : ''}
                      key={i}
                      onClick={() => {
                          props.onPageChanged(i)
                      }}>
                {i}
                </span>)
        }
        return pages;
    }

    return (
        <div>
            {drawPages()}
            {props.friends.map((friend) => {
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
}

export default Friends
