// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmzvTZIAyOvGKPlpAZ_yAPWglq4Q7YFM0",
  authDomain: "portfolio-contact-e7b12.firebaseapp.com",
  projectId: "portfolio-contact-e7b12",
  storageBucket: "portfolio-contact-e7b12.appspot.com",
  messagingSenderId: "453395457533",
  appId: "1:453395457533:web:7e5f354724244dfbabe594",
  measurementId: "G-M9RDK60LDK"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);