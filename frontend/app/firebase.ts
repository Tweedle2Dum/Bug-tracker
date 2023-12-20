import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getApps,getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
export const app = getApps().length? getApp():initializeApp(firebaseConfig);
export const auth = getAuth(app)

