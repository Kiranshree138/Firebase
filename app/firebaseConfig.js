// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNozLihCtMbAh1UAyTAfhcNGT-LsMX9gQ",
  authDomain: "skill-lab-db996.firebaseapp.com",
  projectId: "skill-lab-db996",
  storageBucket: "skill-lab-db996.firebasestorage.app",
  messagingSenderId: "359903719799",
  appId: "1:359903719799:web:9b373775dcf79c8a9f7172",
  measurementId: "G-X1R9HH880X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);