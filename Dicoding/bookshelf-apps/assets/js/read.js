const loadDatafromStorage = () => {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  const data = JSON.parse(serializedData);
  if (data !== null) bookStorage = data;
  document.dispatchEvent(new Event("ondataloaded"));
};

const refreshDataFromBooks = () => {
  const bookUncompleted = document.getElementById("incompleteBookshelfList");
  let bookCompleted = document.getElementById("completeBookshelfList");

  for (book of bookStorage) {
    const newBook = makeBook(
      book.bookTitle,
      book.bookAuthor,
      book.bookYear,
      book.isCompleted
    );
    newBook[BOOK_ITEMID] = book.id;

    if (book.isCompleted) {
      bookCompleted.append(newBook);
    } else {
      bookUncompleted.append(newBook);
    }
  }
};
