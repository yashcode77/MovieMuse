import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "filmyverse-c8ccb.firebaseapp.com",
  projectId: "filmyverse-c8ccb",
  storageBucket: "filmyverse-c8ccb.appspot.com",
  messagingSenderId: "1097328094613",
  appId: "1:1097328094613:web:4027d7f12774410ca79a9c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;