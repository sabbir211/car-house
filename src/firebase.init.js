// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import 'dotenv/config' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyAqXYk1gPvslhz_UfnkIUCSRrq7zTjLifc",
  authDomain:"car-house-57f8e.firebaseapp.com",
  projectId:"car-house-57f8e",
  storageBucket:"car-house-57f8e.appspot.com",
  messagingSenderId:"386389374157",
  appId:"1:386389374157:web:40ae5ed86614c078bde584",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth