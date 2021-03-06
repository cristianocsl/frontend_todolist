import axios from 'axios';
import { URL_API } from './urlApi';

const fetchUpdateTask = async (id, task) => {
  const token = axios.defaults.headers.common['Authorization'];

  try {
    await axios.put(`${URL_API}/task/${id}`, task, token);

    return { message: 'Task successfully updated!'};
  } catch (error) {
    return error.response.data.message;
  }
};

export default fetchUpdateTask;