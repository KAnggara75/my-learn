const removeBook = (bookElement) => {
  const bookPosition = findBookIndex(bookElement[BOOK_ITEMID]);
  console.log(bookPosition);
  bookStorage.splice(bookPosition, 1);
  bookElement.remove();
  updateDataToStorage();
};

const findBookIndex = (bookId) => {
  let index = 0;
  for (book of bookStorage) {
    if (book.id === bookId) {
      return index;
    }
    index++;
  }
  return -1;
};
