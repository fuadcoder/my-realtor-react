// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVTpYtl57vEkTb6AA4KVPS4IK0YGcZzXw",
  authDomain: "myrealtor-react.firebaseapp.com",
  projectId: "myrealtor-react",
  storageBucket: "myrealtor-react.appspot.com",
  messagingSenderId: "991579098698",
  appId: "1:991579098698:web:132f33159ff6898a3de0b3"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()