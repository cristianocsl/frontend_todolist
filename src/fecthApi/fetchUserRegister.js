import axios from 'axios';

const URL_API = 'http://backent-todolist-01.herokuapp.com/';

const fetchUserRegister = async (userData) => {
  try {
    const { data } = await axios.post(`${URL_API}user`, userData);
    console.log('data', data);
    axios.defaults.headers.common['Authorization'] = data.token;
    axios.defaults.headers['userName'] = data.name;

    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

export default fetchUserRegister;