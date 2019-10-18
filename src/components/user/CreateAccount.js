import React, {useState, useEffect} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios"
import {Link} from "react-router-dom"

function CreateForm({history, status, values, errors, touched, isSubmitting }) {

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
    <div className="signup-container">
      <h1>Sign up</h1>
      <Form className="main-form">
        <div className="above-boxes">
          <span>Email*</span> 
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
          <span>Username* </span>
          {checkForError('name') && <span className="error-text">{errors.name}</span>}
        </div>
        
        <div>
          <Field 
            className="text-box"
            type="name" 
            name="name" 
          />
        </div>
        <div className="above-boxes">
          <span>Password* </span>
          {checkForError('password') && <span className="error-text">{errors.password}</span>}
        </div>
        
        <div>
          <Field 
            className="text-box"
            type="password" 
            name="password" 
          />
        </div>
        <div className="above-boxes">
          <span>Confirm Password* </span>
          {checkForError('passwordConf') && <span className="error-text">{errors.passwordConf}</span>}
        </div>
        
        <div>
          <Field 
            className="text-box"
            type="password" 
            name="passwordConf" 
          />
        </div>
        <div className="bottom-form">
          <div>
              <p>Already have an account? </p> 
              <Link to="/login">
                <p className="form-link">Login</p>
              </Link>
          </div>
            <button 
              className="submit-button" 
              type="submit" 
              disabled={isSubmitting}>
                Create Account
            </button>
        </div>
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
      .min(8, "Password must be 8 characters or longer")
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
        .then(resp=>{
          
        })
        .catch(err => {
          console.log(err); 
          setSubmitting(false);
        });
    }
})(CreateForm);

export default FormikAccountForm;