import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDhKVVshUFvvS3SE2UnaB6ZQqqqvCbSGgA",
    authDomain: "ai-flashcards-e09c7.firebaseapp.com",
    projectId: "ai-flashcards-e09c7",
    storageBucket: "ai-flashcards-e09c7.appspot.com",
    messagingSenderId: "717018758239",
    appId: "1:717018758239:web:6e1a599454009b776aefea",
    measurementId: "G-15NX5C58MV"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
export default db;