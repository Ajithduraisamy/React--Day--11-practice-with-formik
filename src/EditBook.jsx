import { Form, Button } from "semantic-ui-react";
import "bootstrap/dist/css/bootstrap.css";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import axios from "axios";
import { Api_url } from "./URL";
import { useNavigate } from 'react-router-dom';

function EditBook() {
  const [storedId, setStoredId] = useState(null);
  const navigate = useNavigate();
  
  const [initialValues, setInitialValues] = useState({
    title: "",
    author: "",
    isbn: "",
    publication: "",
  })
  useEffect(() => {
    const storedId = localStorage.getItem("id");
    const storedTitle = localStorage.getItem("title");
    const storedAuthor = localStorage.getItem("author");
    const storedIsbn = localStorage.getItem("isbn");
    const storedPublication = localStorage.getItem("publication");

    setStoredId(storedId);
    setInitialValues({
      title: storedTitle || "",
      author: storedAuthor || "",
      isbn: storedIsbn || "",
      publication: storedPublication || "",
    });

    formik.setFieldValue("title", storedTitle || "");
    formik.setFieldValue("author", storedAuthor || "");
    formik.setFieldValue("isbn", storedIsbn || "");
    formik.setFieldValue("publication", storedPublication || "");

  }, []);

  const formik = useFormik({
    initialValues: initialValues,
    validate: (values) => {
      let errors = {};

      if (!values.title.trim()) {
        errors.title = "Please enter a valid title";
      }

      if (!values.author.trim()) {
        errors.author = "Please enter a valid author name";
      }

      if (!values.isbn.trim()) {
        errors.isbn = "Please enter a valid ISBN number";
      }

      if (!values.publication.trim()) {
        errors.publication = "Please enter a valid publication date";
      }

      return errors;
    },
    onSubmit: async (values, actions) => {
      await updatedata(values);
      actions.resetForm();
    },
  });

  const updatedata = async (values) => {
    try {
      if (storedId) {
        const res = await axios.put(`${Api_url}/${storedId}`, values);
        console.log(res.data);
        navigate(`/portal/listbook`)
      } else {
        console.log("Error: storedId is not set");
      }
    } catch (error) {
      console.log(error)
    }
  }

  console.log('Formik errors:', formik.errors);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 create">
          <Form onSubmit={formik.handleSubmit}>
            <Form.Field>
              <div className="row mb-3">
                <label for="title" className="col-lg-4 col-form-label">
                  Title
                </label>
                <div className="col-lg-8">
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    placeholder="Enter the title of the book"
                    className="form-control"
                    style={{
                      borderColor:
                        (formik.getFieldMeta("title").error &&
                          formik.getFieldMeta("title").touched) &&
                        "red",
                    }}
                  />
                  {formik.getFieldMeta("title").error &&
                    formik.getFieldMeta("title").touched && (
                      <span style={{ color: "red" }}>
                        {formik.getFieldMeta("title").error}
                      </span>
                    )}
                </div>
              </div>
            </Form.Field>
            <Form.Field>
              <div className="row mb-3">
                <label for="author" className="col-lg-4 col-form-label">
                  Author
                </label>
                <div className="col-lg-8">
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={formik.values.author}
                    onChange={formik.handleChange}
                    placeholder="Enter the author of the book"
                    className="form-control"
                    style={{
                      borderColor:
                        formik.getFieldMeta("author").error &&
                        formik.getFieldMeta("author").touched &&
                        "red",
                    }}
                  />
                  {formik.getFieldMeta("author").error &&
                    formik.getFieldMeta("author").touched && (
                      <span style={{ color: "red" }}>
                        {formik.getFieldMeta("author").error}
                      </span>
                    )}
                </div>
              </div>
            </Form.Field>
            <Form.Field>
              <div className="row mb-3">
                <label for="isbn" className="col-lg-4 col-form-label">
                  ISBN Number
                </label>
                <div className="col-lg-8">
                  <input
                    type="text"
                    id="isbn"
                    name="isbn"
                    value={formik.values.isbn}
                    onChange={formik.handleChange}
                    placeholder="Enter ISBN NUmber"
                    className="form-control"
                    style={{
                      borderColor:
                        formik.getFieldMeta("isbn").error &&
                        formik.getFieldMeta("isbn").touched &&
                        "red",
                    }}
                  />
                  {formik.getFieldMeta("isbn").error &&
                    formik.getFieldMeta("isbn").touched && (
                      <span style={{ color: "red" }}>
                        {formik.getFieldMeta("isbn").error}
                      </span>
                    )}
                </div>
              </div>
            </Form.Field>
            <Form.Field>
              <div className="row mb-3">
                <label for="publication" className="col-lg-4 col-form-label">
                  Publication Date
                </label>
                <div className="col-lg-8">
                  <input
                    type="date"
                    id="publication"
                    name="publication"
                    value={formik.values.publication}
                    onChange={formik.handleChange}
                    placeholder="Enter Publication Date"
                    className="form-control"
                    style={{
                      borderColor:
                        formik.getFieldMeta("publication").error &&
                        formik.getFieldMeta("publication").touched &&
                        "red",
                    }}
                  />
                  {formik.getFieldMeta("publication").error &&
                    formik.getFieldMeta("publication").touched && (
                      <span style={{ color: "red" }}>
                        {formik.getFieldMeta("publication").error}
                      </span>
                    )}
                </div>
              </div>
            </Form.Field>
            <Button type="submit" className="btn btn-success">
              Update
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default EditBook