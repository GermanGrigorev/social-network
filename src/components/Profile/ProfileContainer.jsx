import * as React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {addPost, changeStatus, getUsersProfile, getUsersStatus} from "../../Redux/profileReducer";
import {toggleIsFetching} from "../../Redux/friendsReducer";
import Preloader from "../common/Preloader";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    //TODO toggle isFetching вынести в отдельный редюсер
    //TODO все перекинуть в hooks либо деструктуризировать пропсы
    componentDidMount() {
        // this.props.toggleIsFetching();
        let userId = this.props.match.params.userId || this.props.authorizedUserId;
        if (!userId) {
            this.props.history.push('/login');
        }
        this.props.getUsersProfile(userId);
        this.props.getUsersStatus(userId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            let userId = this.props.match.params.userId || this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login');
            }
            this.props.getUsersProfile(userId);
            this.props.getUsersStatus(userId); //TODO Remove duplicated code
        }
    }

    render() {
        return (
            <>
                {/*{this.props.isFetching && <Preloader />}*/}
                <Profile {...this.props}/>
            </>
        );
    }
}

let mapStateToProps = (state) => {
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
    }),
)(ProfileContainer)
