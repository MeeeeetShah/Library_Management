class Library {
    constructor() {
      this.books = [];
      this.borrowedBooks = new Set();
    }
  
    addBook(book) {
      const { isbn, title, author, year } = book;
    
      // Validate ISBN
      if (!/^\d{10}$/.test(isbn)) {
        throw new Error("ISBN must be a 10-digit number");
      }
    
      // Validate other book details
      if (!isbn || !title || !author || !year) {
        throw new Error("Book details are invalid");
      }
    
      // Check for duplicate ISBN
      if (this.books.some((b) => b.isbn === isbn)) {
        throw new Error("Book with this ISBN already exists");
      }
    
      // Add the book to the collection
      this.books.push(book);
    }
    
  
  
    borrowBook(isbn) {
      const bookExists = this.books.some((b) => b.isbn === isbn);
      if (!bookExists) {
        throw new Error("Book does not exist");
      }
    
      const bookIsBorrowed = this.borrowedBooks.has(isbn);
      if (bookIsBorrowed) {
        throw new Error("Book is not available");
      }
    
      this.borrowedBooks.add(isbn);
    }
    
    
    returnBook(isbn) {
      const bookExists = this.books.some((b) => b.isbn === isbn);
      if (!bookExists) {
        throw new Error("Book does not exist");
      }
    
      if (!this.borrowedBooks.has(isbn)) {
        throw new Error("This book was not borrowed");
      }
    
      this.borrowedBooks.delete(isbn);
    }
    
    
      viewAvailableBooks() {
        return this.books.filter((b) => !this.borrowedBooks.has(b.isbn));
      }

      viewBorrowedBooks() {
        return this.books.filter((b) => this.borrowedBooks.has(b.isbn));
      }

      viewAllBooks() {
     return this.books;
     }

     searchBooks(query) {
      return this.books.filter(
        (b) =>
          b.title.toLowerCase().includes(query.toLowerCase()) ||
          b.author.toLowerCase().includes(query.toLowerCase())
      );
    }
    


  }
  
  module.exports = Library;
  