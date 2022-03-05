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

export const showByStatus = () => {};

export const filter = {
  AtoZ: filterAtoZ,
  ZtoA: filterZtoA,
  byNewDate: filterByNewDate,
  byOldDate: filterByOldDate,
  byStatus: showByStatus
};
