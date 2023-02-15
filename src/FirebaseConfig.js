// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBedG3ILaENlad44EkeXHrm_DiLgYF1-ws",
  authDomain: "kehnepay.firebaseapp.com",
  projectId: "kehnepay",
  storageBucket: "kehnepay.appspot.com",
  messagingSenderId: "970602892279",
  appId: "1:970602892279:web:79c1aceecb7d4fd65afcf2",
  measurementId: "G-L6HMJ0XWRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
