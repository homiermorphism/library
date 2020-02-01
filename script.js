const cardsDiv = document.querySelector('.cards');

let myLibrary = [
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: '1937',
    genre: 'Fantasy',
    status: 'read'
  },
  {
    title: 'The Martian',
    author: 'Andy Weir',
    year: '2011',
    genre: 'Science Fiction',
    status: 'read'
  }
]

function book(title, author, year, genre, status) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
  this.status = status;
  }


function addBookToLibrary(title, author, year, genre, status) {
  let newBook = new book(title, author, year, genre, status);
  myLibrary.push(newBook);
}

function render() {
  for (i=0; i < myLibrary.length; i++) {
    let card = document.createElement('div');
    card.classList.add('card');
    cardsDiv.appendChild(card);

    let cardImg = document.createElement('div');
    cardImg.classList.add('card-image','waves-effect','waves-block','waves-light');
    card.appendChild(cardImg);

    let img = document.createElement('img');
    img.classList.add('activator');
    if (myLibrary[i].genre === 'Fantasy') {
      img.src = 'images/fantasybook.png';
    }
    else if (myLibrary[i].genre === 'Science Fiction') {
      img.src = 'images/scifi.jpg';
    }
    cardImg.appendChild(img);

    let cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    card.appendChild(cardContent);

    let cardTitle = document.createElement('span');
    cardTitle.classList.add('card-title','activator');
    cardTitle.innerHTML = myLibrary[i].title;
    cardContent.appendChild(cardTitle);
  }
}

render();
