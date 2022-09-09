import { useRouter } from "next/router";
import { useState, useEffect } from "react";


const Dashboard = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({value: null});

    const router = useRouter();

    const handleChange = (e) => {
        if(e.target.name === 'name') {
            setName(e.target.value);
        } else if(e.target.name === 'password') {
            setPhone(e.target.value);
        }
    }    

    const handleSubmit = async(e) => {
        
    }

    useEffect(() => {
        const user = localStorage.getItem('myUserEmail');
        const userPass = localStorage.getItem('myUserPass');
        const userName = localStorage.getItem('myUserName');
        if(!user) {
            router.push('/');
        }
        if(user) {
            setUser(user);
            setName(userName);
            setEmail(user);
            setPassword(userPass)
        }
    }, []);


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Your Name: </label>
                <input type="name" id="name" name="name" placeholder="Full Name" value={name} onChange={handleChange} required />
                <br/><br/>
                <label htmlFor="email">Your Email: </label>
                <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={handleChange} disabled />
                <br/><br/>
                <label htmlFor="Password">Your Password: </label>
                <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={handleChange} required />
            </form>
        </div>
    );
}

export default Dashboard;
