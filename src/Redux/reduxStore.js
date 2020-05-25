import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import friendsReducer from './friendsReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from "redux-form";
import appReducer from "./appReducer";

let reducers = combineReducers({
    dialogPage: dialogsReducer,
    profilePage: profileReducer,
    friendsPage: friendsReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

/*let store = createStore(
    reducers,
    applyMiddleware(thunkMiddleware),
);*/

export default store;
