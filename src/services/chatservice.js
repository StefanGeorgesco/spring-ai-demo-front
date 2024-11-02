import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export async function analystChat(query) {
  const { data } = await axios.post(`${apiBaseUrl}/data-analyst`, {
    query,
  });
  return data;
}

export async function RAGChat(query) {
  const { data } = await axios.post(`${apiBaseUrl}/rag`, {
    query,
  });
  return data;
}
