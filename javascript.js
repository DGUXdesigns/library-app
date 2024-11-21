const myLibrary = [
  "Dandadan", 
  "Sakamoto Days", 
  "Kagurabachi", 
  "Blue Lock", 
  "One Piece", 
  "Chainsaw Man"
];
const addButton = document.querySelector("#showDialog");
const dialog = document.querySelector("dialog");

function Book() {
  // the constructor...
}

function addBookToLibrary(newBook) {
  return myLibrary.push(newBook)
}

function displayBooks(myLibrary) {
  const container =document.querySelector('.container');

  myLibrary.forEach(book => {
    const info = document.createElement('div');
    info.classList.add("book-card")
    info.textContent = book;

    container.appendChild(info);
  });
}

//Initialize buttons
addButton.addEventListener("click", () => {
  dialog.showModal();
})






displayBooks(myLibrary);