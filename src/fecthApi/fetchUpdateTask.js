import axios from 'axios';

const URL_API = 'http://backent-todolist-01.herokuapp.com';

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