const myLibrary = [
  {
    title: "Dandadan",
    author: "Tatsu Yukinobu",
    chapters: 175,
    read: false
  },
  {
    title: "Sakamoto Days",
    author: "Suzuki Yuuto",
    chapters: 189,
    read: true
  },
  {
    title: "Kagurabachi",
    author: "Hokazono Takeru",
    chapters: 61,
    read: true
  },
  {
    title: "One Piece",
    author: "Oda Eiichiro",
    chapters: 1163,
    read: true
  },
  {
    title: "Chainsaw Man",
    author: "Tatsuki Fujimoto",
    chapters: 184,
    read: true
  },   
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
    const bookInfo = document.createElement('div');
    bookInfo.classList.add("book-card")

    const titleElement = document.createElement('h3');
    titleElement.textContent = book.title;

    const authorElement = document.createElement('p');
    authorElement.textContent = book.author;

    const numOfChapters = document.createElement('p');
    numOfChapters.textContent = `${book.chapters} Chapters`;

    bookInfo.appendChild(titleElement);
    bookInfo.appendChild(authorElement);
    bookInfo.appendChild(numOfChapters);
    container.appendChild(bookInfo);
  });
}

//Initialize buttons
addButton.addEventListener("click", () => {
  dialog.showModal();
})

dialog.addEventListener('click', e => {
  const dialogDimensions = dialog.getBoundingClientRect()
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    dialog.close();
  };
})




displayBooks(myLibrary);