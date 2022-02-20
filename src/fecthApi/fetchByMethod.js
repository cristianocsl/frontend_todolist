import fetchGetTasks from './fetchGetTasks';
import fetchUserLogin from './fetchUserLogin';
import fetchUserRegister from './fetchUserRegister';


const fetchByMethod = {
    postRegister: fetchUserRegister,
    loginPost: fetchUserLogin,
    fetchAllTasks: fetchGetTasks,
};

export default fetchByMethod;