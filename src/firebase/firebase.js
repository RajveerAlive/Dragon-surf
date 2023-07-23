import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBem4woCkKqxkhQfibQ6FUEh6dsb4Oz8lY",
  authDomain: "dragon-surf.firebaseapp.com",
  projectId: "dragon-surf",
  storageBucket: "dragon-surf.appspot.com",
  messagingSenderId: "194380617041",
  appId: "1:194380617041:web:0496e97fc6ac272511af70"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();
const db = getFirestore();

export { app, auth, storage, db};