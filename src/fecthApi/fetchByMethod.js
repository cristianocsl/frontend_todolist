import fetchCreateTask from './fetchCreateTask';
import fetchGetTasks from './fetchGetTasks';
import fetchUserLogin from './fetchUserLogin';
import fetchUserRegister from './fetchUserRegister';


const fetchByMethod = {
    postRegister: fetchUserRegister,
    loginPost: fetchUserLogin,
    fetchAllTasks: fetchGetTasks,
    fetchCreateTask,
};

export default fetchByMethod;