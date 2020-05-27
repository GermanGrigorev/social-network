import React from 'react';
import './Friends.css'
import defaultUserIcon from "../../res/userIcon.png"
import {NavLink} from "react-router-dom";
import Paginator from "./Paginator/Paginator";
import {Pagination} from "antd";
import 'antd/dist/antd.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {
    return (
        <div>
            {/*<Paginator {...props}/>*/}
            <div className='Friends_padding'>
                <Pagination
                    className='Friends_padding'
                    onChange={props.onPageChanged}
                    current={props.currentPage}
                    defaultPageSize={props.pageSize}
                    total={props.totalUsersCount}
                    showSizeChanger={false} //TODO исправить чтоб работало
                    showQuickJumper
                />
            </div>
            <div className='Friends_padding'>
                {props.friends.map((friend) => {
                    return (
                        <Friend className='Friends_padding' {...friend}
                                toggleFollowingFriend={props.toggleFollowingFriend}/>
                    )
                })}
            </div>
        </div>
    )
};

export default Friends
