import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/ideas',
});

export const submitIdea = async (prompt: string) => {
  try {
    const response = await api.post('/', { prompt });
    return response.data;
  } catch (error) {
    console.error('Error submitting idea:', error);
    throw error;
  }
};

export const fetchIdeas = async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    console.error('Error fetching ideas:', error);
    throw error;
  }
};