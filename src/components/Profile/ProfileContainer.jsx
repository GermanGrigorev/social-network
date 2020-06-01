import * as React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    addPost,
    changeProfileInfo,
    changeStatus,
    getUsersProfile,
    getUsersStatus,
    uploadProfileImage
} from "../../Redux/profileReducer";
import {toggleIsFetching} from "../../Redux/friendsReducer";
import Preloader from "../common/Preloader";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    //TODO toggle isFetching вынести в отдельный редюсер
    //TODO все перекинуть в hooks либо деструктуризировать пропсы
    componentDidMount() {
        // this.props.toggleIsFetching();
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId
        || (!this.props.match.params.userId && this.props.authorizedUserId !== prevProps.authorizedUserId)) {
           this.refreshProfile();
        }
    }

    refreshProfile() {
        let userId = this.props.match.params.userId || this.props.authorizedUserId;
        if (!userId) {
            this.props.history.push('/login'); //TODO remove deprecated code
        }
        this.props.getUsersProfile(userId);
        this.props.getUsersStatus(userId);
    }

    render() {
        const isOwner = !this.props.match.params.userId
            || this.props.match.params.userId === this.props.authorizedUserId;
        return (
            <>
                {/*{this.props.isFetching && <Preloader />}*/}
                <Profile {...this.props} isOwner={isOwner}/>
            </>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
        ...state.profilePage,
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, {
        addPost,
        toggleIsFetching,
        getUsersProfile,
        getUsersStatus,
        changeStatus,
        uploadProfileImage,
        changeProfileInfo,
    }),
)(ProfileContainer)
