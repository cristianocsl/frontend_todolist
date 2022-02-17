import fetchUserLogin from './fetchUserLogin';
import fetchUserRegister from './fetchUserRegister';


const fetchByMethod = async(method, content) => {
  
  const functionMap = {
    postRegister: await fetchUserRegister(content),
    postLogin: await fetchUserLogin(content)
  };
  
  return functionMap[method];

};

export default fetchByMethod;