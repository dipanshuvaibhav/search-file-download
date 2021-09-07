// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV3_aRpvi7sky8o6IEJR-VR31Eul-bAM0",
  authDomain: "search-file-download.firebaseapp.com",
  databaseURL: "https://search-file-download-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "search-file-download",
  storageBucket: "search-file-download.appspot.com",
  messagingSenderId: "30789132976",
  appId: "1:30789132976:web:58e83d647a20fb62801175",
  measurementId: "G-SW45RDD8Q5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);