import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCokwzsw2VJCBV5ehxtw8qWXBDYb006YG0",
    authDomain: "smtp-firebase-learning-a39ad.firebaseapp.com",
    projectId: "smtp-firebase-learning-a39ad",
    storageBucket: "smtp-firebase-learning-a39ad.appspot.com",
    messagingSenderId: "638227548506",
    appId: "1:638227548506:web:6fbab8fe0380144b648b63",
    measurementId: "G-D5TJPCWK3Q"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
// export const storage = firebase.storage();