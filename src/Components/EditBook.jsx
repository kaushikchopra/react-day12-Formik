import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { BookStoreContext } from "../Context/BookStoreContext";

const EditBook = () => {
  const { books, currentBook, updateBook } = useContext(BookStoreContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const initialValues = {
    title: currentBook.title,
    ISBN_number: currentBook.ISBN_number,
    publication_date: currentBook.publication_date,
    author: {
      name: currentBook.author.name,
      birth_date: currentBook.author.birth_date,
      biography: currentBook.author.biography,
    },
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.title.trim()) {
      errors.title = "Title is required";
    }

    if (!values.ISBN_number.trim()) {
      errors.ISBN_number = "ISBN Number is required";
    }

    if (!values.publication_date) {
      errors.publication_date = "Publication Date is required";
    }

    if (!values.author.name.trim()) {
      errors.author.name = "Author Name is required";
    }

    if (!values.author.birth_date.trim()) {
      errors.author.birth_date = "Birth Date is required";
    }

    if (!values.author.biography.trim()) {
      errors.author.biography = "Biography is required";
    }

    return errors;
  };

  const onSubmit = (values) => {
    // Find the index of the book to update
    const bookIndex = books.findIndex((book) => book.id === Number(id));

    if (bookIndex !== -1) {
      // Create a new array of books with the updated book
      const updatedBooks = [...books];
      updatedBooks[bookIndex] = { ...updatedBooks[bookIndex], ...values };

      // Update the book list
      updateBook(updatedBooks);

      // Navigate to the book list
      navigate("/");
    }
  };

  return (
    <div className="container my-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Edit Book</h2>
          <Formik
            initialValues={initialValues}
            validate={validateForm}
            onSubmit={onSubmit}
          >
            <Form>
              <div className="mb-3">
                <label htmlFor="title" className="form-label fs-5 mx-2">
                  Title
                </label>
                <Field
                  type="text"
                  id="title"
                  name="title"
                  className="form-control"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="ISBN_number" className="form-label fs-5 mx-2">
                  ISBN Number
                </label>
                <Field
                  type="text"
                  name="ISBN_number"
                  className="form-control"
                />
                <ErrorMessage
                  name="ISBN_number"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="publication_date"
                  className="form-label fs-5 mx-2"
                >
                  Publication Date
                </label>
                <Field
                  type="date"
                  name="publication_date"
                  className="form-control"
                />
                <ErrorMessage
                  name="publication_date"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label className="d-block form-label fs-3 text-center">
                  Author
                </label>
                <div>
                  <label htmlFor="author.name" className="form-label fs-5 mx-2">
                    Name
                  </label>
                  <Field
                    type="text"
                    name="author.name"
                    className="form-control mb-3"
                  />
                  <ErrorMessage
                    name="author.name"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div>
                  <label
                    htmlFor="author.birth_date"
                    className="form-label fs-5 mx-2"
                  >
                    Birth Date
                  </label>
                  <Field
                    type="date"
                    name="author.birth_date"
                    className="form-control mb-3"
                  />
                  <ErrorMessage
                    name="author.birth_date"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div>
                  <label
                    htmlFor="author.biography"
                    className="form-label fs-5 mx-2"
                  >
                    Biography
                  </label>
                  <Field
                    as="textarea"
                    name="author.biography"
                    rows="4"
                    className="form-control mb-3"
                  />
                  <ErrorMessage
                    name="author.biography"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </div>

              <div className="text-center">
                <button className="btn btn-primary mx-3" type="submit">
                  Update Book
                </button>
                <button
                  className="btn btn-secondary mx-3"
                  type="button"
                  onClick={() => navigate("/")}
                >
                  Cancel
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
