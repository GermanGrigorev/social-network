import {usersApi} from "../api/api";

const SET_FRIENDS = 'SET_FRIENDS';
const TOGGLE_FOLLOWED = 'TOGGLE_FOLLOWED';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS';

let initialState = {
    friends: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: false,
};

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FRIENDS:
            return {
                ...state,
                friends: [...action.friends],
            };
        case TOGGLE_FOLLOWED:
            return {
                ...state,
                friends: state.friends.map((friend) => {
                    if (friend.id === action.friendId) {
                        return {
                            ...friend,
                            followed: action.flag,
                        }
                    }
                    return friend;
                })
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber,
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount,
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.flag,
            };
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                isFollowingInProgress: action.flag,
            };
        default:
            return state;
    }
};

export const setFriends = (friends) => ({type: SET_FRIENDS, friends,});
export const toggleFollowed = (friendId, flag) => ({type: TOGGLE_FOLLOWED, friendId, flag});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber,});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount,});
export const toggleIsFetching = (flag) => ({type: TOGGLE_IS_FETCHING, flag});
export const toggleIsFollowingInProgress = (flag) => ({type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, flag});

export const getFriends = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersApi.getUsers(currentPage, pageSize).then((data) => {
            dispatch(setFriends(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
            dispatch(toggleIsFetching(false)); //TODO заменить все тоглы на toggle(true/false)
        })
    }
};

export const toggleFollowingFriend = (friendId, flag) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingInProgress(true));
        const promise = flag ? usersApi.follow : usersApi.unfollow;
        promise(friendId).then((data) => {
            if (data.resultCode === 0) {
                dispatch(toggleFollowed(friendId, flag));
            }
            dispatch(toggleIsFollowingInProgress(false));
        })
    }
};

export default friendsReducer
