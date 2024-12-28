const Library = require('../library');

test('should add a book to the library', () => {
  const library = new Library();
  const book = { title: 'The Great Gatsby', author: 'Meet Shah', isbn: '1234567890' };
  library.addBook(book);
  expect(library.getBooks()).toContain(book);
});
