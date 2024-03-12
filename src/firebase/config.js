import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyCCmBTTDU0lEPvqd_7IsRQZWllzwCwMg8A",

  authDomain: "proj1-e047f.firebaseapp.com",

  projectId: "proj1-e047f",

  storageBucket: "proj1-e047f.appspot.com",

  messagingSenderId: "669610423812",

  appId: "1:669610423812:web:76b7bfa1149892dde1a751",

  measurementId: "G-XNTJ2GVFDK"

};

  



initializeApp(firebaseConfig);

const db = getFirestore();
export default db