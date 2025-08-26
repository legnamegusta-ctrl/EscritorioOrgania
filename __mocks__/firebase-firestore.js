export const doc = () => {};
export const getDoc = () => Promise.resolve({ exists: () => false, data: () => ({}) });
