import axios from 'axios';
import { URL_API } from './urlApi';

const fetchUserRegister = async (userData) => {
  try {
    const { data } = await axios.post(`${URL_API}/user`, userData);
    axios.defaults.headers.common['Authorization'] = data.token;
    axios.defaults.headers['userName'] = data.name;

    return { ...data, message: 'User successfully registered! You will be redirected to login page!' };
  } catch (error) {
    return error.response.data.message;
  }
};

export default fetchUserRegister;