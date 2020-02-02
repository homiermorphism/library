const cardsDiv = document.querySelector('.cards');
const newBookForm = document.querySelector('.form');

const newBookButton = document.getElementById('new-book');
const cancelButton = document.getElementById('cancel');
const submitButton = document.getElementById('submit');

const formBackground = document.querySelector('.form-bg');
const formTitle = document.getElementById('title');
const formAuthor = document.getElementById('author');
const formYear = document.getElementById('year');
const formGenre = document.getElementById('genre');
const formStatus = document.getElementById('status');

let loadedLibrary = [];
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
  },
  {
    title: 'Abstract Algebra',
    author: 'Dummit and Foote',
    year: '2004',
    genre: 'Textbook',
    status: 'read'
  },
  {
    title: 'Go Web Programming',
    author: 'Sau Sheong Chang',
    year: '2016',
    genre: 'Textbook',
    status: 'unread'
  },
  {
    title: 'Go in Practice',
    author: 'Butcher and Farina',
    year: '2016',
    genre: 'Textbook',
    status: 'unread'
  }
]

function book(title, author, year, genre, status) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
  this.status = status;
}

newBookButton.addEventListener('click', showForm);
formBackground.addEventListener('click', hideForm);
cancelButton.addEventListener('click', hideForm);
submitButton.addEventListener('click', submit);

function showForm() {
  newBookForm.style.display = 'block';
  formBackground.style.display = 'block';
  newBookForm.style.left = ((window.innerWidth / 2) -
                            (newBookForm.offsetWidth / 2)) + "px";
}

function hideForm() {
  newBookForm.style.display = 'none';
  formBackground.style.display = 'none';
}

function submit() {
  let title = formTitle.value;
  let author = formAuthor.value;
  let year = formYear.value;
  let genre = formGenre.value;
  let status = formStatus.value;
  newBookToLibrary(title, author, year, genre, status);

  formTitle.value = '';
  formAuthor.value = '';
  formYear.value = '';
  formGenre.value = '';
  formStatus.value = '';

  hideForm();
  render();
}

function newBookToLibrary(title, author, year, genre, status) {
  let newBook = new book(title, author, year, genre, status);
  myLibrary.push(newBook);
}

function render() {
  for (i=0; i < myLibrary.length; i++) {
    if (loadedLibrary.includes(myLibrary[i])) {
      continue;
    }
    else {
      let card = document.createElement('div');
      card.classList.add('card', 'medium');
      cardsDiv.appendChild(card);

      let cardContent = document.createElement('div');
      cardContent.classList.add('card-content');
      card.appendChild(cardContent);

      let cardTitle = document.createElement('span');
      cardTitle.classList.add('card-title');
      cardTitle.innerHTML = myLibrary[i].title;
      cardContent.appendChild(cardTitle);

      let img = document.createElement('img');
      img.classList.add('activator');
      if (myLibrary[i].title === 'The Hobbit') {
        img.src = 'images/hobbit.jpg';
      }
      else if (myLibrary[i].title === 'The Martian') {
        img.src = 'images/themartian.jpg';
      }
      cardContent.appendChild(img);

      let cardInfo = document.createElement('p');
      cardInfo.innerHTML = myLibrary[i].author + '<br>' + myLibrary[i].year +
        '<br>' + myLibrary[i].genre + '<br>' + myLibrary[i].status;
      cardContent.appendChild(cardInfo);

      loadedLibrary.push(myLibrary[i]);
    }
  }
}

render();
