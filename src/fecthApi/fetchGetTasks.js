import axios from 'axios';
import { URL_API } from './urlApi';

const fetchGetTasks = async () => {
  try {
    const { data } = await axios.get(`${URL_API}/task`);

    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

export default fetchGetTasks;