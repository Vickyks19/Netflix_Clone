import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDHuSoJHsKbyw8JwzLKRVOqkTE7faHO0c",
  authDomain: "netflix-clone-f3946.firebaseapp.com",
  projectId: "netflix-clone-f3946",
  storageBucket: "netflix-clone-f3946.appspot.com",
  messagingSenderId: "1071219421483",
  appId: "1:1071219421483:web:b2646b4674cf3b3b4c956e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { app, auth, db };
