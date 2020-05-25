import React from 'react';
import {connect} from 'react-redux';
import Friends from './Friends';
import {
    getFriends,
    setCurrentPage,
    toggleFollowed, toggleFollowingFriend, toggleIsFollowingInProgress,
} from '../../Redux/friendsReducer';
import Preloader from "../common/Preloader";
import {withAuthRedirect} from "../../hocs/withAuthRedirect";
import {compose} from "redux";
import {
    getFriendsSup as getFriendsArray,
    getCurrentPage,
    getIsFetching,
    getIsFollowingInProgress,
    getPageSize,
    getTotalUsersCount
} from "../../Redux/friendsSelectors";

class FriendsContainer extends React.Component {
    componentDidMount() {
        if (this.props.friends.length === 0) {
            this.props.getFriends(this.props.currentPage, this.props.pageSize);
        }
    }

    onPageChanged = (newPage) => {
        this.props.setCurrentPage(newPage);
        this.props.getFriends(newPage, this.props.pageSize);
    };

    render() {
        return <>
            {this.props.isFetching && <Preloader/>}
            <Friends friends={this.props.friends}
                     totalUsersCount={this.props.totalUsersCount}
                     pageSize={this.props.pageSize}
                     currentPage={this.props.currentPage}
                     onPageChanged={this.onPageChanged}
                     setCurrentPage={this.props.setCurrentPage}
                     isFollowingInProgress={this.props.isFollowingInProgress}
                     toggleFollowingFriend={this.props.toggleFollowingFriend}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        friends: getFriendsArray(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingInProgress: getIsFollowingInProgress(state),
        isAuth: state.auth.isAuth,
    }
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        toggleFollowed,
        setCurrentPage,
        toggleIsFollowingInProgress,
        getFriends,
        toggleFollowingFriend,
    }),
)(FriendsContainer);



