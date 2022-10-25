const addBook = () => {
  const bookYear = document.getElementById("inputBookYear").value;
  const bookTitle = document.getElementById("inputBookTitle").value;
  const bookAuthor = document.getElementById("inputBookAuthor").value;
  const isCompleted = document.getElementById("inputBookIsComplete").checked;

  // BE data Validate
  if (bookTitle === "") {
    alert("Please fill Book Tittle");
    return;
  }
  if (bookAuthor === "") {
    alert("Please fill Author name");
    return;
  }
  if (bookYear === "") {
    alert("Please fill publication Year");
    return;
  }

  // Check Publish Date
  const d = new Date();
  let year = d.getFullYear();
  if (bookYear > year) {
    alert("Tahun harus Kurang dari " + (year + 1));
    return;
  }

  const bookObject = {
    id: +new Date(),
    bookYear,
    bookTitle,
    bookAuthor,
    isCompleted,
  };
  const book = makeBook(bookTitle, bookAuthor, bookYear, isCompleted);
  book[BOOK_ITEMID] = bookObject.id;
  bookStorage.push(bookObject);

  if (isCompleted) {
    completedBook.append(book);
  } else {
    uncompletedBook.append(book);
  }

  updateDataToStorage();
};

const makeBook = (title, author, year, isCompleted) => {
  const bookTitle = document.createElement("h3");
  bookTitle.innerText = title;

  const authorName = document.createElement("p");
  authorName.innerText = "Penulis: " + author;

  const bookYear = document.createElement("p");
  bookYear.innerText = "Tahun: " + `${year}`;

  const action = document.createElement("div");
  action.classList.add("action");

  if (isCompleted) {
    action.append(createUnreadButton(), createTrashButton());
  } else {
    action.append(createReadButton(), createTrashButton());
  }

  const container = document.createElement("article");
  container.classList.add("book_item");
  container.append(bookTitle, authorName, bookYear, action);

  return container;
};

// Membuat Tombol
const createButton = (buttonTypeClass, buttonText, eventListener) => {
  const button = document.createElement("button");
  button.classList.add(buttonTypeClass);
  button.innerHTML = buttonText;

  button.addEventListener("click", function (event) {
    eventListener(event);
  });
  return button;
};

const createReadButton = () => {
  return createButton("green", "Sudah dibaca", function (event) {
    addToRead(event.target.parentElement.parentElement);
  });
};

const createUnreadButton = () => {
  return createButton("green", "Belum Selesai di Baca", function (event) {
    addToUnread(event.target.parentElement.parentElement);
  });
};

const createTrashButton = () => {
  return createButton("red", "Hapus Buku", function (event) {
    removeBook(event.target.parentElement.parentElement);
  });
};
