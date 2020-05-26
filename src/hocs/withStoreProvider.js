import {Provider} from "react-redux";
import store from "../Redux/reduxStore";
import React from "react";

const withStoreProvider = (Component) => {
    const withStoreProviderComponent = (props) => {
        return (
            <Provider store={store}>
                <Component {...props} />
            </Provider>
        )
    }

    withStoreProviderComponent.displayName = `withStoreProvider(${Component.displayName
        || Component.name
        || 'Component'})`;

    return withStoreProviderComponent;
}

export default withStoreProvider;
