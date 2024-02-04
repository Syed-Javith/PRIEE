// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpoNoBC77l1qlkQdGsnEfBFOITpu9c9mA",
  authDomain: "priee-64f09.firebaseapp.com",
  projectId: "priee-64f09",
  storageBucket: "priee-64f09.appspot.com",
  messagingSenderId: "464806892135",
  appId: "1:464806892135:web:d172d90ef87e4a2d733ac2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);