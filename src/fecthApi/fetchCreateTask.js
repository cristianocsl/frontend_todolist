import axios from 'axios';



const URL_API = 'https://backend-todo-list-cristiano.herokuapp.com';

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