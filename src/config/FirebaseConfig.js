// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAfSd7Oq_WQpRpBXM8DrEkymrkuebULW-E",
    authDomain: "creativeagency-53fe4.firebaseapp.com",
    projectId: "creativeagency-53fe4",
    storageBucket: "creativeagency-53fe4.appspot.com",
    messagingSenderId: "133454604795",
    appId: "1:133454604795:web:94ea0d866abf63d81d035e",
    measurementId: "G-WWV0FLL53C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);