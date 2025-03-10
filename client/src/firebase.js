// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7cf6e.firebaseapp.com",
  projectId: "mern-estate-7cf6e",
  storageBucket: "mern-estate-7cf6e.firebasestorage.app",
  messagingSenderId: "522475498286",
  appId: "1:522475498286:web:8e40d58802a20b86aea8bf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);