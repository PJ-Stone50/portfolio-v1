// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASamrykzgFxlfg5zQToJmJBroYk5HYDt0",
  authDomain: "cover-5365a.firebaseapp.com",
  projectId: "cover-5365a",
  storageBucket: "cover-5365a.appspot.com",
  messagingSenderId: "59873545295",
  appId: "1:59873545295:web:6dbdadec076c12d0d36e3a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
