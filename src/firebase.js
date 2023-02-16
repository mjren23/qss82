// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhchhLNIXbydQVKDX9FvUhsuUGce8wayg",
  authDomain: "qss82-67ffc.firebaseapp.com",
  projectId: "qss82-67ffc",
  storageBucket: "qss82-67ffc.appspot.com",
  messagingSenderId: "465005194761",
  appId: "1:465005194761:web:e2eeb30f1146cf929412d8",
  measurementId: "G-JBT0659FWJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
