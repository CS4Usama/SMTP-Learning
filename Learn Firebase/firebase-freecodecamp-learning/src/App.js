import './App.css';
import FirebaseAuth from './FirebaseAuth';
import FirestoreDB from './FirestoreDB';
import FirestoreRealtimeUpdateDB from './FirestoreRealtimeUpdateDB';
import FirestoreQueries from './FirestoreQueries';
import FirebaseStorage from './FirebaseStorage';


function App() {
    return (
        <div className='App'>
            {/* <FirebaseAuth /> */}
            {/* <FirestoreDB /> */}
            {/* <FirestoreRealtimeUpdateDB /> */}
            <FirestoreQueries />
            {/* <FirebaseStorage /> */}

        </div>
    );
}

export default App;
