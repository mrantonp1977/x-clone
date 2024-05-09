// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-clone-422616.firebaseapp.com",
  projectId: "x-clone-422616",
  storageBucket: "x-clone-422616.appspot.com",
  messagingSenderId: "942719542984",
  appId: "1:942719542984:web:968800be07fdd243d367fd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);