export const constants = {
  apiUrl: import.meta.env.VITE_API,
  getHeaders: (token) => ({ Authorization: `Bearer ${token}` }),
};
