import axios from 'axios';

const URL_API = 'http://backent-todolist-01.herokuapp.com/';

const fetchUserRegister = async (userData) => {
  try {
    const { data } = await axios.post(`${URL_API}user`, userData);
    axios.defaults.headers.common['Authorization'] = data.token;
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

export default fetchUserRegister;