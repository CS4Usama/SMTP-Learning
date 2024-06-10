import { useRouter } from "next/router";
import { useState, useEffect } from "react";


const Dashboard = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({value: null});

    const [data, setData] = useState([])

    const router = useRouter();

    const handleChange = (e) => {
        if(e.target.name === 'name') {
            setName(e.target.value);
        } else if(e.target.name === 'password') {
            // setPhone(e.target.value);
            setPassword(e.target.value);
        }
    }    

    const handleSubmit = async(e) => {
        await fetch('/api/dashboard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
    }

    // useEffect(() => {
        // const user = localStorage.getItem('myUserEmail');
    //     const userPass = localStorage.getItem('myUserPass');
    //     const userName = localStorage.getItem('myUserName');
    //     if(!user) {
    //         router.push('/');
    //     }
    //     if(user) {
    //         setUser(user);
    //         setName(userName);
    //         setEmail(user);
    //         setPassword(userPass)
    //     }
    // }, []);
    

    useEffect(() => {
        async function fetchData() {
            let userId = localStorage.getItem('myUserId');
            const res = await fetch('/api/dashboard/' +id, )
            var response = await res.json();
            setName(response.name)
            setEmail(response.email)
            setPassword(response.password)
            // setData(JSON.stringify(response))
        // console.log('response', response);
        // console.log('data', data);
        // console.log('data', JSON.stringify(data));
        
    }
    fetchData()
    // console.log('Name', data.name);
}, []);



    return (
        
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Your Name: </label>
                <input type="text" id="name" name="name" placeholder="Full Name" value={name} onChange={handleChange} required />
                <br/><br/>
                <label htmlFor="email">Your Email: </label>
                <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={handleChange} disabled />
                <br/><br/>
                <label htmlFor="password">Your Password: </label>
                <input type="text" id="password" name="password" placeholder="Password" value={password} onChange={handleChange} required />
            </form>
            <h1>Users</h1>
      <ul>
        {/* {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))} */}
        {data.name}
      </ul>
        </div>
    );
}

export default Dashboard;
