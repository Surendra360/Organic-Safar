const API_URL = 'http://localhost:9099';

export const getAPIStatus = async () => {
  const response = await fetch(`${API_URL}/`);
  const data = await response.text();
  return data;
};