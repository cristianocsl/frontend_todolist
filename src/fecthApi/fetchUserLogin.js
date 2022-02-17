import axios from 'axios';

const URL_API = 'https://backent-todolist-01.herokuapp.com/';

const fetchUserLogin = async (userData) => {

  try {
    const { data } = await axios.post(`${URL_API}login`, userData/* , {
      headers: { Authorization: token },
    } */);
    console.log('data', data);
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

export default fetchUserLogin;