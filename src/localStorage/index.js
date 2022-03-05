export const setTokenInAxios = async (axios) => {
  const tokenLocalStorage = JSON.parse(localStorage.getItem('token'));
  const userName = JSON.parse(localStorage.getItem('userName'));
  axios.defaults.headers.common['Authorization'] = tokenLocalStorage;
  axios.defaults.headers['userName'] = userName;

};

export const getUserName = () => JSON.parse(
  localStorage.getItem('userName')
  );
