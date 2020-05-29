import React from 'react';
import './Profile.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return (
        <div className='Profile_padding'>
            <ProfileInfo {...props} />
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;
