import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA1a9yJfwBMNFJMY_YX-dbUUhceKaZOpQU",
  authDomain: "messenger-react-app-91e7b.firebaseapp.com",
  projectId: "messenger-react-app-91e7b",
  storageBucket: "messenger-react-app-91e7b.appspot.com",
  messagingSenderId: "675939691397",
  appId: "1:675939691397:web:10bf4d2e36db0daebeb2ec",
};

const app = initializeApp(firebaseConfig);

export const auth = GoogleAuthProvider();
