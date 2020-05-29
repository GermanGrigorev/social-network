import React from 'react';
import './ProfileInfo.css'
import ProfileStatus from './ProfileStatus/ProfileStatus'
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import defaultUserIcon from '../../../res/userIcon.png';
import AboutMe from "./AboutMe/AboutMe";

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
            <ProfileStatusWithHooks
                status={props.status}
                changeStatus={props.changeStatus}
            />
            <AboutMe
                fullName={props.fullName}
                aboutMe={props.aboutMe}
                contacts={props.contacts}
                lookingForAJob={props.lookingForAJob}
                lookingForAJobDescription={props.lookingForAJobDescription}
            />
        </div>
    )
};

export default ProfileInfo
