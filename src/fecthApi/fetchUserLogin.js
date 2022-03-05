import axios from 'axios';
import { URL_API } from './urlApi';

const fetchUserLogin = async (userData) => {

  try {
    const { data } = await axios.post(`${URL_API}/login`, userData);
    axios.defaults.headers.common['Authorization'] = data.token;
    localStorage.setItem('token', JSON.stringify(data.token));
    localStorage.setItem('userName', JSON.stringify(data.name));
    
    return { ...data, message: 'User successfully login!' };
  } catch (error) {
    return error.response.data.message;
  }
};

export default fetchUserLogin;