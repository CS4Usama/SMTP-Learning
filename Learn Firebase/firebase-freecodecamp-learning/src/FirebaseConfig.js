import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyCokwzsw2VJCBV5ehxtw8qWXBDYb006YG0",
  authDomain: "smtp-firebase-learning-a39ad.firebaseapp.com",
  projectId: "smtp-firebase-learning-a39ad",
  storageBucket: "smtp-firebase-learning-a39ad.appspot.com",
  messagingSenderId: "638227548506",
  appId: "1:638227548506:web:6fbab8fe0380144b648b63",
  measurementId: "G-D5TJPCWK3Q"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
