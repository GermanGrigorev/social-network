import React, {useState} from 'react';
import './ProfileInfo.css'
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import defaultUserIcon from '../../../res/userIcon.png';
import AboutMe from "./AboutMe/AboutMe";
import AboutMeChangingForm from "./AboutMeChangingForm/AboutMeChangingForm";

const ProfileInfo = (props) => {
    const [editMode, setEditMode] = useState(false);

    const onFileSubmit = (event) => {
        if (event.target.files.length) {
            props.uploadProfileImage(event.target.files[0]);
        }
    };

    return (
        <div className='ProfileInfo-Wrapper'>
            <div>
                <div>
                    <img className='ProfileInfo-Image'
                         src={props.profileImage || defaultUserIcon}/>
                </div>
                {props.isOwner && (
                    // <UploadOutlined onChange={onFileSubmit}/> //TODO разобраться с upload
                    <input className='FileInput' type='file' onChange={onFileSubmit}/>
                )}
                <ProfileStatusWithHooks
                    status={props.status}
                    changeStatus={props.changeStatus}
                />
            </div>
            <div>
                {!editMode && (
                    <AboutMe
                        fullName={props.fullName}
                        aboutMe={props.aboutMe}
                        contacts={props.contacts}
                        lookingForAJob={props.lookingForAJob}
                        lookingForAJobDescription={props.lookingForAJobDescription}
                    />
                )}
                {editMode && (
                    <AboutMeChangingForm
                        onSubmit={props.changeProfileInfo}
                    />
                )}
                {props.isOwner && (
                    <button onClick={() => setEditMode(!editMode)}>Change information about you </button>
                )}
            </div>
        </div>
    )
};

export default ProfileInfo
