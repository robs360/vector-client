// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1HDEPVMhOOM6Fo2oUrZuNO7Xmqfn7pHg",
  authDomain: "vector-flex.firebaseapp.com",
  projectId: "vector-flex",
  storageBucket: "vector-flex.appspot.com",
  messagingSenderId: "1087726597396",
  appId: "1:1087726597396:web:46c9c1d7d599120c807e01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app