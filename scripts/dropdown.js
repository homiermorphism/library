const dropdownMenus = document.querySelectorAll('.dropdown-menu');
const titleDropdown = document.getElementById('title-dropdown');

titleDropdown.addEventListener('click', showDropdown);

function showDropdown(e) {
  let dropdownOptions = e.target.parentNode.getElementsByTagName('ul')[0];
  dropdownOptions.classList.toggle('show-dropdown');
  dropdownOptions.classList.toggle('hide-dropdown');
}

for (i=0; i < dropdownMenus.length; i++) {
  let ul = dropdownMenus[i].querySelectorAll('ul')[0];
  let li = ul.querySelectorAll('li');
  for (j=0; j < li.length; j++) {
    li[j].addEventListener('click', function(e) {
      if (e.target.classList.contains('a-z')) {
        sortAtoZ('title');
      }
      else if (e.target.classList.contains('z-a')) {
        sortZtoA('title');
      }
      e.stopPropagation();
    });
  }
}

function sortAtoZ(field) {
  myLibrary.sort(sortBy(field, false));
  let c = document.querySelectorAll('.card');
  for (i=0; i < c.length; i++) {
    c[i].remove();
  }
  loadedLibrary = [];
  render();
}

function sortZtoA(field) {
  myLibrary.sort(sortBy(field, true));
  let c = document.querySelectorAll('.card');
  for (i=0; i < c.length; i++) {
    c[i].remove();
  }
  loadedLibrary = [];
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
