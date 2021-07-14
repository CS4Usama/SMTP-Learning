import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRouting from "./PrivateRouting";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Profile from "../modules/profile/Profile";
import Home from '../modules/home/Home';
import Login from '../modules/auth/login/Login';
import Signup from '../modules/auth/signup/Signup';


export default function Navigation() {
    
    const authState = false;

    return(
        <Router>
            <Header />

            <Switch>

                <Route exact path="/">
                    <div>Cyber Hawk</div>
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/signup">
                    <Signup />
                </Route>

                {/* Private/Protected Routes */}
                <PrivateRouting path="/home" auth={authState}>
                    <Home />
                </PrivateRouting>
                <PrivateRouting path="/profile" auth={authState}>
                    <Profile />
                </PrivateRouting>

            </Switch>

            <Footer />
        </Router>
    );
}