// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFG6oF1tEOorp4hFZby3kQ0juUSofubAo",
  authDomain: "netflixgpt-6d8cc.firebaseapp.com",
  projectId: "netflixgpt-6d8cc",
  storageBucket: "netflixgpt-6d8cc.firebasestorage.app",
  messagingSenderId: "189628193763",
  appId: "1:189628193763:web:3f7c6873b688fa46e0ded6",
  measurementId: "G-8ECSGH34MK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);