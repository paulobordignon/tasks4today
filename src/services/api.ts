import axios from 'axios';

const api = axios.create({
  /* baseURL: `${import.meta.env.VITE_APP_API_URL}`, */
  // PUT URL BECAUSE A OCCUR ERROR DURING JEST TEST EXECUTIONS
  baseURL: 'http://localhost:3001',
});

export default api;
