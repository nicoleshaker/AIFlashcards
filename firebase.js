import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "key",
    authDomain: "key",
    projectId: "key",
    storageBucket: "key",
    messagingSenderId: "key",
    appId: "key",
    measurementId: "key"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
export default db;