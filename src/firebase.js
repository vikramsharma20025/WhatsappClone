// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJOBXoyAjiAEfRwlLSnIHihiZShKxoPe0",
  authDomain: "whatsapp-clone-efdce.firebaseapp.com",
  projectId: "whatsapp-clone-efdce",
  storageBucket: "whatsapp-clone-efdce.appspot.com",
  messagingSenderId: "250273962046",
  appId: "1:250273962046:web:6dae1c2ea28420fc7ad96f",
  measurementId: "G-BE2TM9ZLXQ"
};

// Initialize Firebase firebase.app.  firebase.analytics.
const app = firebase.initializeApp(firebaseConfig);
// const analytics = firebase.analytics.getAnalytics(app);

const db = app.firestore();
const auth = firebase.auth();
const provider = new GoogleAuthProvider();

export { auth,provider };
export default db;