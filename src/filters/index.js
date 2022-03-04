export const filterAlphabetically = (items) => {
  const array = items.sort((a, b) => {
    return (a.task > b.task) ? 1 : ((b.task > a.task) ? -1 : 0);
  });

  return array;
};

export const filterByDate = (items) => {
  const array = items.sort((a, b) => {
    return (a.createdAt > b.createdAt) ? -1 : ((b.createdAt > a.createdAt) ? 1 : 0);
  });

  return array;
};

export const filter = {
  alphabetically: filterAlphabetically,
  byDate: filterByDate,
};
