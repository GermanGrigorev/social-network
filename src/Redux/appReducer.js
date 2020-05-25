import {setAuthInfo} from "./authReducer";

const TOGGLE_IS_INITIALIZED = 'social-network/app/TOGGLE_IS_INITIALIZED';

const initialState = {
    isInitialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_INITIALIZED :
            return {
                ...state,
                isInitialized: action.flag,
            };
        default:
            return state;
    }
};

export const toggleIsInitialized = (flag) => ({type: TOGGLE_IS_INITIALIZED, flag});

export const initializeApp = () => {
    return async (dispatch) => {
        await dispatch(setAuthInfo());
        dispatch(toggleIsInitialized(true));
    }
};

export default appReducer;
