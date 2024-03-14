// First check localStorageData.
export const getDataFromLocalStorage = () => {
  const localStorageData = localStorage.getItem("id");
  if (localStorageData) {
    return JSON.parse(localStorageData);
  } else {
    return [];
  }
};

// SetData to localstorage.
export const setDataToLocalStorage = (id) => {
  const localStorageData = getDataFromLocalStorage();
  if (!localStorageData.includes(id)) {
    localStorageData.push(id);
    localStorage.setItem("id", JSON.stringify(localStorageData));
  }
};
