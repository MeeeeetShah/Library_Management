

# Library Management System

## Features
- Add books to the library.
- Borrow books if available.
- Return borrowed books.
- View all available books.

## Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Library_Management

2. Install dependencies:
    ```bash
     npm install

# Run Tests
----------

## Test Cases:-
- should add a book to the library
- should borrow a book from the library
- should view all available books
- should not borrow an unavailable book
- should return a borrowed book
- should not return a book which is not borrowed
- should not allow adding a duplicate book (same ISBN)
- should not allow borrowing a non-existent book
- should not allow return a non-existent book
- should view borrowed books
- should display all books (available and borrowed)
- should display an empty list if no books are added
- should search for books by title or author
- should not allow adding a book with missing or invalid details
- should not allow adiding book which doesn't have 10 digit isbn



## Run all tests using Jest:
   ```bash
   npm test
