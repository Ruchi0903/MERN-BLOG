// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-app-e2810.firebaseapp.com",
  projectId: "mern-blog-app-e2810",
  storageBucket: "mern-blog-app-e2810.appspot.com",
  messagingSenderId: "29116739670",
  appId: "1:29116739670:web:b7401adef9ed84f6628bf7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);