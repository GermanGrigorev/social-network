import {profileApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_STATUS = 'SET_STATUS';

let initialState = { //TODO clear
    fullName: '',
    profileImage: '',
    aboutMe: '',
    posts: [],
    isFetching: false,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: state.posts.length,
                message: action.newPostText,
                likeCount: 2,
            }
            return {
                ...state,
                posts: [...state.posts, post],
            }
        case SET_PROFILE:
            return {
                ...state,
                fullName: action.fullName,
                aboutMe: action.aboutMe,
                profileImage: action.photos.large || '',
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: !state.isFetching,
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        default: return state;
    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText})
export const setProfile = (profileData) => ({type: SET_PROFILE, ...profileData,})
export const toggleIsFetching = () => ({type: TOGGLE_IS_FETCHING,})
export const setStatus = (status) => ({type: SET_STATUS, status,});

export const getUsersProfile = (userId) => {
    return (dispatch) => {
        profileApi.getUsersProfile(userId).then((data) => {
            dispatch(setProfile(data));
        })
    }
}

export const getUsersStatus = (userId) => {
    return (dispatch) => {
        profileApi.getStatus(userId).then((status) => {
            dispatch(setStatus(status));
        })
    }
}

export const changeStatus = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status).then((data) => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
    }

}

export default profileReducer;
