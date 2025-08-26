import { auth } from './firebase.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { showToast } from './toast.js';

export function getFirebaseErrorMessage(code) {
  switch (code) {
    case 'auth/user-not-found':
      return 'Usuário não encontrado';
    case 'auth/wrong-password':
      return 'Senha inválida';
    default:
      return 'Erro ao fazer login';
  }
}

const form = document.getElementById('loginForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = form.email.value;
  const password = form.password.value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = 'dashboard.html';
  } catch (err) {
    showToast(getFirebaseErrorMessage(err.code), 'error');
    console.error(err);
  }
});
