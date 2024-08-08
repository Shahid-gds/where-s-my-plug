
import axios from 'axios';
import { useApi } from '@/components/api/useApi';

const { getApiUrl } = useApi();
const apiUrl = getApiUrl();

export const logoutApi = async () => {
  try {
    const response = await axios.get(`${apiUrl}/users/logout`); 
    return response.data;
  } catch (error) {
    console.error('Logout failed', error);
    throw error;
  }
};