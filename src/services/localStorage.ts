
export const getAll = (storeName: string) => {
  try {
    return JSON.parse(window.localStorage[storeName]);
  } catch (e) {
    return [];
  }
};

export const remove = (storeName: string) => {
  window.localStorage.removeItem(storeName);
};