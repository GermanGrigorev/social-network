import React from 'react';
import './Dialogs.css'
import {
    addMessage,
} from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirect} from "../../hocs/withAuthRedirect";
import {compose} from "redux";

class DialogsContainer extends React.Component {
    render() {
        return <Dialogs {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth,
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        addMessage,
    }),
)(DialogsContainer)
