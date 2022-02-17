import fetchUserLogin from './fetchUserLogin';
import fetchUserRegister from './fetchUserRegister';


const fetchByMethod = {
    postRegister: fetchUserRegister,
    loginPost: fetchUserLogin,
};

export default fetchByMethod;