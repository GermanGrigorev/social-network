import {setAuthInfo} from "./authReducer";

const TOGGLE_IS_INITIALIZED = 'TOGGLE_IS_INITIALIZED'

const initialState = {
    isInitialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_INITIALIZED :
            return {
                ...state,
                isInitialized: action.flag,
            }
        default: return state;
    }
}

export const toggleIsInitialized = (flag) => ({type: TOGGLE_IS_INITIALIZED, flag});

export const initializeApp = () => {
    return (dispatch) => {
        dispatch(setAuthInfo())
            .then(() => dispatch(toggleIsInitialized(true)));
    }
}

export default appReducer;
