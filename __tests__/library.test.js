const Library = require('../library');
const library = new Library();

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

test("should view all available books", () => {
  const library = new Library();
  library.addBook({
    isbn: "1234567890",
    title: "The Great Gatsby",
    author: "Meet Shah",
    year: 1925,
  });
  library.addBook({
    isbn: "9876543211",
    title: "1984",
    author: "George Orwell",
    year: 1949,
  });

  const books = library.viewAvailableBooks();
  expect(books).toHaveLength(2);
  expect(books[0].title).toBe("The Great Gatsby");
  expect(books[1].title).toBe("1984");
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
 
  expect(() => library.returnBook("1234567890")).toThrow("This book was not borrowed");
});

test("should not allow adding a duplicate book (same ISBN)", () => {
  const library = new Library();
  library.addBook({
    isbn: "1234567890",
    title: "The Great Gatsby",
    author: "Meet Shah",
    year: 1925,
  });

  expect(() =>
    library.addBook({
      isbn: "1234567890",
      title: "Duplicate Book",
      author: "Another Author",
      year: 1930,
    })
  ).toThrow("Book with this ISBN already exists");
});

test("should not allow borrowing a non-existent book", () => {
  expect(() => library.borrowBook("9999999999")).toThrow("Book does not exist");
});

test("should not allow return a non-existent book", () => {
  expect(() => library.returnBook("9999999999")).toThrow("Book does not exist");
});

test("should view borrowed books", () => {
  library.addBook({
    isbn: "123456789",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  });
  library.addBook({
    isbn: "987654321",
    title: "1984",
    author: "George Orwell",
    year: 1949,
  });

  library.borrowBook("123456789");
  const borrowedBooks = library.viewBorrowedBooks();

  expect(borrowedBooks).toHaveLength(1);
  expect(borrowedBooks[0].title).toBe("The Great Gatsby");
});

test("should display all books (available and borrowed)", () => {
  // Create a library instance
  const library = new Library();

  // Add books to the library
  
  library.addBook({
    isbn: "1234567890",
    title: "The Great Gatsby",
    author: "Meet Shah",
    year: 1925,
  });
  library.addBook({
    isbn: "9876543211",
    title: "1984",
    author: "George Orwell",
    year: 1949,
  });

  // Borrow one  Book from the library
  library.borrowBook("1234567890");

  // Expected result
  const expectedAllBooks = [
    {
      isbn: "1234567890",
      title: "The Great Gatsby",
      author: "Meet Shah",
      year: 1925,
    },
    {
      isbn: "9876543211",
    title: "1984",
    author: "George Orwell",
    year: 1949,
      
    },
  ];

  // Call viewAllBooks and verify the result
  const allBooks = library.viewAllBooks();
  expect(allBooks).toEqual(expectedAllBooks);
});

test("should display an empty list if no books are added", () => {
  const library = new Library();
  expect(library.viewAllBooks()).toEqual([]);
});

test("should search for books by title or author", () => {
  library.addBook({
    isbn: "123456789",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  });
  library.addBook({
    isbn: "987654321",
    title: "1984",
    author: "George Orwell",
    year: 1949,
  });

  const searchResults = library.searchBooks("Gatsby");
  expect(searchResults).toHaveLength(1);
  expect(searchResults[0].title).toBe("The Great Gatsby");

  const authorResults = library.searchBooks("George Orwell");
  expect(authorResults).toHaveLength(1);
  expect(authorResults[0].title).toBe("1984");
});


  
  