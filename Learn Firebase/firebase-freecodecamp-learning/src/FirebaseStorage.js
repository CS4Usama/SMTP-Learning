import { useState } from 'react';
import { storage } from './FirebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';


export default function FirebaseStorage() {
    const [data, setData] = useState({});

    const handleUpload = () => {
        // const storageRef = ref(storage, data.name);
        const storageRef = ref(storage, `images/${data.name}`);
        const uploadTask = uploadBytesResumable(storageRef, data);
        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        },
        (error) => {
            alert(error.message);
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
            });
        }
        );
    }


    return (
        <div>
            <h4>Firebase Storage</h4>
            <input type='file' name='image' onChange={(e) => setData(e.target.files[0])} />
            <br /> <br />
            <button onClick={handleUpload}>Upload Image</button>
        </div>
    );
}
