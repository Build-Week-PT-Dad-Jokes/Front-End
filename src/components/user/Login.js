import React, {useState, useEffect} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios"
import {Link} from "react-router-dom"

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
    <div className="login-container">
      <h1>Login</h1>
      <Form className="main-form">
        
        <div className="errors"> 
        </div>
        <div className="above-boxes">
          <span>Email* </span>
          {checkForError('email') && <span className="error-text">{errors.email}</span>}
        </div>
        <div>
          <Field 
            className="text-box"
            type="email" 
            name="email" 
            // placeholder="Email"                                                
          />
        </div>
        <div className="above-boxes">
          <span>Password*  </span>
          {checkForError('password') && <span className="error-text">{errors.password}</span>}
        </div>
        
        <div>
          <Field 
            className="text-box"
            type="password" 
            name="password" 
            // placeholder="Password" 
          />
        </div>
        <div className="bottom-form">
          <div>
              Don't have an account?  
              <Link to="/signup">
                <p>Sign Up</p>
              </Link>
          </div>

          <button 
            className="submit-button" 
            type="submit" 
            disabled={isSubmitting}>
              Login
          </button>
        </div>
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