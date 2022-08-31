import { useState } from 'react';
import { app } from './FirebaseConfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


export default function FirebaseAuth() {
    const [data, setData] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const handleInput = (e) => {
        let newInput = { [e.target.name]: e.target.value };
        setData({...data, ...newInput});
        // console.log('Data: ', data);
    }
    
    const handleSubmit = () => {
        // createUserWithEmailAndPassword(auth, data.email, data.password)
        // signInWithEmailAndPassword(auth, data.email, data.password)
        signInWithPopup(auth, googleProvider)
        .then((response) => {
            console.log(response.user);
        })
        .catch((error) => {
            alert(error.message)
        });

    }


    return (
        <div>
            <h4>Firebase Authentication</h4>
            <input type='email' name='email' placeholder='Email' onChange={ (e) =>(handleInput(e)) } />
            <input type='text' name='password' placeholder='Password' onChange={ (e) =>(handleInput(e)) } />
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}
