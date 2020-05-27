import React, {Suspense} from "react";
import Preloader from "../components/common/Preloader";

const withSuspense = (Component) => {
    const withSuspenseComponent = (props) => {
        return (
            <Suspense fallback={<Preloader />}>
                <Component {...props} />
            </Suspense>
        );
    };

    withSuspenseComponent.displayName = `withSuspense(${Component.displayName
    || Component.Name
    || 'Component'})`;

    return withSuspenseComponent;
};

export default withSuspense;
