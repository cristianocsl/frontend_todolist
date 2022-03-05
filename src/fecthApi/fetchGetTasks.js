import axios from 'axios';
import { URL_API } from './urlApi';

const fetchGetTasks = async () => {
  // const tokenLocalStorage = JSON.parse(localStorage.getItem('token'));
  // const token = axios.defaults.headers.common['Authorization'] || tokenLocalStorage;
  // no momento desse try, a chave axios.defaults.headers.common['Authorization'] será reatribuída no useEffect do TasksComponentes.js com o token do localStorage.
  try {
    const { data } = await axios.get(`${URL_API}/task`);

    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

export default fetchGetTasks;