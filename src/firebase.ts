/**CODE POUR FIREBASE AUTHENTIFICATION */

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKVdxRG4HbP5hmCkKIcHekJQ75sAaOrlI",
  authDomain: "projetsession-e0ffe.firebaseapp.com",
  projectId: "projetsession-e0ffe",
  storageBucket: "projetsession-e0ffe.appspot.com",
  messagingSenderId: "728354531271",
  appId: "1:728354531271:web:852438a074196acd8e5be2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const logout = () => {
    signOut(auth);
};

export const logInWithEmailAndPassword = async (
    email: string,
    password: string
    ) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
        console.error(err);
        alert(err.message);
    }
    };