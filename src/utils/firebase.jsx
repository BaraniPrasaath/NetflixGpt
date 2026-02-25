// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPOwZ7jti5KH5IaGyhglBqylGIv5BKfrk",
  authDomain: "netflixgpt-5d9dc.firebaseapp.com",
  projectId: "netflixgpt-5d9dc",
  storageBucket: "netflixgpt-5d9dc.firebasestorage.app",
  messagingSenderId: "646917053505",
  appId: "1:646917053505:web:29382aad83b6d6cebafac0",
  measurementId: "G-NCBZHW7E8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);