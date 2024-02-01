// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-p68ldEb9hKzqXZzN5uufZheMcUSI9Ck",
  authDomain: "prueba-auth-2ae86.firebaseapp.com",
  projectId: "prueba-auth-2ae86",
  storageBucket: "prueba-auth-2ae86.appspot.com",
  messagingSenderId: "415556461049",
  appId: "1:415556461049:web:51dba49609ef15dc9b1d28"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);