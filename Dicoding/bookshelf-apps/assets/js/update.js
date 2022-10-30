const addToRead = (bookElement) => {
  const bookCompleted = document.getElementById("completeBookshelfList");

  const book = findBook(bookElement[BOOK_ITEMID]);
  const bookTitle = book.bookTitle;
  const bookAuthor = book.bookAuthor;
  const bookYear = book.bookYear;
  book.isCompleted = true;
  const newBook = makeBook(bookTitle, bookAuthor, bookYear, true);
  newBook[BOOK_ITEMID] = book.id;
  bookCompleted.append(newBook);
  bookElement.remove();

  updateDataToStorage();
};

const addToUnread = (bookElement) => {
  const listUncompleted = document.getElementById("incompleteBookshelfList");
  const book = findBook(bookElement[BOOK_ITEMID]);
  const bookTitle = book.bookTitle;
  const bookAuthor = book.bookAuthor;
  const bookYear = book.bookYear;
  book.isCompleted = false;
  const newBook = makeBook(bookTitle, bookAuthor, bookYear, false);
  newBook[BOOK_ITEMID] = book.id;

  listUncompleted.append(newBook);
  bookElement.remove();

  updateDataToStorage();
};

const findBook = (bookId) => {
  for (book of bookStorage) {
    if (book.id === bookId) {
      return book;
    }
  }

  return null;
};
