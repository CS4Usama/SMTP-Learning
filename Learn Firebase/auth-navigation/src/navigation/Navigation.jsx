import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRouting from "./PrivateRouting";
import CustomPublicRouting from "./CustomPublicRouting";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Profile from "../modules/profile/Profile";
import Home from '../modules/home/Home';
import Login from '../modules/auth/login/Login';
import Signup from '../modules/auth/signup/Signup';
import { useSelector } from "react-redux";


export default function Navigation() {

    // const authState = false;
    const authState = useSelector(state => state.AuthReducer.isUserLoggedIn);

    return(
        <Router>
            <Header />

            <Switch>

                <Route exact path="/">
                    <div>Cyber Hawk</div>
                </Route>

                <CustomPublicRouting path="/login" auth={authState}>
                    <Login />
                </CustomPublicRouting>

                <CustomPublicRouting path="/signup" auth={authState}>
                    <Signup />
                </CustomPublicRouting>

                {/* Private/Protected Routes */}
                <PrivateRouting path="/home" auth={authState}>
                    <Home />
                </PrivateRouting>
                <PrivateRouting path="/profile" auth={authState}>       {/* <PrivateRoute /> */}
                    <Profile />
                </PrivateRouting>

            </Switch>

            <Footer />
        </Router>
    );
}