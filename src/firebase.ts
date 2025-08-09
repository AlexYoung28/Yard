
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZCXxPP1XGm1MRfGiSUOcsdVNR6Cwv1cY",
  authDomain: "yardjobs-b8e72.firebaseapp.com",
  projectId: "yardjobs-b8e72",
  storageBucket: "yardjobs-b8e72.firebasestorage.app",
  messagingSenderId: "682521902947",
  appId: "1:682521902947:web:bb56a0840912ffe9e81d56",
  measurementId: "G-QE2PYCGS9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Auto sign-in anonymously
signInAnonymously(auth).catch(console.error);

export { db, auth };