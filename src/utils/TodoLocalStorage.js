
export const getLocalStorageData = () => {
  const data = localStorage.getItem('data');
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  } 
}

export const setLocalStorageData = (data) => {
  return localStorage.setItem('data', JSON.stringify(data));
}