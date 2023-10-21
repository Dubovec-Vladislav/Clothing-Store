export const getSearchStrFromLocalStorage = () => {
  const data = localStorage.getItem("search");
  const searchStr = data ? JSON.parse(data) : "";

  return {
    searchStr,
  };
};
