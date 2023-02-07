// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5j8AK_QFZx6-Gdnj54Rl2qEZIgz9npo4",
  authDomain: "netflix-clone-c5bd6.firebaseapp.com",
  projectId: "netflix-clone-c5bd6",
  storageBucket: "netflix-clone-c5bd6.appspot.com",
  messagingSenderId: "168239281189",
  appId: "1:168239281189:web:268e53280a7203bdb37bcc",
  measurementId: "G-C3LWHD9ZSV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);