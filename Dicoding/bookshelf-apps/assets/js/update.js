const addToRead = (bookElement) => {
  const bookCompleted = document.getElementById("completeBookshelfList");

  const bookTitle = bookElement.querySelector("h3").innerText;
  const bookAuthor = bookElement.querySelector("p:nth-child(2)").innerText;
  const bookYear = bookElement.querySelector("p:nth-child(3)").innerText;

  const newBook = makeBook(bookTitle, bookAuthor, bookYear, true);
  const book = findBook(bookElement[BOOK_ITEMID]);
  book.isCompleted = true;
  newBook[BOOK_ITEMID] = book.id;

  bookCompleted.append(newBook);
  bookElement.remove();

  updateDataToStorage();
};

const addToUnread = (bookElement) => {
  const listUncompleted = document.getElementById("incompleteBookshelfList");
  const bookTitle = bookElement.querySelector("h3").innerText;
  const bookAuthor = bookElement.querySelector("p:nth-child(2)").innerText;
  const bookYear = bookElement.querySelector("p:nth-child(3)").innerText;

  const newBook = makeBook(bookTitle, bookAuthor, bookYear, false);
  const book = findBook(bookElement[BOOK_ITEMID]);
  book.isCompleted = false;
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
