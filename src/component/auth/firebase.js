// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHm3FaGXK5IqMPzi3-zKmCXldORpEPCXQ",
  authDomain: "flipboard-8000d.firebaseapp.com",
  projectId: "flipboard-8000d",
  storageBucket: "flipboard-8000d.appspot.com",
  messagingSenderId: "968699449798",
  appId: "1:968699449798:web:17e7f517e378381b06e2c7",
  measurementId: "G-61XQYLT26S"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize the Auth service


export { auth };