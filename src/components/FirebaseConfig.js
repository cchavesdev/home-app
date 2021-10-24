// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_2hx1L7K4DP1rFlgGPaln_BLEJSX9t2s",
  authDomain: "home-db-701a9.firebaseapp.com",
  projectId: "home-db-701a9",
  storageBucket: "home-db-701a9.appspot.com",
  messagingSenderId: "300040980853",
  appId: "1:300040980853:web:538c45f9f7220e4fedab3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const homeDb = getFirestore(app);

export default homeDb;