import React from 'react';
import './ProfileInfo.css'
import ProfileStatus from './ProfileStatus/ProfileStatus'
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import defaultUserIcon from '../../../res/userIcon.png';

const ProfileInfo = (props) => {
    const onFileSubmit = (event) => {
        if (event.target.files.length) {
            props.uploadProfileImage(event.target.files[0]);
        }
    };

    return (
        <div>
            <div>
                <img className='profile__image'
                     src={props.profileImage || defaultUserIcon}/>
            </div>
            {props.isOwner && (
                <input type='file' onChange={onFileSubmit}/>
            )}
            <div>
                <div>{props.fullName}</div>
                <div>{props.aboutMe}</div>
                <ProfileStatusWithHooks
                    status={props.status}
                    changeStatus={props.changeStatus}
                />
            </div>
        </div>
    )
};

export default ProfileInfo
