import axios from 'axios';

const URL_API = 'http://backent-todolist-01.herokuapp.com/';

const fetchTasks = async () => {
  const token = axios.defaults.headers.common['Authorization'];

  try {
    const { data } = await axios.get(`${URL_API}task`, token);
    axios.defaults.headers['userName'] = data[0].name;

    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

export default fetchTasks;