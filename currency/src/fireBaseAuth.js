import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6tJSJ9nwfpqoXGZ601gf7p7jEarGUm8s",
  authDomain: "currency-6570b.firebaseapp.com",
  projectId: "currency-6570b",
  storageBucket: "currency-6570b.firebasestorage.app",
  messagingSenderId: "413288464803",
  appId: "1:413288464803:web:eb16c322b0087d88e95a16",
  measurementId: "G-S0D97KDLR5",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
