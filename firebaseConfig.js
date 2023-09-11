// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVc9j47peUUDxnSRyClke_PWlqyRDTW0M",
  authDomain: "vitepwa.firebaseapp.com",
  projectId: "vitepwa",
  storageBucket: "vitepwa.appspot.com",
  messagingSenderId: "478032229604",
  appId: "1:478032229604:web:f9b0e9b197d236f73de8f1",
  measurementId: "G-NMP5L73YS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);