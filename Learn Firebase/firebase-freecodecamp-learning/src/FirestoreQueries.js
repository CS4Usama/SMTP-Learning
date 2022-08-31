import { useEffect, useState } from 'react';
import { db } from './FirebaseConfig';
import { collection, addDoc, onSnapshot, query, where } from 'firebase/firestore';


export default function FirestoreQueries() {
    const [data, setData] = useState({});
    const collectionRef = collection(db, 'FreeCodeCamp');
    // const anyQuery = query(collectionRef, where('age', '>=', 25));
    const anyQuery = query(collectionRef, where('email', '==', 'Usama'));

    const handleInput = (e) => {
        let newInput = { [e.target.name]: e.target.value };
        setData({...data, ...newInput});
    }

    const addData = () => {
        addDoc(collectionRef, {
            email: data.email,
            password: data.password
        }).then(() => {
            alert('Data Added Successfully');
        }).catch((err) => {
            alert(err.message);
        })
    }

    const getData = () => {
        onSnapshot(anyQuery, (response) => {
            console.log(
                response.docs.map((item) => {
                    return {...item.data(), id: item.id};
                })
            );
        });
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <div>
            <h4>Firestore Queries</h4>
            <input type='text' name='email' placeholder='Email' onChange={ (e) =>(handleInput(e)) } />
            <input type='text' name='password' placeholder='Password' onChange={ (e) =>(handleInput(e)) } />
            <input type='number' name='age' placeholder='Age' onChange={ (e) =>(handleInput(e)) } />
            <br />
            <button onClick={addData}>Add Data</button>
            <button onClick={getData}>Get Data</button>
        </div>
    );
}
