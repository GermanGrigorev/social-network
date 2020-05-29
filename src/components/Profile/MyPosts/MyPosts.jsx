import React from 'react';
import Post from './Post/Post';
import './MyPosts.css'
import AddPostForm from "./AddPostForm/AddPostForm";


const MyPosts = (props) => {
    let postElements = props.posts.map((post) => {
        return <Post
            message={post.message}
            likeCount={post.likeCount}
            key={post.id}
        />
    });

    let addPost = (formData) => {
        props.addPost(formData.newPostText);
    };

    return (
        <div>
            <div className='my-posts__new-post'>
                <AddPostForm onSubmit={addPost}/>
            </div>
            <div className='my-posts__post-list'>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;
