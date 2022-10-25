const BOOK_ITEMID = "itemId";

const completedBook = document.getElementById("completeBookshelfList");
const uncompletedBook = document.getElementById("incompleteBookshelfList");

// OK
document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("inputBook");
  const inputBookIsComplete = document.getElementById("inputBookIsComplete");

  inputBookIsComplete.addEventListener("change", function (event) {
    event.preventDefault();
    const isChecked = document.getElementById("inputBookIsComplete").checked;
    const btn = document.querySelector("#bookSubmit > span");
    btn.innerHTML = isChecked ? "Selesai dibaca" : "Belum selesai dibaca";
  });

  submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addBook();
  });

  if (checkStorage()) {
    loadDatafromStorage();
  }
});

// Even Status to console
document.addEventListener("ondatasaved", () => {
  alert("Data berhasil disimpan.");
  console.log("Data berhasil disimpan.");
});

document.addEventListener("ondataloaded", () => {
  console.log("Data berhasil dimuat.");
  refreshDataFromBooks();
});
