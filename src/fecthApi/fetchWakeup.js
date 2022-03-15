import axios from 'axios';
import { URL_API } from './urlApi';

const fetchWakeup = async () => {
  try {
    const { data } = await axios.get(`${URL_API}/wakeup`);
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

export default fetchWakeup;