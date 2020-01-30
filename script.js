function book(title, author, year, pages, status) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.pages = pages;
  this.status = status;

  this.info = function() {
    return this.title + ' by ' + this.author + ', written in ' + this.year +
      ', ' + this.pages + ' pages, ' + this.status;
  }
}

const theHobbit = new book('The Hobbit', 'J.R.R. Tolkien', '1937', '295', 'read');

console.log(theHobbit.info());
