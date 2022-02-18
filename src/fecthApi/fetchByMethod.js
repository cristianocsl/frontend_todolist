import fetchTasks from './fetchTasks';
import fetchUserLogin from './fetchUserLogin';
import fetchUserRegister from './fetchUserRegister';


const fetchByMethod = {
    postRegister: fetchUserRegister,
    loginPost: fetchUserLogin,
    fetchAllTasks: fetchTasks,
};

export default fetchByMethod;