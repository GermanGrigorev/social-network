import React from "react";
import {HashRouter} from "react-router-dom";

const withHashRouter = (Component) => {
    const withHashRouterComponent = (props) => {
        return (
            <HashRouter>
                <Component {...props} />
            </HashRouter>
        );
    };

    withHashRouterComponent.displayName = `withHashRouter(${Component.displayName
    || Component.name
    || 'Component'})`;

    return withHashRouterComponent;
};

export default withHashRouter;
