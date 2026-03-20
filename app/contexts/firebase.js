// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOb2CWhndaDwDnGYbZvl3IST4zTOm9m_Q",
  authDomain: "cprg306-assignments-ad99d.firebaseapp.com",
  projectId: "cprg306-assignments-ad99d",
  storageBucket: "cprg306-assignments-ad99d.firebasestorage.app",
  messagingSenderId: "319801459284",
  appId: "1:319801459284:web:468fd199b8e3d56e7563c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
