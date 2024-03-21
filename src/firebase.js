// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAWLrjNpUnqOUQGeaD-EWuhfSwZNNVh3zs",
  authDomain: "fir-auth-1132-1c053.firebaseapp.com",
  projectId: "fir-auth-1132-1c053",
  storageBucket: "fir-auth-1132-1c053.appspot.com",
  messagingSenderId: "67118200137",
  appId: "1:67118200137:web:75521ef9ad3f6a66e85698",
  measurementId: "G-T0M03X8G2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth();

export{app,auth};
 