const newBookButton = document.getElementById('new-book');
const newBookForm = document.querySelector('.form');
const cancelButton = document.getElementById('cancel');
const submitButton = document.getElementById('submit');
const formStatus = document.getElementById('form-status');
const formBackground = document.querySelector('.form-bg');
const formTitle = document.getElementById('form-title');
const formAuthor = document.getElementById('form-author');
const formYear = document.getElementById('form-year');
const formGenre = document.getElementById('form-genre');

newBookButton.addEventListener('click', showForm);
formBackground.addEventListener('click', hideForm);
cancelButton.addEventListener('click', hideForm);
submitButton.addEventListener('click', submit);
formStatus.addEventListener('click', switchStatus);

function resetForm() {
  formTitle.value = '';
  formAuthor.value = '';
  formYear.value = '';
  formGenre.value = '';
  formStatus.value = 'read';
}

function showForm() {
  resetForm();
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
  addBookToLibrary(title, author, year, genre, status);

  hideForm();
  render();
}
