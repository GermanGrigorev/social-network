import React from 'react';
import './Friends.css'
import defaultUserIcon from "../../res/userIcon.png"
import {NavLink} from "react-router-dom";
import Paginator from "./Paginator/Paginator";
import {Pagination} from "antd";
import 'antd/dist/antd.css';

const Friends = (props) => {
    return (
        <div>
            {/*<Paginator {...props}/>*/}
            <Pagination
                onChange={props.onPageChanged}
                current={props.currentPage}
                defaultPageSize={props.pageSize}
                total={props.totalUsersCount}
                showSizeChanger={false} //TODO исправить чтоб работало
                showQuickJumper
            />
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
