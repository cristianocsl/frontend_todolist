import axios from 'axios';

const URL_API = 'https://backent-todolist-01.herokuapp.com/';

const fetchUserRegister = async (userData) => {
  try {
    const { data } = await axios.post(`${URL_API}user`, userData);

    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

export default fetchUserRegister;