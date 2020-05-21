import React from 'react';
import './Profile.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return (
        <div className='profile'>
            <ProfileInfo
                fullName={props.fullName}
                profileImage={props.profileImage}
                aboutMe={props.aboutMe}
                status={props.status}
                changeStatus={props.changeStatus}
            />
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;
