import { Redirect, Route } from "react-router-dom";

function CustomPublicRouting({children, auth, ...rest}) {
    return(
        <Route {...rest} render={() => auth ? <Redirect to={'/home'} /> : children } />
    );
}

export default CustomPublicRouting;