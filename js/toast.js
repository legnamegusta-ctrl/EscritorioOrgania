export function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.className = `fixed top-4 right-4 px-4 py-2 rounded shadow text-white ${
    type === 'error' ? 'bg-red-500' : 'bg-green-500'
  }`;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}
