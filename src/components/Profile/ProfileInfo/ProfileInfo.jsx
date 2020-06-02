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

    const onAboutMeFormSubmit = (formData) => {
        props.changeProfileInfo(formData);
        setEditMode(false);
    }

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
                <div>Status:</div>
                {props.isOwner && (
                    <ProfileStatusWithHooks
                        status={props.status}
                        changeStatus={props.changeStatus}
                    />
                )}
                {!props.isOwner && (
                    <div>props.status</div>
                )}
            </div>
            <div>
                {!editMode && (
                    <div>
                        <AboutMe
                            fullName={props.fullName}
                            aboutMe={props.aboutMe}
                            contacts={props.contacts}
                            lookingForAJob={props.lookingForAJob}
                            lookingForAJobDescription={props.lookingForAJobDescription}
                        />
                        {props.isOwner && (
                            <button onClick={() => setEditMode(true)}>Change information about you </button>
                        )}
                    </div>
                )}
                {editMode && (
                    <AboutMeChangingForm
                        onSubmit={onAboutMeFormSubmit}
                    />
                )}
            </div>
        </div>
    )
};

export default ProfileInfo
