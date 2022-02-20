import axios from 'axios';

const URL_API = 'http://backent-todolist-01.herokuapp.com';

const fetchCreateTasks = async (task) => {
  const token = axios.defaults.headers.common['Authorization'];

  try {
    const { data } = await axios.post(`${URL_API}/task`, task, token);

    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

export default fetchCreateTasks;