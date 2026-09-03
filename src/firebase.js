import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuqTCdnrzWvZXZKmaeG4hpJbHDrxG20rs",
  authDomain: "portfolio-ed72a.firebaseapp.com",
  projectId: "portfolio-ed72a",
  storageBucket: "portfolio-ed72a.firebasestorage.app",
  messagingSenderId: "906680679054",
  appId: "1:906680679054:web:cd3914c337d8b1c21f27df",
  measurementId: "G-YR41FBKKJ7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
