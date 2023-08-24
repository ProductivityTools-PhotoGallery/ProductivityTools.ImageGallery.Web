import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs-NOPCNyoWRVTd-KqzgQcSgw3lZ-pLgY",
  authDomain: "ptphotogalleryprod-396720.firebaseapp.com",
  projectId: "ptphotogalleryprod-396720",
  storageBucket: "ptphotogalleryprod-396720.appspot.com",
  messagingSenderId: "595720982803",
  appId: "1:595720982803:web:750f3b7d288d572144cae6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    console.log(res);
    return res.user;
  } catch (err) {
    console.err(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export { signInWithGoogle, signOut,auth };
