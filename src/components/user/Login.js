import React, {useState, useEffect} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios"

function LoginForm({status, values, errors, touched, isSubmitting }) {

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
        <h1>Login</h1>
        <div className="errors"> 
        </div>
        <div>Email* {checkForError('email') && <span className="error-text">{errors.email}</span>}</div>
        <div>
          <Field 
            type="email" 
            name="email" 
            // placeholder="Email" 
          />
        </div>
        <div>Password*  {checkForError('password') && <span className="error-text">{errors.password}</span>}</div>
        <div>
          <Field 
            type="password" 
            name="password" 
            // placeholder="Password" 
          />
        </div>
        <div>
            Don't have an account?  Sign Up
            {/* <a href={}>Login</a> */}
        </div>

        <button 
          className="submit-button" 
          type="submit" 
          disabled={isSubmitting}>
            Sign In
        </button>
      </Form>
    </div>
    
  );
}



const FormikLoginForm = withFormik({

  
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || "",
    };
  },

  validationSchema: Yup.object().shape({
    
    email: Yup.string()
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required"),
    
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
})(LoginForm);

export default FormikLoginForm;