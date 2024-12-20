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
const submitBtn = document.querySelector("#addBook")

function Book(title, author, chapters, read) {
  this.title = title;
  this.author = author;
  this.chapters = chapters;
  this.read = read;
}

function addBookToLibrary() {
  event.preventDefault();

  const title = document.querySelector('#bookTitle').value;
  const author = document.querySelector('#bookAuthor').value;
  const chapters = parseInt(document.querySelector('#bookChapters').value);
  const read = document.querySelector('#bookRead').checked;
  
  const newBook = new Book(title, author, chapters, read);

  myLibrary.push(newBook);

  displayBooks(myLibrary);
  dialog.close();
}

function displayBooks(myLibrary) {
  const container =document.querySelector('.container');
  container.innerHTML = '';

  myLibrary.forEach(book => {
    const bookInfo = document.createElement('div');
    bookInfo.classList.add("book-card")

    if (book.read) {
      bookInfo.style.boxShadow = "0 0 8px 1px var(--accent)"; 
    }

    const titleElement = document.createElement('h3');
    titleElement.textContent = book.title;

    const authorElement = document.createElement('p');
    authorElement.textContent = book.author;

    const numOfChapters = document.createElement('p');
    numOfChapters.textContent = `${book.chapters} Chapters`;

    const readCheckbox = document.createElement('input');
    readCheckbox.type = 'checkbox';
    readCheckbox.checked = book.read; // Set the checkbox checked based on the book's read status
    
    const readLabel = document.createElement('label');
    readLabel.textContent = "Read";
    readLabel.appendChild(readCheckbox);

    readCheckbox.addEventListener('change', () => {
      book.read = readCheckbox.checked; // Update the book's read status

      // Change the box shadow based on the checkbox state
      if (book.read) {
        bookInfo.style.boxShadow = "0 0 8px 1px var(--accent)"; // Add glow effect if read
      } else {
        bookInfo.style.boxShadow = "none"; // Remove glow effect if not read
      }
    });

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn')
    removeBtn.textContent = "Remove";

    removeBtn.addEventListener('click', () => {
      container.removeChild(bookInfo); 
    });

    bookInfo.appendChild(removeBtn);
    bookInfo.appendChild(titleElement);
    bookInfo.appendChild(authorElement);
    bookInfo.appendChild(numOfChapters);
    bookInfo.appendChild(readLabel);
    container.appendChild(bookInfo);
  });
}

//Initialize buttons
submitBtn.addEventListener('click', addBookToLibrary);

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