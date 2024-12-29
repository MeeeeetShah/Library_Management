const Library = require('../library');

test('should add a book to the library', () => {
  const library = new Library();
  const book = { title: 'The Great Gatsby', author: 'Meet Shah', isbn: '1234567890',year:1925 };
  library.addBook(book);
  const books = library.viewAvailableBooks();
  expect(books).toHaveLength(1);
  expect(books[0].title).toBe("The Great Gatsby");
  
});

test("should borrow a book from the library", () => {
  const library = new Library();
  const book = { title: 'The Great Gatsby', author: 'Meet Shah', isbn: '1234567890',year:1925 };
  library.addBook(book);

  library.borrowBook("1234567890");
  const books = library.viewAvailableBooks();
  expect(books).toHaveLength(0);
});

test("should not borrow an unavailable book", () => {
  const library = new Library();
  library.addBook({
    isbn: "1234567890",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  });

  library.borrowBook("1234567890");
  expect(() => library.borrowBook("1234567890")).toThrow("Book is not available");
});

test("should return a borrowed book", () => {
  const library = new Library();
  library.addBook({
    isbn: "1234567890",
    title: "The Great Gatsby",
    author: "Meet Shah",
    year: 1925,
  });

  library.borrowBook("1234567890");
  library.returnBook("1234567890");
  const books = library.viewAvailableBooks();
  expect(books).toHaveLength(1);
});

test("should not return a book which is not borrowed", () => {
  const library = new Library();
  library.addBook({
    isbn: "1234567890",
    title: "The Great Gatsby",
    author: "Meet Shah",
    year: 1925,
  });

  library.borrowBook("1234567890");
  expect(() => library.returnBook("1234567899")).toThrow("This book was not borrowed");
});





  
  // expect(library.getBooks()).toContain(book);

