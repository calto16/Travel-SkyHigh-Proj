// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJjJ6SrRR_NsPPKpcecfCFtMU7iheZNW8",
  authDomain: "travel-skyhigh.firebaseapp.com",
  projectId: "travel-skyhigh",
  storageBucket: "travel-skyhigh.appspot.com",
  messagingSenderId: "919621199700",
  appId: "1:919621199700:web:304fb97dc3550aabfe8ac1",
  measurementId: "G-F5EK9JNWBE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);