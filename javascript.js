const myLibrary = ["Dandadan", "Sakamoto Days", "Kagurabachi", "Blue Lock", "One Piece", "Chainsaw Man"];

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
    info.textContent = book;

    container.appendChild(info);
  });
}

displayBooks(myLibrary);