import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faExclamationCircle, 
  faCheckCircle, 
  } from '@fortawesome/free-solid-svg-icons'

function LoginForm({ errors, touched, isSubmitting }) {

  const checkForError = (type) => {
        return touched[type] && errors[type]
      }

  const showErrors = (type) => {

    if(checkForError(type)) {
      return(
        <div>
          <span className="error-text">
            {errors[type]}</span>
          <FontAwesomeIcon className="error-icon" icon={faExclamationCircle}/>
        </div>
      )
    }
    else if(isSubmitting) {
      return <FontAwesomeIcon className="check-icon" icon={faCheckCircle}/>
    }
  }


  return (
    <div className="login-container">
      <h1>Login</h1>
      <Form className="main-form">
        
        <div className="errors"> 
        </div>
        <div className="above-boxes">
          <span>Username* </span>
          {showErrors('name')}
        </div>
        <div>
          <Field 
            className="text-box"
            type="name" 
            name="name" 
          />
        </div>
        <div className="above-boxes">
          <span>Password*  </span>
          {showErrors('password')}
        </div>
        
        <div>
          <Field 
            className="text-box"
            type="password" 
            name="password" 
          />
        </div>
        <div className="bottom-form">
          <div>
              <p>Don't have an account? </p> 
              <Link to="/signup">
                <p className="form-link">Create One</p>
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

  
  mapPropsToValues({ name, password }) {
    return {
      name: name || "",
      password: password || "",
    };
  },

  validationSchema: Yup.object().shape({
    
    name: Yup.string()
      .required("Username is required"),
    password: Yup.string()
      .required("Password is required"),
    
  }),

handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus, props }) {
    const {history} = props

    //Need to confirm login credentials with a user on server
    axios
        .post("https://reqres.in/api/users", values)
        .then(response => {
          resetForm();
          setSubmitting(false);
          setStatus(response.data)
        })
        .then(()=>{
          history.push('/')
        })
        .catch(err => {
          console.log(err); 
          setSubmitting(false);
        });
    }
})(LoginForm);

export default FormikLoginForm;