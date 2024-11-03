// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBipQh9POJoZ6bEJLbl2g76OdZOA_hhDkQ",
    authDomain: "ecommerce-5ca2b.firebaseapp.com",
    projectId: "ecommerce-5ca2b",
    storageBucket: "ecommerce-5ca2b.firebasestorage.app",
    messagingSenderId: "907642829965",
    appId: "1:907642829965:web:f8352a53ce6b54d7ba76c4",
    measurementId: "G-42VG7DVN9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app);

export { auth, firestore, analytics, storage }