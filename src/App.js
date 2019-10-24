import React, { useEffect } from 'react';
import {Route, Redirect, Switch} from "react-router";
import axiosWithAuth from './utils/axiosWithAuth';
import { connect } from 'react-redux';
import PrivateRoute from './utils/PrivateRoute';
import { loginUser } from './actions';
import "./App.css";

//component import
import FormikAccountForm from './components/user/CreateAccount'
import FormikLoginForm from './components/user/Login'
import Footer from "./components/Footer"
import LandingPage from './components/LandingPage';
import Home from "./components/Home"
import CreateLoginHeader from "./components/CreateLoginHeader";

function App(props) {
  const { token, id, loginUser } = props;
  useEffect(() => {
    axiosWithAuth()
      .get(`https://dadjokesbw.herokuapp.com/api/users/${id}`)
      .then(res => {
        loginUser(res.data);
      })
      .catch(err => console.error(err.response))
  }, [token])

  return (
    <div className="App">
      <CreateLoginHeader />
      <Switch>
        <Route 
          exact 
          path="/signup" 
          render={props=> 
            <FormikAccountForm {...props} validateOnChange={false} validateOnBlur={false}/>
          }
        />
        <Route 
          exact 
          path="/login" 
          render={props=> 
            <FormikLoginForm {...props} validateOnChange={false} validateOnBlur={false}/>
          }
        />
        <Route exact path="/" render={props => <LandingPage {...props} />} />
        <Route exact path="/home" render={props => <Home {...props} />}/>
        <Route render={() => <Redirect to={{pathname: "/"}} />} />
      </Switch>
      <Footer />
    </div>
  );
}

const mapStateToProps = state => ({
  token: state.userReducer.token,
  id: state.userReducer.user.id
})

export default connect(mapStateToProps, {loginUser})(App);
