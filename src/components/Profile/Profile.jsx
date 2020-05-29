import React from 'react';
import './Profile.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return (
        <div className='Profile_padding'>
            <ProfileInfo
                fullName={props.fullName}
                profileImage={props.profileImage}
                aboutMe={props.aboutMe}
                status={props.status}
                isOwner={props.isOwner}
                changeStatus={props.changeStatus}
                uploadProfileImage={props.uploadProfileImage}
            />
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;
