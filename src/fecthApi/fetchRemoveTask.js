import axios from 'axios';
import { URL_API } from './urlApi';

const fetchRemoveTask = async (id, task) => {
  const token = axios.defaults.headers.common['Authorization'];

  try {
    await axios.delete(`${URL_API}/task/${id}`, task, token);

    return { message: 'Task deleted!'};
  } catch (error) {
    return error.response.data.message;
  }
};

export default fetchRemoveTask;