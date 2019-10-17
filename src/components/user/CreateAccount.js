import React, {useState, useEffect} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios"

function CreateForm({status, values, errors, touched, isSubmitting }) {

  const checkForError = (type) => {
        return touched[type] && errors[type]
      }

  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (status) {
      setUsers([...users, status]);
    }
    // eslint-disable-next-line
  }, [status]);

  return (
    <div className="form-container">
      <Form className="main-form">
        <h1>Create Account</h1>
        <div>Name* {checkForError('name') && <span className="error-text">{errors.name}</span>}</div>
        <div>
          <Field 
            type="name" 
            name="name" 
            // placeholder="Name" 
          />
        </div>
        <div>Email* {checkForError('email') && <span className="error-text">{errors.email}</span>}</div>
        <div>
          <Field 
            type="email" 
            name="email" 
            // placeholder="Email" 
          />
        </div>
        <div>Password* {checkForError('password') && <span className="error-text">{errors.password}</span>}</div>
        <div>
          <Field 
            type="password" 
            name="password" 
            // placeholder="Password" 
          />
        </div>
        <div>Confirm Password* {checkForError('passwordConf') && <span className="error-text">{errors.passwordConf}</span>}</div>
        <div>
          <Field 
            type="password" 
            name="passwordConf" 
            // placeholder="Confirm Password" 
          />
        </div>
        <div>
            Already have an account?  Login
            {/* <a href={}>Login</a> */}
        </div>

        <button 
          className="submit-button" 
          type="submit" 
          disabled={isSubmitting}>
            Sign Up
        </button>
      </Form>
    </div>
    
  );
}



const FormikAccountForm = withFormik({

  
  mapPropsToValues({ email, password, name, passwordConf }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      passwordConf: passwordConf || ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid Email")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters or longer")
      .required("Password is required"),
    passwordConf: Yup.string()
     .required("Please confirm password")
     .oneOf([Yup.ref('password'), null], 'Passwords do not match')
  }),

handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus }) {
    axios
        .post("https://reqres.in/api/users", values)
        .then(response => {
          resetForm();
          setSubmitting(false);
          setStatus(response.data)
        })
        .catch(err => {
          console.log(err); 
          setSubmitting(false);
        });
    }
})(CreateForm);

export default FormikAccountForm;