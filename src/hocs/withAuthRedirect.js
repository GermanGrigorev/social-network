import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const withAuthRedirect = (Component) => {
    class withAuthRedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component {...this.props}/>;
        }
    }

    withAuthRedirectComponent.displayName = `withAuthRedirect(${Component.displayName
    || Component.name
    || 'Component'})`;

    const mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth,
        }
    }
    return connect(mapStateToProps, {})(withAuthRedirectComponent);
}

export default withAuthRedirect;
