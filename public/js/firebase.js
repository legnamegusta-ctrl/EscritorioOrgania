import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

// TODO: replace with your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT_cP4Q6Zq4RLGv17YZmpJLz7DsebKfoE",
  authDomain: "organiaescritorio.firebaseapp.com",
  projectId: "organiaescritorio",
  storageBucket: "organiaescritorio.firebasestorage.app",
  messagingSenderId: "388567715549",
  appId: "1:388567715549:web:a75cb42c7f71b1ede75534"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
