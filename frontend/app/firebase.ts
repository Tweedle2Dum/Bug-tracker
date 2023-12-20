// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getApps,getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE7JvPJp0x5L--sihEqhbCyRUwDNjNmFE",
  authDomain: "bugtracker-cba9f.firebaseapp.com",
  projectId: "bugtracker-cba9f",
  storageBucket: "bugtracker-cba9f.appspot.com",
  messagingSenderId: "555860615079",
  appId: "1:555860615079:web:0f415a40d78b7b83a9e082",
  measurementId: "G-04VMXZ3YW3"
};

// Initialize Firebase
const app = getApps().length? getApp():initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()

export {app,auth,analytics}
