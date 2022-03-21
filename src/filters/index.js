export const filterAtoZ = (items) => items.sort((a, b) => {
    return (a.task > b.task) ? 1 : ((b.task > a.task) ? -1 : 0);
  });

export const filterZtoA = (items) => items.sort((a, b) => {
    return (a.task > b.task) ? -1 : ((b.task > a.task) ? 1 : 0);
  });

export const filterByNewDate = (items) => items.sort((a, b) => {
    return (a.createdAt > b.createdAt) ? -1 : ((b.createdAt > a.createdAt) ? 1 : 0);
  });

export const filterByOldDate = (items) => items.sort((a, b) => {
    return (a.createdAt > b.createdAt) ? 1 : ((b.createdAt > a.createdAt) ? -1 : 0);
  });

export const filterByStatus = (tasksList, statusRef) => tasksList.filter(({ status }) => status === statusRef);


export const filter = {
  AtoZ: filterAtoZ,
  ZtoA: filterZtoA,
  byNewDate: filterByNewDate,
  byOldDate: filterByOldDate,
  byStatus: filterByStatus,
};

const pendingTrue = ({ setRenderPending, setRenderTodo, setRenderDone }) => {
  setRenderPending(true);
  setRenderTodo(false);
  setRenderDone(false);
};

const todoTrue = ({ setRenderPending, setRenderTodo, setRenderDone }) => {
  setRenderPending(false);
  setRenderTodo(true);
  setRenderDone(false);
};

const doneTrue = ({ setRenderPending, setRenderTodo, setRenderDone }) => {
  setRenderPending(false);
  setRenderTodo(false);
  setRenderDone(true);
};

export const showOnly = {
  pendingTrue,
  todoTrue,
  doneTrue,
};
