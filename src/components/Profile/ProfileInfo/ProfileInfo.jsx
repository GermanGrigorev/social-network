import React from 'react';
import './ProfileInfo.css'
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className='profile__image'
                     src={props.profileImage}/>
            </div>
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
