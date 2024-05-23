// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB17bynwezrDcy91yShDaw4XpsTROQwrtg",
  authDomain: "portfolio-website-f6d69.firebaseapp.com",
  projectId: "portfolio-website-f6d69",
  storageBucket: "portfolio-website-f6d69.appspot.com",
  messagingSenderId: "793766654822",
  appId: "1:793766654822:web:df83239e7fcb57f7eb8ea7",
  measurementId: "G-QHP6E4JS2S"
};

// Initialize Firebase
// const firebase_app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword };
export default app;

