import {usersApi} from "../api/api";
import {updateObjectInArray} from "../utils/updateObjectInArray";

const SET_FRIENDS = 'social-network/friends/SET_FRIENDS';
const TOGGLE_FOLLOWED = 'social-network/friends/TOGGLE_FOLLOWED';
const SET_CURRENT_PAGE = 'social-network/friends/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'social-network/friends/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'social-network/friends/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'social-network/friends/TOGGLE_IS_FOLLOWING_IN_PROGRESS';

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
                friends: updateObjectInArray(
                    state.friends,
                    'id',
                    action.friendId,
                    {followed: action.flag,}
                    ),
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
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));

        const data = await usersApi.getUsers(currentPage, pageSize);

        dispatch(setFriends(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(toggleIsFetching(false));
    }
};

export const toggleFollowingFriend = (friendId, flag) => {
    return async (dispatch) => {
        dispatch(toggleIsFollowingInProgress(true));

        const asyncFunction = flag ? usersApi.follow : usersApi.unfollow;
        const data = await asyncFunction(friendId);

        if (data.resultCode === 0) {
            dispatch(toggleFollowed(friendId, flag));
        }
        dispatch(toggleIsFollowingInProgress(false));
    }
};

export default friendsReducer
