import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyChSdVRhC2VvR1RYIAaWvgY44ILNx-gKhs",
  authDomain: "techgrab-react-redux-fb.firebaseapp.com",
  projectId: "techgrab-react-redux-fb",
  storageBucket: "techgrab-react-redux-fb.appspot.com",
  messagingSenderId: "489245752918",
  appId: "1:489245752918:web:09a368e08389bd225485f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
