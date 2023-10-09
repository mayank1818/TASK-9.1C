// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS9RI5FmBgTEEqTVAnD-N-nSW6gnCOqyA",
  authDomain: "mayank-80c05.firebaseapp.com",
  projectId: "mayank-80c05",
  storageBucket: "mayank-80c05.appspot.com",
  messagingSenderId: "691501157538",
  appId: "1:691501157538:web:59bfe145d6189c07bb1bfb",
  measurementId: "G-MFKXBBZ95K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth}
