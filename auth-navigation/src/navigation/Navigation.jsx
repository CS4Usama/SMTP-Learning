import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../modules/home/Home';
import Login from '../modules/auth/login/Login';
import Signup from '../modules/auth/signup/Signup';


export default function Navigation() {
    return(
        <Router>
            <Header />

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                
                {/* <Route path="home">
                    <Home />
                </Route> */}

                <Route path="login">
                    <Login />
                </Route>

                <Route path="signup">
                    <Signup />
                </Route>
            </Switch>

            <Footer />
        </Router>
    );
}