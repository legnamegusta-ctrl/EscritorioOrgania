import { auth, db } from './firebase.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { showToast } from './toast.js';

const MODULES = [
  { id: 'financeiro', label: 'Financeiro', url: 'modules/financeiro/index.html' },
  { id: 'suprimentos-logistica', label: 'Suprimentos / Logística', url: 'modules/suprimentos-logistica/index.html' },
  { id: 'comercial', label: 'Comercial', url: 'modules/comercial/index.html' },
  { id: 'producao', label: 'Produção', url: 'modules/producao/index.html' },
  { id: 'agronomico', label: 'Agronômico', url: 'modules/agronomico/index.html' },
  { id: 'escritorio', label: 'Escritório', url: 'modules/escritorio/index.html' },
  { id: 'fazenda', label: 'Fazenda', url: 'modules/fazenda/index.html' },
  { id: 'rh', label: 'RH', url: 'modules/rh/index.html' },
  { id: 'cadastros', label: 'Cadastros', url: 'modules/cadastros/index.html' },
  { id: 'admin', label: 'Admin', url: 'modules/admin/index.html' }
];

const ROLE_PERMISSIONS = {
  admin: MODULES.map((m) => m.id),
  financeiro: ['financeiro'],
  'suprimentos-logistica': ['suprimentos-logistica'],
  comercial: ['comercial'],
  producao: ['producao'],
  agronomico: ['agronomico'],
  escritorio: ['escritorio'],
  fazenda: ['fazenda'],
  rh: ['rh'],
  cadastros: ['cadastros']
};

async function getUserRole(uid) {
  try {
    const snap = await getDoc(doc(db, 'users', uid));
    return snap.exists() ? snap.data().role : null;
  } catch {
    showToast('Erro ao carregar permissões', 'error');
    return null;
  }
}

function renderDashboard(role) {
  const nav = document.getElementById('modules-nav');
  if (!nav) return;
  const allowed = ROLE_PERMISSIONS[role] || [];
  const list = document.createElement('ul');
  list.className = 'space-y-2';
  MODULES.forEach((m) => {
    if (allowed.includes(m.id)) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = m.url;
      a.textContent = m.label;
      li.appendChild(a);
      list.appendChild(li);
    }
  });
  nav.appendChild(list);
}

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = 'index.html';
    return;
  }
  const role = await getUserRole(user.uid);
  const moduleId = document.body.dataset.module;
  if (moduleId) {
    const allowed = ROLE_PERMISSIONS[role] || [];
    if (!allowed.includes(moduleId)) {
      window.location.href = '../../dashboard.html';
    }
  } else {
    renderDashboard(role);
  }
});

export async function handleSignOut() {
  try {
    await signOut(auth);
  } catch {
    showToast('Falha ao sair', 'error');
  }
}

const logoutBtn = document.getElementById('logout');
if (logoutBtn) {
  logoutBtn.addEventListener('click', handleSignOut);
}
