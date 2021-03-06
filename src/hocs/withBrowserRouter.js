import {BrowserRouter} from "react-router-dom";
import React from "react";

const withBrowserRouter = (Component) => {
    const withBrowserRouterComponent = (props) => {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Component {...props} />
            </BrowserRouter>
        );
    };

    withBrowserRouterComponent.displayName = `withBrowserRouter(${Component.displayName
    || Component.name
    || 'Component'})`;

    return withBrowserRouterComponent;
};

export default withBrowserRouter;
