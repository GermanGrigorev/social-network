import {authApi, securityApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_CAPTCHA_REQUIRED = 'TOGGLE_IS_CAPTCHA_REQUIRED'
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    isCaptchaRequired: false,
    captchaUrl: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case TOGGLE_IS_CAPTCHA_REQUIRED:
            return {
                ...state,
                isCaptchaRequired: action.flag,
            }
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state;
    }
}

export const authorizeUser = (userId, login, email, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {userId, login, email, isAuth},
    }
}
export const toggleIsCaptchaRequired = (flag) => ({type: TOGGLE_IS_CAPTCHA_REQUIRED, flag});
export const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA_URL, captchaUrl});

export const setAuthInfo = () => {
    return (dispatch) => {
        return authApi.getAuthData().then((data) => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(authorizeUser(id, login, email, true));
            }
        })
    }
}

export const getCaptcha = () => {
    return (dispatch) => {
        securityApi.getCaptcha().then((data) => {
            dispatch(setCaptchaUrl(data.url));
        })
    }
}

export const login = (email, password, rememberMe, captcha) => {
    return (dispatch) => {
        authApi.login(email, password, rememberMe, captcha).then((data) => {
            dispatch(toggleIsCaptchaRequired(false));

            if (data.resultCode === 0) {
                dispatch(setAuthInfo());
                dispatch(setCaptchaUrl(null));
            } else {
                if (data.resultCode === 10) {
                    dispatch(toggleIsCaptchaRequired(true));
                    dispatch(getCaptcha());
                }
                let message = data.messages.length > 0 ? data.messages[0] : 'Something wrong';
                dispatch(stopSubmit('login', {_error: message}));
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        authApi.logout().then((data) => {
            if (data.resultCode === 0) {
                dispatch(authorizeUser(null, null, null, false));
            }
        })
    }
}

export default authReducer;
