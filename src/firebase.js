// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABorQCogWNJQJsyGWeV51ra6_4Xkx1V28",
  authDomain: "crypto-app-8f826.firebaseapp.com",
  projectId: "crypto-app-8f826",
  storageBucket: "crypto-app-8f826.appspot.com",
  messagingSenderId: "887623347084",
  appId: "1:887623347084:web:3f2a4e297d54f2d3ea04a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

export default app