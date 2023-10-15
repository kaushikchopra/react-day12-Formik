import { createContext, useState } from "react";

export const BookStoreContext = createContext();

const DataProvider = ({ children }) => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Harry Potter and the Philosopher's Stone",
      ISBN_number: "1338878921",
      publication_date: "1997-06-26",
      author: {
        name: "J.K. Rowling",
        birth_date: "1965-07-31",
        biography:
          "J.K. Rowling is a British author and philanthropist. She wrote Harry Potter, a seven-volume fantasy series published from 1997 to 2007.",
      },
    },
    {
      id: 2,
      title: "The Great Gatsby",
      ISBN_number: "978-0743273565",
      publication_date: "1925-04-10",
      author: {
        name: "F. Scott Fitzgerald",
        birth_date: "1896-09-24",
        biography:
          "F. Scott Fitzgerald was an American novelist and short-story writer, known for his works capturing the Jazz Age during the Roaring Twenties.",
      },
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      ISBN_number: "978-0446310789",
      publication_date: "1960-07-11",
      author: {
        name: "Harper Lee",
        birth_date: "1926-04-28",
        biography:
          "Harper Lee was an American novelist best known for her Pulitzer Prize-winning novel 'To Kill a Mockingbird'.",
      },
    },
  ]);


  const addBook = (book) => {
    book.id = Date.now();
    setBooks([...books, book]);
  };

  const deleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const [editing, setEditing] = useState(false);

  const initialBook = {
    id: 0,
    title: " ",
    ISBN_number: " ",
    publication_date: " ",
    author: {
      name: " ",
      birth_date: " ",
      biography: " ",
    },
  };

  const [currentBook, setCurrentBook] = useState(initialBook);

  const editBook = (id) => {
    const bookToEdit = books.find((book) => book.id === id);
    setEditing(true);
    setCurrentBook(bookToEdit);
  };

  const updateBook = (newBook) => {
    setBooks(newBook);
    setCurrentBook(initialBook);
    setEditing(false);
  };


  return (
    <div>
      <BookStoreContext.Provider
        value={{
          books,
          addBook,
          deleteBook,
          editBook,
          updateBook,
          currentBook,
          editing,
          setEditing,
        }}
      >
        {children}
      </BookStoreContext.Provider>
    </div>
  );
};

export default DataProvider;
