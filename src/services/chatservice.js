import axios from 'axios';

const URL = 'http://localhost:8080/api/query';

export async function chat(query) {
  const { data } = await axios.post(URL, {
    query,
  });
  return data.response;
}
