const bigDiv = document.querySelector('.big-div');

let myLibrary = [
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: '1937',
    status: 'read'
  },
  {
    title: 'The Martian',
    author: 'Andy Weir',
    year: '2011',
    status: 'read'
  }
]

function book(title, author, year, status) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.status = status;
  }


function addBookToLibrary(title, author, year, status) {
  let newBook = new book(title, author, year, status);
  myLibrary.push(newBook);
}

function render() {
  for (i=0; i < myLibrary.length; i++) {
    let card = document.createElement('div');
    card.classList.add('card');
    bigDiv.appendChild(card);

    let cardTitle = document.createElement('div');
    let cardAuthor = document.createElement('div');
    let cardYear = document.createElement('div');
    let cardStatus = document.createElement('div');

    cardTitle.classList.add('title');
    cardAuthor.classList.add('author');
    cardYear.classList.add('year');
    cardStatus.classList.add('status');

    cardTitle.innerHTML = myLibrary[i].title;
    cardAuthor.innerHTML = myLibrary[i].author;
    cardYear.innerHTML = myLibrary[i].year;
    cardStatus.innerHTML = myLibrary[i].status;

    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardYear);
    card.appendChild(cardStatus);

  }
}

render();
