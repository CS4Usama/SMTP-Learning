import { useEffect, useState } from 'react';
import { db } from './FirebaseConfig';
import { collection, addDoc, doc, updateDoc, deleteDoc, onSnapshot } from 'firebase/firestore';


export default function FirestoreRealtimeUpdateDB() {
    const [data, setData] = useState({});
    const collectionRef = collection(db, 'FreeCodeCamp');

    const handleInput = (e) => {
        let newInput = { [e.target.name]: e.target.value };
        setData({...data, ...newInput});
        // console.log('Data: ', data);
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

    // This Portion Changed-1
    const getData = () => {
        onSnapshot(collectionRef, (response) => {
            console.log(
                response.docs.map((item) => {
                    return {...item.data(), id: item.id};
                })
            );
        });
    }

    const updateData = () => {
        const docToUpdate = doc(db, 'FreeCodeCamp', 'VgMCprLJQUuUDuGLJYcq');
        updateDoc(docToUpdate, {
            email: 'Usama',
            // password: 1234
        }).then(() => {
            alert('Data Updated Successfully');
        }).catch((err) => {
            alert(err.message)
        });
    }

    const deleteData = () => {
        const docToDelete = doc(db, 'FreeCodeCamp', 'VgMCprLJQUuUDuGLJYcq');
        deleteDoc(docToDelete).then(() => {
            alert('Data Deleted Successfully');
        }).catch((err) => {
            alert(err.message)
        });
    }

    // This Portion Changed-2
    useEffect(() => {
        getData();
    }, [])


    return (
        <div>
            <h4>Firestore Realtime Updated Database</h4>
            <input type='text' name='email' placeholder='Email' onChange={ (e) =>(handleInput(e)) } />
            <input type='text' name='password' placeholder='Password' onChange={ (e) =>(handleInput(e)) } />
            <br />
            <button onClick={addData}>Add Data</button>
            <button onClick={getData}>Get Data</button>
            <button onClick={updateData}>Update Data</button>
            <button onClick={deleteData}>Delete Data</button>
        </div>
    );
}
