import { Redirect, Route } from "react-router-dom";

function CustomPublicRouting({children, auth, ...rest}) {
    return(
        // Opposite of Private Routing
        <Route {...rest} render={() => auth ? <Redirect to={'/home'} /> : children } />
    );
}

export default CustomPublicRouting;