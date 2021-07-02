import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Class06 from "../class06";

export default function Routing() {
    return(
        <div>

            <Router>

                <Link to="Home">Home</Link>
                <Link to="/about">About</Link>

                <Switch>

                    <Route exact path="/">
                    </Route>

                    <Route path="/about">
                        <Class06></Class06>
                    </Route>

                </Switch>

            </Router>

        </div>
    );
}