// Storage Section
const STORAGE_KEY = "BOOKSHELF";
let bookStorage = [];

const checkStorage = () => {
  if (typeof Storage == undefined) {
    alert("Your Browser not support storage");
    return false;
  }
  return true;
};

const updateDataToStorage = () => {
  if (checkStorage()) {
    saveData();
  }
};

const saveData = () => {
  const parseData = JSON.stringify(bookStorage);
  localStorage.setItem(STORAGE_KEY, parseData);
  document.dispatchEvent(new Event("ondatasaved"));
};
