import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "nextjschat-5238d.firebaseapp.com",
  projectId: "nextjschat-5238d",
  storageBucket: "nextjschat-5238d.firebasestorage.app",
  messagingSenderId: "1065667923525",
  appId: "1:1065667923525:web:bdeb71c0fd542013b5dd2c"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
