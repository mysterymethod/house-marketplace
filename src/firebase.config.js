import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEO58uXmWtUS3OQGXXrSjdHkAoS1oBuUg",
  authDomain: "house-marketplace-app-48727.firebaseapp.com",
  projectId: "house-marketplace-app-48727",
  storageBucket: "house-marketplace-app-48727.appspot.com",
  messagingSenderId: "219574286636",
  appId: "1:219574286636:web:0e209980661bb385399489"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()