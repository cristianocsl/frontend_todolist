import fetchUserRegister from './fetchUserRegister';

const fetchByMethod = async(method, content) => {
  
  const functionMap = {
    postRegister: await fetchUserRegister(content),
  };
  
  return functionMap[method];

};

export default fetchByMethod;