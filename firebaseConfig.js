// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDSdCGfIVDKWeABFr76AiJKnPT21qQhqYQ",
    authDomain: "file-app-4eaa2.firebaseapp.com",
    projectId: "file-app-4eaa2",
    storageBucket: "file-app-4eaa2.appspot.com",
    messagingSenderId: "297048798511",
    appId: "1:297048798511:web:a5126af9deb69c38a6ddda",
    measurementId: "G-KWG21QGZLB",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { app, firestore };