import axios from 'axios';

const URL_API = 'https://backent-todolist-01.herokuapp.com/';

const fetchUserRegister = async (userData) => {
  try {
    const response = await axios.post(`${URL_API}/user`, userData);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export default fetchUserRegister;