
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-GQ40Py0WsaXlcCLxYRfb2MNBQbD_TU4",
  authDomain: "ecommerce-reactjs-proyecto.firebaseapp.com",
  projectId: "ecommerce-reactjs-proyecto",
  storageBucket: "ecommerce-reactjs-proyecto.appspot.com",
  messagingSenderId: "881714641630",
  appId: "1:881714641630:web:64e00a71c06020ee18e04f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore( app)