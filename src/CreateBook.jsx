import { Form, Button } from "semantic-ui-react";
import "bootstrap/dist/css/bootstrap.css";
import { useFormik } from "formik";
import axios from "axios";
import { Api_url } from "./URL";
import { useNavigate } from 'react-router-dom';

function CreateBook() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      isbn: "",
      publication: "",
    },
    validate: (values) => {
      let errors = {};

      if (values.title == "") {
        errors.title = "Please enter a valid title";
      }

      if (values.author == "") {
        errors.author = "Please enter a valid author name";
      }

      if (values.isbn == "") {
        errors.isbn = "Please enter a valid ISBN number";
      }

      if (values.publication == "") {
        errors.publication = "Please enter a valid publication date";
      }

      return errors;
    },
    onSubmit: async (values, actions) => {
      await postdata(values);
      actions.resetForm();
    },
  });

  const postdata = async (values) => {
    try {
      var res = await axios.post(Api_url, values)
      console.log(res.data)
      navigate(`/portal/listbook`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container">
      <div className="row">

        <div className="col-md-12 create">

          <Form onSubmit={formik.handleSubmit} singleline className="Form">
            <h4 className="heading">Add Book details here</h4>
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
                    onBlur={formik.handleBlur}
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
                    onBlur={formik.handleBlur}
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
                    type="number"
                    id="isbn"
                    name="isbn"
                    value={formik.values.isbn}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
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
                    onBlur={formik.handleBlur}
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
            <Form.Field className="submit">
              <Button type="submit" className="btn btn-outline-primary">
                Submit
              </Button>
            </Form.Field>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default CreateBook;
