class Library {
    constructor() {
      this.books = [];
      this.borrowedBooks = new Set();
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    borrowBook(isbn) {
      const bookIndex = this.books.findIndex((b) => b.isbn === isbn && !this.borrowedBooks.has(isbn));
    if (bookIndex === -1) {
      throw new Error("Book is not available");
    }
    this.borrowedBooks.add(isbn);
      
    } 
    
    returnBook(isbn) {
          if (!this.borrowedBooks.has(isbn)) {
          throw new Error("This book was not borrowed");
          }
        this.borrowedBooks.delete(isbn);
      }
    
    
    getBooks() {
      return this.books;
    }

  }
  
  module.exports = Library;
  