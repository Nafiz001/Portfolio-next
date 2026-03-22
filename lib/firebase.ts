import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBThc1faW-XxFtbCU1qaL5Q7tj9WzIUAyQ",
  authDomain: "portfolio-d090a.firebaseapp.com",
  projectId: "portfolio-d090a",
  storageBucket: "portfolio-d090a.firebasestorage.app",
  messagingSenderId: "129300418665",
  appId: "1:129300418665:web:a8c91465d06f082646d2f8"
};

// Initialize Firebase securely (preventing double initialization in Next.js dev server)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage };
