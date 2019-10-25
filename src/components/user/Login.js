import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios"
import {Link} from "react-router-dom"
import { connect } from 'react-redux';
import { setUserWithCreds } from '../../actions';
import {showErrors} from "./userUtils"
import PulseLoader from 'react-spinners/PulseLoader';


function LoginForm({ errors, touched, isSubmitting, status }) {

  return (
    <div className="login-container">
      <Form className="main-form">
        
        <div className="errors"> 
          {!!status && <p style={{color: '#c92b2b'}}>{status.error}</p>}
        </div>
        <div className="above-boxes">
          <span>Username* </span>
          {showErrors('username',  isSubmitting, touched, errors)}
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
          {showErrors('password', isSubmitting, touched, errors)}
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
              {!!isSubmitting 
                  ? <PulseLoader className="pulse-loader" color="#cbcbcb"/> 
                  : 'Login'}
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

handleSubmit(values, { resetForm, setSubmitting, setStatus, props }) {
    const {history, setUserWithCreds} = props

    //Need to confirm login credentials with a user on server
    axios
        .post("https://dadjokesbw.herokuapp.com/api/auth/login", values)
        .then(res => {
          resetForm();
          setSubmitting(false);
          setStatus(res.data);
          setUserWithCreds(res.data);
          history.push('/home');
        })
        .catch(err => {
          console.error(err.response); 
          setSubmitting(false);
          setStatus({error:'Invalid Username or Password.'})
        });
    }
})(LoginForm);

export default connect(null, {setUserWithCreds})(FormikLoginForm);