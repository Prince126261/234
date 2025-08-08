// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// Your config
const firebaseConfig = {
  apiKey: "AIzaSyBlX7T5Zl8ZGTq4Nm94U3zugwWhdzJGgCY",
  authDomain: "insta-71550.firebaseapp.com",
  projectId: "insta-71550",
  storageBucket: "insta-71550.appspot.com",
  messagingSenderId: "759982001640",
  appId: "1:759982001640:web:e0bb5ff12f64fecb6e285d",
  measurementId: "G-Q0NQQC6XBT"
};

// Initialize
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Export
export { db, auth, storage, analytics };
