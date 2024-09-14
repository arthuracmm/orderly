// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {} from 'firebase/storage'
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMYwnH6O13BuLlFhbjMMAh8FBqbBRQy34",
  authDomain: "oderlypiupload.firebaseapp.com",
  projectId: "oderlypiupload",
  storageBucket: "oderlypiupload.appspot.com",
  messagingSenderId: "1076903562931",
  appId: "1:1076903562931:web:0c39b754752102a9926ac6",
  measurementId: "G-09S18VHKDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const ImagedB = getStorage(app)
