class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    borrowBook(isbn) {
      this.books = this.books.filter(book => book.isbn !== isbn);
    }    
    getBooks() {
      return this.books;
    }

  }
  
  module.exports = Library;
  