import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDx5c_q47EbYH33foyRIDozLGEggPgm30Y",
  authDomain: "financly-9bf98.firebaseapp.com",
  projectId: "financly-9bf98",
  storageBucket: "financly-9bf98.appspot.com",
  messagingSenderId: "635362668608",
  appId: "1:635362668608:web:1215d5e30a1acfbf266fa5",
  measurementId: "G-VPNZ5RR7FY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
