import React, { useContext } from "react";
import { BookStoreContext } from "../Context/BookStoreContext";
import { Link } from "react-router-dom";

const BookList = () => {
  const { books, deleteBook, editBook } = useContext(BookStoreContext);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Book List</h2>
      <div className="card">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th className="text-center">ID</th>
                <th className="text-center">Title</th>
                <th className="text-center">ISBN Number</th>
                <th className="text-center">Publication Date</th>
                <th className="text-center">Author</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td className="text-center">{book.id}</td>
                  <td className="text-center">{book.title}</td>
                  <td className="text-center">{book.ISBN_number}</td>
                  <td className="text-center">{book.publication_date}</td>
                  <td className="text-center">
                    {book.author && (
                      <ul className="list-unstyled">
                        <li>{book.author.name}</li>
                        <li>{book.author.birth_date}</li>
                        <li>{book.author.biography}</li>
                      </ul>
                    )}
                  </td>
                  <td className="text-center">
                    <Link to={`/edit/${book.id}`} className="btn btn-primary mb-2" onClick={() => editBook(book.id)}>
                      Edit
                    </Link>
                    <button className="btn btn-danger" onClick={() => deleteBook(book.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookList;
