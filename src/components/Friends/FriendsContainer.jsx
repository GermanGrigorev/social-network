import React from 'react';
import {connect} from 'react-redux';
import Friends from './Friends';
import {
    getFriends,
    setCurrentPage,
    toggleFollowed, toggleFollowingFriend, toggleIsFollowingInProgress,
} from '../../Redux/friendsReducer';
import Preloader from "../common/Preloader";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hocs/withAuthRedirect";
import {compose} from "redux";

class FriendsContainer extends React.Component {
    componentDidMount() {
        if (this.props.friends.length === 0) {
            this.props.getFriends(this.props.currentPage, this.props.pageSize);
        }
    }

    onPageChanged = (newPage) => {
        this.props.setCurrentPage(newPage);
        this.props.getFriends(newPage, this.props.pageSize);
    }

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
        friends: state.friendsPage.friends,
        pageSize: state.friendsPage.pageSize,
        totalUsersCount: state.friendsPage.totalUsersCount,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching,
        isFollowingInProgress: state.friendsPage.isFollowingInProgress,
        isAuth: state.auth.isAuth,
    }
}

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



