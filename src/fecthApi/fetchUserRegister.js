import axios from 'axios';
import { URL_API } from './urlApi';

const fetchUserRegister = async (userData) => {
  try {
    const { data } = await axios.post(`${URL_API}/register`, userData);
    axios.defaults.headers.common['Authorization'] = data.token;
    axios.defaults.headers['userName'] = data.name;

    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

export default fetchUserRegister;