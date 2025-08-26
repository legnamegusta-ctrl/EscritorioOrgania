import { jest } from '@jest/globals';

const signOutMock = jest.fn();
const showToast = jest.fn();

jest.unstable_mockModule('https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js', () => ({
  onAuthStateChanged: jest.fn(),
  signOut: signOutMock
}));

jest.unstable_mockModule('../js/firebase.js', () => ({
  auth: {},
  db: {}
}), { virtual: true });

jest.unstable_mockModule('../js/toast.js', () => ({ showToast }), { virtual: true });

const { handleSignOut } = await import('../js/check-auth.js');

test('handleSignOut shows error toast', async () => {
  signOutMock.mockRejectedValueOnce(new Error('fail'));
  await handleSignOut();
  expect(showToast).toHaveBeenCalledWith('Falha ao sair', 'error');
});
