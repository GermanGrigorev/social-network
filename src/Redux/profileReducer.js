import {profileApi} from "../api/api";

const ADD_POST = 'social-network/profile/ADD-POST';
const DELETE_POST = 'social-network/profile/DELETE_POST';
const SET_PROFILE_INFO = 'social-network/profile/SET_PROFILE_INFO';
const TOGGLE_IS_FETCHING = 'social-network/profile/TOGGLE_IS_FETCHING';
const SET_STATUS = 'social-network/profile/SET_STATUS';
const SET_PROFILE_IMAGE = 'social-network/profile/SET_PROFILE_IMAGE';

let initialState = {
    fullName: '',
    profileImage: '', //TODO возможно заменить на photos
    aboutMe: '',
    posts: [],
    status: '',
    lookingForAJob: false,
    lookingForAJobDescription: '',
    contacts: {},
    isFetching: false,
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
        case SET_PROFILE_INFO:
            return {
                ...state,
                fullName: action.fullName,
                aboutMe: action.aboutMe,
                contacts: action.contacts,
                lookingForAJob: action.lookingForAJob,
                lookingForAJobDescription: action.lookingForAJobDescription,
            };
        case SET_PROFILE_IMAGE:
            return {
                ...state,
                profileImage: action.imageUrl,
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
export const setProfileInfo = (profileData) => ({type: SET_PROFILE_INFO, ...profileData,});
export const setProfileImage = (imageUrl) => ({type: SET_PROFILE_IMAGE, imageUrl,});
export const toggleIsFetching = () => ({type: TOGGLE_IS_FETCHING,});
export const setStatus = (status) => ({type: SET_STATUS, status,});

export const getUsersProfile = (userId) => {
    return async (dispatch) => {
        const data = await profileApi.getUsersProfile(userId);
        dispatch(setProfileInfo(data));
        dispatch(setProfileImage(data.photos.large));
    }
};

export const changeProfileInfo = (profileInfo) => {
    return async (dispatch) => {
        const data = await profileApi.setUsersProfile(profileInfo);
        if (data.resultCode === 0) {
            dispatch(setProfileInfo(profileInfo));
        } else {
            console.log(data.messages)
        }
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

export const uploadProfileImage = (imageFile) => {
    return async (dispatch) => {
        const data = await profileApi.putProfilePhoto(imageFile);
        if (data.resultCode === 0) {
            dispatch(setProfileImage(data.data.photos.large))
        }
        console.log(data.messages);
    }
};

export default profileReducer;
