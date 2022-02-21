import axios from 'axios';
import { URL_API } from './urlApi';

const fetchCreateTask = async (task) => {
  const token = axios.defaults.headers.common['Authorization'];

  try {
    const { data } = await axios.post(`${URL_API}/task`, task, {
      headers: { Authorization: token },
    });

    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

export default fetchCreateTask;