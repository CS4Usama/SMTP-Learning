import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Navigation() {
    return(
        <Router>
            <Header />
            
            <Footer />
        </Router>
    );
}