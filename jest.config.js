export default {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^https://www\\.gstatic\\.com/firebasejs/10\\.4\\.0/firebase-auth\\.js$': '<rootDir>/__mocks__/firebase-auth.js',
    '^https://www\\.gstatic\\.com/firebasejs/10\\.4\\.0/firebase-firestore\\.js$': '<rootDir>/__mocks__/firebase-firestore.js'
  }
};
