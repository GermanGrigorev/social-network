import {profileApi} from "../api/api";

const ADD_POST = 'social-network/profile/ADD-POST';
const DELETE_POST = 'social-network/profile/DELETE_POST';
const SET_PROFILE = 'social-network/profile/SET_PROFILE';
const TOGGLE_IS_FETCHING = 'social-network/profile/TOGGLE_IS_FETCHING';
const SET_STATUS = 'social-network/profile/SET_STATUS';

let initialState = {
    fullName: '',
    profileImage: '',
    aboutMe: '',
    posts: [],
    isFetching: false,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: state.posts.length,
                message: action.newPostText,
                likeCount: 2,
            };
            return {
                ...state,
                posts: [...state.posts, post],
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((p) => p.id !== action.postId),
            };
        case SET_PROFILE:
            return {
                ...state,
                fullName: action.fullName,
                aboutMe: action.aboutMe,
                profileImage: action.photos.large || '',
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: !state.isFetching,
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };
        default:
            return state;
    }
};

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePost = (postId) => ({type: ADD_POST, postId});
export const setProfile = (profileData) => ({type: SET_PROFILE, ...profileData,});
export const toggleIsFetching = () => ({type: TOGGLE_IS_FETCHING,});
export const setStatus = (status) => ({type: SET_STATUS, status,});

export const getUsersProfile = (userId) => {
    return async (dispatch) => {
        const data = await profileApi.getUsersProfile(userId);
        dispatch(setProfile(data));
    }
};

export const getUsersStatus = (userId) => {
    return async (dispatch) => {
        const status = await profileApi.getStatus(userId);
        dispatch(setStatus(status));
    }
};

export const changeStatus = (status) => {
    return async (dispatch) => {
        const data = await profileApi.updateStatus(status);
        if (data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    };
};

export default profileReducer;
