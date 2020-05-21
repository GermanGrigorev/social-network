import * as React from 'react';
import store from '../Redux/reduxStore';
import {BrowserRouter} from 'react-router-dom';
import App from '../App';

const StoreContext = React.createContext(null)

export const Provider = (props) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}
export default StoreContext;
