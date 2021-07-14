import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <div style={{paddingLeft:50, paddingBottom:50}}>
            <Link style={{paddingRight:30}} to="/">Home</Link>
            <Link style={{paddingRight:30}} to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
        </div>
    );
}