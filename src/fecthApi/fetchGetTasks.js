import axios from 'axios';
import { URL_API } from './urlApi';

const fetchGetTasks = async () => {
  const tokenLocalStorage = JSON.parse(localStorage.getItem('token'));
  const token = axios.defaults.headers.common['Authorization'] || tokenLocalStorage;

  try {
    const { data } = await axios.get(`${URL_API}/task`, token);

    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

export default fetchGetTasks;