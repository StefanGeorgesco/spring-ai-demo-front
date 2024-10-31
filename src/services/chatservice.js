import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export async function chat(query) {
  const { data } = await axios.post(`${apiBaseUrl}/query`, {
    query,
  });
  return data;
}
