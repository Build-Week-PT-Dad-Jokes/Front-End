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
import { connect } from 'react-redux';
import { loginUser } from '../../actions';

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
      {/* <h1>Login</h1> */}
      <Form className="main-form">
        
        <div className="errors"> 
        </div>
        <div className="above-boxes">
          <span>Username* </span>
          {showErrors('username')}
        </div>
        <div>
          <Field 
            className="text-box"
            type="name" 
            name="username" 
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

  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
    };
  },

  validationSchema: Yup.object().shape({
    
    username: Yup.string()
      .required("Username is required"),
    password: Yup.string()
      .required("Password is required"),
    
  }),

handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus, props }) {
    const { history, loginUser } = props

    //Need to confirm login credentials with a user on server
    axios
        .post("https://dadjokesbw.herokuapp.com/api/auth/login", values)
        .then(res => {
          resetForm();
          setSubmitting(false);
          setStatus(res.data)
          console.log('Login.js: handleSubmit: res: ', res)
          history.push('/home')
        })
        .catch(err => {
          console.error(err.response); 
          setSubmitting(false);
        });
    }
})(LoginForm);

export default connect(null, {loginUser})(FormikLoginForm);