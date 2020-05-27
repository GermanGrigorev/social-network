import {BrowserRouter} from "react-router-dom";
import React from "react";

const withBrowserRouter = (Component) => {
    let withBrowserRouterComponent = (props) => {
        return (
            <BrowserRouter>
                <Component {...props} />
            </BrowserRouter>
        );
    }

    withBrowserRouterComponent.displayName = `withBrowserRouter(${Component.displayName
    || Component.name
    || 'Component'})`;

    return withBrowserRouterComponent;
};

export default withBrowserRouter;
