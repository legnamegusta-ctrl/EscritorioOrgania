import { jest } from '@jest/globals';

document.body.innerHTML = '<form id="loginForm"></form>';

jest.unstable_mockModule('../public/js/firebase.js', () => ({
  auth: {}
}), { virtual: true });

const { getFirebaseErrorMessage } = await import('../public/js/auth.js');

describe('getFirebaseErrorMessage', () => {
  test('maps user-not-found', () => {
    expect(getFirebaseErrorMessage('auth/user-not-found')).toBe('Usuário não encontrado');
  });
  test('maps wrong-password', () => {
    expect(getFirebaseErrorMessage('auth/wrong-password')).toBe('Senha inválida');
  });
  test('maps default', () => {
    expect(getFirebaseErrorMessage('other')).toBe('Erro ao fazer login');
  });
});
