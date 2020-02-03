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

render();

// need to load these after the cards have been rendered
let delButtons = document.querySelectorAll('.del-btn');
let statusButtons = document.querySelectorAll('.status-btn');


newBookButton.addEventListener('click', showForm);
formBackground.addEventListener('click', hideForm);
cancelButton.addEventListener('click', hideForm);
submitButton.addEventListener('click', submit);

for (i=0; i < statusButtons.length - 1; i++) {
  statusButtons[i].addEventListener('click', function(e) {
    if (e.target.value === 'read') {
      e.target.value = 'unread';
      e.target.innerHTML = 'Unread';
      e.target.classList.toggle('unread');
      e.target.classList.toggle('read');
    }
    else if (e.target.value === 'unread') {
      e.target.value = 'read';
      e.target.innerHTML = 'Read';
      e.target.classList.toggle('unread');
      e.target.classList.toggle('read');
    }
  });
}

function book(title, author, year, genre, status) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
  this.status = status;
}

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

function deleteCard(e) {
  for (i=0; i < myLibrary.length; i++) {
    if (e.target.getAttribute('data-id') === i) {
      console.log('hi');
    }
  }
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
      card.setAttribute('data-id', i);
      cardsDiv.appendChild(card);

      let cardContent = document.createElement('div');
      cardContent.classList.add('card-content');
      card.appendChild(cardContent);

      let cardTitle = document.createElement('span');
      cardTitle.classList.add('card-title');
      cardTitle.innerHTML = '<u>' + myLibrary[i].title + '</u>';
      cardContent.appendChild(cardTitle);

      let cardAuthor = document.createElement('p');
      cardAuthor.innerHTML = myLibrary[i].author;
      cardAuthor.classList.add('card-author');
      cardContent.appendChild(cardAuthor);

      let img = document.createElement('img');
      img.classList.add('activator', 'z-depth-3');
      if (myLibrary[i].title === 'The Hobbit') {
        img.src = 'images/hobbit.jpg';
      }
      else if (myLibrary[i].title === 'The Martian') {
        img.src = 'images/themartian.jpg';
      }
      else {
        img.src = 'images/nocover.jpg';
      }
      cardContent.appendChild(img);

      let cardInfo = document.createElement('p');
      cardInfo.innerHTML = myLibrary[i].year +
        '<br>' + myLibrary[i].genre;
      cardContent.appendChild(cardInfo);

      let statusButton = document.createElement('button');
      statusButton.classList.add('btn', 'status-btn');
      statusButton.value = myLibrary[i].status;
      if (statusButton.value === 'read') {
        statusButton.innerHTML = 'Read';
        statusButton.classList.add('read');
      }
      else if (statusButton.value === 'unread') {
        statusButton.innerHTML = 'Unread';
        statusButton.classList.add('unread');
      }
      cardContent.appendChild(statusButton);

      let delButton = document.createElement('a');
      delButton.classList.add('btn-floating', 'del-btn');
      delButton.setAttribute('data-id', i);
      delButton.innerHTML = '<i class="material-icons">delete</i>';
      card.appendChild(delButton);

      loadedLibrary.push(myLibrary[i]);
    }
  }
}
