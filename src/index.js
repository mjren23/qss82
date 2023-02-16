import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "NO_API_KEY_LEAK",
  authDomain: "qss82-67ffc.firebaseapp.com",
  projectId: "qss82-67ffc",
  storageBucket: "gs://qss82-67ffc.appspot.com",
  messagingSenderId: "465005194761",
  appId: "1:465005194761:web:e2eeb30f1146cf929412d8",
  measurementId: "G-JBT0659FWJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

const db = getFirestore(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App fireBaseApp={app}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
