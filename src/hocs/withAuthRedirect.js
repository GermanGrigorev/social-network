import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export const withAuthRedirect = (Component) => {
    class withAuthRedirect extends React.Component{
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'} />
            return <Component {...this.props}/>;
        }
    }

    const withAuthRedirectComponentName = Component.displayName
        || Component.name
        || 'Component';
    withAuthRedirect.displayName = `withFoo${withAuthRedirectComponentName}`;

    const mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth,
        }
    }
    return connect(mapStateToProps, {}) (withAuthRedirect);
}
