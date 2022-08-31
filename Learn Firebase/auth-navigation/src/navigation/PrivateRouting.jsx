import { Redirect, Route } from "react-router-dom";

function PrivateRouting({children, auth, ...rest}) {
    return(
        <Route {...rest} render={() => auth ? children : <Redirect to={'/login'} />} />
    );
}

export default PrivateRouting;