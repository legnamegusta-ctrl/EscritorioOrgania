import { jest } from '@jest/globals';

const onAuthStateChanged = jest.fn();
const signOut = jest.fn();
jest.unstable_mockModule('https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js', () => ({
  onAuthStateChanged,
  signOut
}));

const getDoc = jest.fn();
const doc = jest.fn();
jest.unstable_mockModule('https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js', () => ({
  getDoc,
  doc
}));

jest.unstable_mockModule('../public/js/firebase.js', () => ({
  auth: {},
  db: {}
}), { virtual: true });

jest.unstable_mockModule('../public/js/toast.js', () => ({ showToast: jest.fn() }), { virtual: true });

test('renderDashboard handles case-insensitive role', async () => {
  document.body.innerHTML = '<nav id="modules-nav"></nav>';
  onAuthStateChanged.mockImplementation((auth, cb) => cb({ uid: 'u1' }));
  getDoc.mockResolvedValue({ exists: () => true, data: () => ({ role: 'Admin' }) });

  await import('../public/js/check-auth.js');

  const items = document.querySelectorAll('#modules-nav li');
  expect(items.length).toBeGreaterThan(0);
});
