import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { BookStoreContext } from "../Context/BookStoreContext";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const { addBook } = useContext(BookStoreContext);
  const navigate = useNavigate();

  const initialValues = {
    title: "",
    ISBN_number: "",
    publication_date: "",
    author: {
      name: "",
      birth_date: "",
      biography: "",
    },
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.title || !values.title.trim()) {
      errors.title = "Title is required";
    }

    if (!values.ISBN_number || !values.ISBN_number.trim()) {
      errors.ISBN_number = "ISBN Number is required";
    }

    if (!values.publication_date) {
      errors.publication_date = "Publication Date is required";
    }

    if (!values.author || !values.author.name || !values.author.name.trim()) {
      errors.author = { ...errors.author, name: "Author Name is required" };
    }

    if (!values.author || !values.author.birth_date || !values.author.birth_date.trim()) {
      errors.author = { ...errors.author, birth_date: "Birth Date is required" };
    }

    if (!values.author || !values.author.biography || !values.author.biography.trim()) {
      errors.author = { ...errors.author, biography: "Biography is required" };
    }

    return errors;
  };


  const handleSubmit = (values, { resetForm }) => {
    addBook(values);
    resetForm();
    navigate("/");
  };

  return (
    <div className="container my-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Add a New Book</h2>
          <Formik initialValues={initialValues} validate={validateForm} onSubmit={handleSubmit}>
            <Form>
              <div className="mb-3">
                <label htmlFor="title" className="form-label fs-5 mx-2">Title</label>
                <Field type="text" id="title" name="title" className="form-control" />
                <ErrorMessage name="title" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label htmlFor="ISBN_number" className="form-label fs-5 mx-2">ISBN Number</label>
                <Field type="text" name="ISBN_number" className="form-control" />
                <ErrorMessage name="ISBN_number" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label htmlFor="publication_date" className="form-label fs-5 mx-2">Publication Date</label>
                <Field type="date" name="publication_date" className="form-control" />
                <ErrorMessage name="publication_date" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label className="d-block form-label fs-3 text-center">Author</label>
                <div className="mb-3">
                  <label htmlFor="author.name" className="form-label fs-5 mx-2">Name</label>
                  <Field type="text" name="author.name" className="form-control" />
                  <ErrorMessage name="author.name" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label htmlFor="author.birth_date" className="form-label fs-5 mx-2">Birth Date</label>
                  <Field type="date" name="author.birth_date" className="form-control" />
                  <ErrorMessage name="author.birth_date" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label htmlFor="author.biography" className="form-label fs-5 mx-2">Biography</label>
                  <Field as="textarea" name="author.biography" rows="4" className="form-control" />
                  <ErrorMessage name="author.biography" component="div" className="text-danger" />
                </div>
              </div>

              <div className="text-center">
                <button className="btn btn-primary mx-3" type="submit">Submit</button>
                <button className="btn btn-secondary mx-3" type="button" onClick={() => navigate("/add")}>Cancel</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
