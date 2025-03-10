// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d00f3.firebaseapp.com",
  projectId: "mern-estate-d00f3",
  storageBucket: "mern-estate-d00f3.firebasestorage.app",
  messagingSenderId: "702437815849",
  appId: "1:702437815849:web:3246c0cce186bc04fa8e38"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);