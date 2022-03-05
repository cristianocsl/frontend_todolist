import fetchCreateTask from './fetchCreateTask';
import fetchGetTasks from './fetchGetTasks';
import fetchUpdateTask from './fetchUpdateTask';
import fetchUserLogin from './fetchUserLogin';
import fetchUserRegister from './fetchUserRegister';
import fetchRemoveTask from './fetchRemoveTask';


const fetchByMethod = {
    postRegister: fetchUserRegister,
    loginPost: fetchUserLogin,
    fetchAllTasks: fetchGetTasks,
    fetchCreateTask,
    fetchUpdateTask,
    fetchRemoveTask,
};

export default fetchByMethod;