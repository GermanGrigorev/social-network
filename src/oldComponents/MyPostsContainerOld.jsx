import StoreContext from './storeContext';
import {addPost, updatePost} from '../Redux/profileReducer';
import MyPosts from '../components/Profile/MyPosts/MyPosts';
import React from 'react';

const MyPostsContainerOld = (props) => {
    // let state = props.store.getState().profilePage;
    //
    // let addPost = () => {
    //     props.store.dispatch(addPost());
    // }
    //
    // let updateNewPostText = (text) => {
    //     props.store.dispatch(updatePost(text));
    // }

    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState().profilePage;

                    let addPost = () => {
                        store.dispatch(addPost());
                    }

                    let updateNewPostText = (text) => {
                        store.dispatch(updatePost(text));
                    }

                    return <MyPosts posts={state.posts}
                                    newPostText={state.newPostText}
                                    addPost={addPost}
                                    updateNewPostText={updateNewPostText}
                    />
                }
            }
        </StoreContext.Consumer>
    );
};
