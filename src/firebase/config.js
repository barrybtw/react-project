import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyA1a9yJfwBMNFJMY_YX-dbUUhceKaZOpQU",
  authDomain: "messenger-react-app-91e7b.firebaseapp.com",
  projectId: "messenger-react-app-91e7b",
  storageBucket: "messenger-react-app-91e7b.appspot.com",
  messagingSenderId: "675939691397",
  appId: "1:675939691397:web:10bf4d2e36db0daebeb2ec",
};

const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
export const auth = getAuth();

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);
  return currentUser;
};
