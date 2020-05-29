import React from 'react';
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";
import LoginForm from "./LoginForm/LoginForm";
import {Redirect} from "react-router-dom";

class Login extends React.Component {
    render() {
        const onSubmit = (formData) => {
            this.props.login(formData.login, formData.password, formData.rememberMe, formData.captcha);
        };

        if (this.props.isAuth) return <Redirect to='/profile'/>;

        return (
            <div>
                <h1>Login</h1>
                <LoginForm
                    onSubmit={onSubmit}
                    isCaptchaRequired={this.props.isCaptchaRequired}
                    captchaUrl={this.props.captchaUrl}
                />
                <p>If you don't have an account, use test login and password.</p>
                <p>Login: free@samuraijs.com</p>
                <p>Password: free</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        isCaptchaRequired: state.auth.isCaptchaRequired,
        captchaUrl: state.auth.captchaUrl,
    }
};

export default connect(mapStateToProps, {
    login
})(Login) //TODO сделать контейнер
