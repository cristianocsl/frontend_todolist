const filterAlphabetically = (items) => {
  const array = items.sort((a, b) => {
    return (a.task > b.task) ? 1 : ((b.task > a.task) ? -1 : 0);
  });
  
  return array;
};

export default filterAlphabetically;
