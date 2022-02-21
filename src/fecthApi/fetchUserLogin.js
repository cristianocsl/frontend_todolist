import axios from 'axios';
import { URL_API } from './urlApi';

const fetchUserLogin = async (userData) => {

  try {
    const { data } = await axios.post(`${URL_API}/login`, userData);
    axios.defaults.headers.common['Authorization'] = data.token;
    localStorage.setItem('token', JSON.stringify(data.token));
    axios.defaults.headers['userName'] = data.name;

    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

export default fetchUserLogin;