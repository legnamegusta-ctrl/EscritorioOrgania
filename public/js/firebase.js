import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

// TODO: replace with your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB0l95P05wQcbJhrw5qqvyToihwlVZ-Us",
  authDomain: "agropecuaria3l-b9bcc.firebaseapp.com",
  projectId: "agropecuaria3l-b9bcc",
  storageBucket: "agropecuaria3l-b9bcc.firebasestorage.app",
  messagingSenderId: "91137815308",
  appId: "1:91137815308:web:c247c909fb1f793b270f29"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
