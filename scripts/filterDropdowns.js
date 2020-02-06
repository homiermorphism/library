const dropdownMenus = document.querySelectorAll('.dropdown-menu');
const titleDropdown = document.getElementById('title-dropdown');
const authorDropdown = document.getElementById('author-dropdown');
const yearDropdown = document.getElementById('year-dropdown');
const genreDropdown = document.getElementById('genre-dropdown');

titleDropdown.addEventListener('click', showDropdown);
authorDropdown.addEventListener('click', showDropdown);
yearDropdown.addEventListener('click', showDropdown);
genreDropdown.addEventListener('click', showDropdown);

function showDropdown(e) {
  let dropdownOptions = e.target.parentNode.getElementsByTagName('ul')[0];
  dropdownOptions.classList.toggle('show-dropdown');
  dropdownOptions.classList.toggle('hide-dropdown');
}

for (i=0; i < dropdownMenus.length; i++) {
  let ul = dropdownMenus[i].querySelectorAll('ul');
  for (j=0; j < ul.length; j++) {
    let li = ul[j].querySelectorAll('li');
    let field = ul[j].previousElementSibling.innerHTML;
    for (k=0; k < li.length; k++) {
      li[k].addEventListener('click', function(e) {
        if (e.target.classList.contains('a-z')) {
          sortAtoZ(field);
        }
        else if (e.target.classList.contains('z-a')) {
          sortZtoA(field);
        }
        e.stopPropagation();
      });
    }
  }
}

function sortAtoZ(field) {
  myLibrary.sort(sortBy(field, false));
  render();
}

function sortZtoA(field) {
  myLibrary.sort(sortBy(field, true));
  render();
}

function sortBy(field, reverse, primer) {
    const key = primer ?
      function(x) {
        return primer(x[field])
      } :
      function(x) {
        return x[field]
      };

    reverse = !reverse ? 1 : -1;

    return function(a, b) {
      return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    }
}

function closeAllDropdowns(e) {
  let openItems = document.querySelectorAll('.show-dropdown');
}
