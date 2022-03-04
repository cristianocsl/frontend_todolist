export const filterAtoZ = (items) => items.sort((a, b) => {
    return (a.task > b.task) ? 1 : ((b.task > a.task) ? -1 : 0);
  });

export const filterZtoA = (items) => items.sort((a, b) => {
    return (a.task > b.task) ? -1 : ((b.task > a.task) ? 1 : 0);
  });

export const filterByDateUp = (items) => items.sort((a, b) => {
    return (a.createdAt > b.createdAt) ? -1 : ((b.createdAt > a.createdAt) ? 1 : 0);
  });

export const filterByDateDown = (items) => items.sort((a, b) => {
    return (a.createdAt > b.createdAt) ? 1 : ((b.createdAt > a.createdAt) ? -1 : 0);
  });

export const filter = {
  AtoZ: filterAtoZ,
  ZtoA: filterZtoA,
  byDateUp: filterByDateUp,
  byDateDown: filterByDateDown,
};
